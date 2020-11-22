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
  cliente: Cliente = new Cliente()
  financiamiento: Financiamiento = new Financiamiento()
  pago: Pago = new Pago()

  // Sort Datos
  svFechaCaida: NgbDateStruct

  fieldsTblPagos: string[] = ['editar', 'numeroOperacion', 'fecha', 'monto']
  pagos = new MatTableDataSource<Pago>()
  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  pageSizeOptions: number[] = [5, 10, 25, 250]

  // Objetos edit
  modalPagoWarnings: string[] = []
  modalPagoErrores: string[] = []
  pagoModal: Pago = new Pago()

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

  //onPagoModalChanged(newdate: string) {
  //  this.formPagoFecha = newdate
  //}

  limpiarFormulario() {
    this.modalPagoErrores = []
    this.modalPagoWarnings = []
    ///this.formPagoNroRecibo = ''
    ///this.formPagoMonto = ''
    //this.formPagoFecha = ''
  }

  btnPagoGuardar() {
    console.log(this.pagoModal)

    if (typeof this.pagoModal.monto === 'string') {
      this.pagoModal.monto = parseFloat(this.pagoModal.monto)
    }
    console.log(this.pagoModal)
    return
    if (
      this.pagoModal.fecha === '' ||
      this.pagoModal.monto === 0 ||
      this.pagoModal.numeroOperacion === 0
    ) {
      this.modalPagoWarnings = ['Todos los campos deben ser completados']
    } else {
      this.loading = true
      this.pagoModal.idVenta = this.paramIdVenta // API solo acepta en formato YYYY-MM-DD
      this.pagoModal.enable = 1
      this.pagoModal.pagado = 1
      this.pagoModal.porcentaje = ''
      document.getElementById('btnPagoClose').click()
      console.log(this.pagoModal)
      /* this.pagosService.postGuardarPago(regPago).subscribe(
        (_) => {
          this.loading = false
          this.openSnackBar('✓ Pago guardado', 'Cerrar')
          this.refreshTablaPagos()
        },
        (err) => {
          this.loading = false
          this.modalPagoErrores = ['Hubo un problema recuperando información adicional de la venta']
          console.log(err)
        }
      ) */
    }
  }

  initFunctions() {
    this.paramIdVenta = parseInt(this.activatedRoute.snapshot.params.id)

    const _self = this
    _self.vccdService.fetchingInfoVenta(this.paramIdVenta).subscribe(
      (resp) => {
        _self.venta = resp.venta
        _self.cliente = resp.cliente
        _self.financiamiento = resp.financiamiento
        _self.pago = resp.pago

        _self.getInfoExtra()

        this.getInfoExtra().subscribe(
          (resp_extra) => {
            this.pagos = new MatTableDataSource<Pago>(resp_extra[0])
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
  }

  onFechaCaidaChanged(newdate: string) {
    console.log(newdate)
  }

  getInfoVenta() {}

  getInfoExtra(): Observable<any[]> {
    let infoPagos = this.pagosService.getPagosByIdVenta(this.paramIdVenta)
    return forkJoin([infoPagos])
  }

  refreshTablaPagos() {
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

  setObjetoPagoEdit(editPagoObj) {
    //console.log()
    //this.limpiarFormulario()
    //this.formPagoMonto = `${editPagoObj.monto}`
    //this.formPagoMonto = `${editPagoObj.monto}`
  }
}
