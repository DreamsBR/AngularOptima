import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { PagosService } from '../pagos/pagos.service'
import { VentaConsultaClienteDetalleService } from './ventas-consulta-cliente-detalle.service'
import { Router } from '@angular/router'
import { Venta } from '../ventas/venta'
import { Pago } from '../pagos/pago'
import sleep from 'await-sleep'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { Cliente } from '../clientes/cliente'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import * as moment from 'moment'
import { Financiamiento } from '../financiamientos/financiamiento'
import { MatSnackBar } from '@angular/material/snack-bar'

import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
// import { DatepickerRoundedComponent } from ''
@Component({
  selector: 'app-ventas-consulta-cliente-detalle',
  templateUrl: './ventas-consulta-cliente-detalle.component.html',
  styleUrls: ['./ventas-consulta-cliente-detalle.component.css']
})
export class VentasConsultaClienteDetalleComponent implements OnInit {
  paramIdVenta: number = null

  status: boolean = false
  loading: boolean = false
  errors: string[] = []

  venta: Venta = new Venta()

  ventaClienteId: number = null
  ventaFinanciamientoId: number = null

  formPagoWarnings: string[] = []
  formPagoErrores: string[] = []
  formPagoNroRecibo: string = ''
  formPagoMonto: string = ''
  formPagoFecha: string = ''

  cliente: Cliente = new Cliente()
  financiamiento: Financiamiento = new Financiamiento()

  // Sort Datos
  svFechaCaida: NgbDateStruct

  fieldsTblPagos: string[] = ['editar', 'numeroOperacion', 'fecha', 'monto']
  pagos = new MatTableDataSource<Pago>()
  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  pageSizeOptions: number[] = [5, 10, 25, 250]

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(
    private activatedRoute: ActivatedRoute,
    private vccdService: VentaConsultaClienteDetalleService,
    private pagosService: PagosService,
    public authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initFunctions()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['success-snackbar']
    })
  }

  onPagoModalChanged(newdate: string) {
    this.formPagoFecha = newdate
  }

  limpiarFormulario() {
    this.formPagoErrores = []
    this.formPagoWarnings = []
    this.formPagoNroRecibo = ''
    this.formPagoMonto = ''
    this.formPagoFecha = ''
  }

  btnPagoGuardar() {
    this.formPagoWarnings = []
    this.formPagoErrores = []
    if (
      this.formPagoFecha === '' ||
      this.formPagoMonto.trim() === '' ||
      this.formPagoNroRecibo === ''
    ) {
      this.formPagoWarnings = ['Todos los campos deben ser completados']
    } else {
      this.loading = true
      const regPago = new Pago()
      regPago.idVenta = this.paramIdVenta
      regPago.numeroOperacion = parseInt(this.formPagoNroRecibo)
      regPago.monto = parseFloat(this.formPagoMonto)
      regPago.fecha = this.formPagoFecha.split('-').reverse().join('-') // API solo acepta en formato YYYY-MM-DD
      regPago.enable = 1
      regPago.pagado = 1
      regPago.porcentaje = ''
      document.getElementById('btnPagoClose').click()

      this.pagosService.postGuardarPago(regPago).subscribe(
        (_) => {
          this.loading = false
          this.openSnackBar('✓ Pago guardado', 'Cerrar')
          this.refreshTablaPagos()
        },
        (err) => {
          this.loading = false
          this.formPagoErrores = ['Hubo un problema recuperando información adicional de la venta']
          console.log(err)
        }
      )
    }
  }

  initFunctions() {
    this.paramIdVenta = parseInt(this.activatedRoute.snapshot.params.id)

    const _self = this
    _self.vccdService.fetchingInfoVenta(this.paramIdVenta).subscribe(
      (resp) => {
        _self.venta = resp
        _self.ventaClienteId = resp.idCliente
        _self.ventaFinanciamientoId = resp.idFinanciamiento

        _self.getInfoExtra()

        this.getInfoExtra().subscribe(
          (resp_extra) => {
            this.cliente = resp_extra[0]
            this.financiamiento = resp_extra[1]
            this.pagos = new MatTableDataSource<Pago>(resp_extra[2])
          },
          (e) => {
            this.errors = ['Hubo un problema recuperando información adicional de la venta']
            console.log(e)
          }
        )
      },
      (error) => {
        _self.errors = ['Hubo un problema recuperando la información de la venta']
        console.log(error)
      }
    )

    /* this.getInfo().subscribe(
      (resp) => {
        this.cliente = resp[0]
        // console.log(this.cliente)
      },
      (error) => {
        this.errors = ['Hubo un problema recuperando la información de la API.']
        console.log(error)
      }
    ) */
  }

  onFechaCaidaChanged(newdate: string) {
    console.log(newdate)
  }

  getInfoVenta() {}

  getInfoExtra(): Observable<any[]> {
    let infoCliente = this.vccdService.getClienteById(this.ventaClienteId)
    let infoFinanciamiento = this.vccdService.getFinanciamientoById(this.ventaFinanciamientoId)
    let infoPagos = this.pagosService.getPagosByIdVenta(this.paramIdVenta)
    return forkJoin([infoCliente, infoFinanciamiento, infoPagos])
  }

  refreshTablaPagos () {
    this.pagosService.getPagosByIdVenta(this.paramIdVenta).subscribe(
      (resp) => {
        this.pagos = new MatTableDataSource<Pago>(resp)
      },
      (e) => {
        this.errors = ['Hubo un problema recuperando información adicional de la venta']
        console.log(e)
      }
    )
  }

  get formatNacimientoEdad(): string {
    if (typeof this.cliente.fechaNacimiento !== 'undefined') {
      const fNac = this.cliente.fechaNacimiento.substring(0, 10) // Formato YYYY-MM-DD
      const edad = moment().diff(fNac, 'years', false)
      return `${fNac.split('-').reverse().join('-')} (${edad} años)`
    } else {
      return '--'
    }
  }

  menuToggle() {
    this.status = !this.status
  }
}
