import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { VentaConsultaClienteDetalleService } from './ventas-consulta-cliente-detalle.service'
import { Router } from '@angular/router'
import { Venta } from '../ventas/venta'
import sleep from 'await-sleep'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { Cliente } from '../clientes/cliente'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import * as moment from 'moment'
import { Financiamiento } from '../financiamientos/financiamiento'
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-ventas-consulta-cliente-detalle',
  templateUrl: './ventas-consulta-cliente-detalle.component.html',
  styleUrls: ['./ventas-consulta-cliente-detalle.component.css']
})
export class VentasConsultaClienteDetalleComponent implements OnInit {
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private vccdService: VentaConsultaClienteDetalleService,
    public authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initFunctions()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 600000,
      panelClass: ['success-snackbar']
    })
  }

  onPagoModalChanged(newdate: string) {
    this.formPagoFecha = newdate
  }

  openModalPago() {
    console.log('werwerew')
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
      // this.loading = true
      this.openSnackBar('✓ Pago guardado', 'Cerrar')
      console.log(this.formPagoNroRecibo)
      console.log(this.formPagoMonto)
      console.log(this.formPagoFecha)
    }
  }

  initFunctions() {
    const paramIdVenta = parseInt(this.activatedRoute.snapshot.params.id)

    const _self = this
    _self.vccdService.fetchingInfoVenta(paramIdVenta).subscribe(
      (resp) => {
        _self.venta = resp
        _self.ventaClienteId = resp.idCliente
        _self.ventaFinanciamientoId = resp.idFinanciamiento

        _self.getInfoExtra()

        this.getInfoExtra().subscribe(
          (resp_extra) => {
            this.cliente = resp_extra[0]
            this.financiamiento = resp_extra[1]
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
    // let listaTipoVista = this.vccdService.fetchingTipoVista()
    // let listaTipoDocumento = this.vccdService.fetchingTipoDocumento()
    //return this.http.get(this.urlEndPoint + '/tipodocumento/').pipe(catchError(this.errorHandler))
    let infoCliente = this.vccdService.getClienteById(this.ventaClienteId)
    let infoFinanciamiento = this.vccdService.getFinanciamientoById(this.ventaFinanciamientoId)
    return forkJoin([infoCliente, infoFinanciamiento])
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
