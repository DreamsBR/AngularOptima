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

import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component'

interface EstadoVenta {
  idEstadoVenta: number
  enable: number
  nombre: string
}

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
  modalPagoModeEdit: boolean = false
  modalPagoWarnings: string[] = []
  modalPagoErrores: string[] = []
  pagoModal: Pago = new Pago()

  pagoToDelete: Pago = new Pago()

  statusVentaTotal: number = 0

  optionsTiposEstadoVenta: EstadoVenta[] = []
  idEstadoVentaSelect: number = null

  //

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild('dpFSeparacion', { static: true }) dpFSeparacion: DatepickerRoundedComponent
  @ViewChild('dpFMinuta', { static: true }) dpFMinuta: DatepickerRoundedComponent
  @ViewChild('dpFDesembolso', { static: true }) dpFDesembolso: DatepickerRoundedComponent
  @ViewChild('dpFEEP', { static: true }) dpFEEP: DatepickerRoundedComponent
  @ViewChild('dpFCaida', { static: true }) dpFCaida: DatepickerRoundedComponent

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

  actualizarVenta() {
    console.log('Aplicando lógica de negocio...')

    console.log('actualizar')
    return
    this.loading = true
    this.vccdService.updateVenta(this.venta).subscribe(
      (resp) => {
        this.loading = false
        // actualizando toda la pagina por seguridad
        window.location.reload()
      },
      (err) => {
        this.loading = false
        this.errors = ['Hubo un problema recuperando información adicional de la venta']
        console.log(err)
      }
    )
  }

  cambiarFecha() {
    this.dpFSeparacion.setValue('')
  }

  openSnackBar(message: string, action: string, duration: number = 5000) {
    this._snackBar.open(message, action, {
      duration: duration,
      panelClass: ['success-snackbar']
    })
  }

  limpiarFormulario() {
    this.modalPagoErrores = []
    this.modalPagoWarnings = []
    this.pagoModal = new Pago()
    this.pagoModal.numeroOperacion = null
    this.pagoModal.monto = null
  }

  btnPagoGuardar() {
    if (
      this.pagoModal.fecha === '' ||
      this.pagoModal.monto === 0 ||
      this.pagoModal.monto === null ||
      this.pagoModal.monto.toString() === '' ||
      this.pagoModal.numeroOperacion === 0 ||
      this.pagoModal.numeroOperacion === null ||
      this.pagoModal.numeroOperacion.toString() === ''
    ) {
      this.modalPagoWarnings = ['Todos los campos deben ser completados']
    } else {
      this.loading = true
      this.pagoModal.monto = parseFloat('' + this.pagoModal.monto)
      this.pagoModal.idVenta = this.paramIdVenta // API solo acepta en formato YYYY-MM-DD
      this.pagoModal.enable = 1
      this.pagoModal.pagado = 1
      this.pagoModal.porcentaje = ''
      //console.log(this.pagoModal)
      //return
      let path = null
      if (this.modalPagoModeEdit) {
        path = this.pagosService.updatePago(this.pagoModal)
      } else {
        path = this.pagosService.postGuardarPago(this.pagoModal)
      }
      document.getElementById('btnPagoClose').click()
      path.subscribe(
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
      )
    }
  }

  initFunctions() {
    this.paramIdVenta = parseInt(this.activatedRoute.snapshot.params.id)

    this.loading = true
    this.vccdService.fetchingInfoVenta(this.paramIdVenta).subscribe(
      (resp) => {
        this.venta = resp
        this.cliente = resp.cliente
        this.financiamiento = resp.financiamiento
        this.pago = resp.pago

        // Actualizando las fechas de Estado de Venta
        this.dpFSeparacion.setValue(resp.fechaSeparacion)
        this.dpFMinuta.setValue(resp.fechaMinuta)
        this.dpFDesembolso.setValue(resp.fechaDesembolso)
        this.dpFEEP.setValue(resp.fechaEpp)
        this.dpFCaida.setValue(resp.fechaCaida)

        // Set Status Venta Total
        this.idEstadoVentaSelect = resp.estadoVenta.idEstadoVenta

        this.getInfoExtra().subscribe(
          (resp_extra) => {
            let sumaPagos = 0
            resp_extra[0].forEach((pago: any) => {
              sumaPagos += pago.monto
            })
            this.statusVentaTotal = sumaPagos
            this.pagos = new MatTableDataSource<Pago>(resp_extra[0])
            this.optionsTiposEstadoVenta = resp_extra[1]
            this.loading = false
          },
          (e) => {
            this.loading = false
            this.errors = ['Hubo un problema recuperando información adicional de la venta']
            console.log(e)
          }
        )
      },
      (error) => {
        this.loading = false
        this.errors = ['Hubo un problema recuperando la información de la venta']
        console.log(error)
      }
    )
  }

  onFechaCaidaChanged(newdate: string) {
    console.log(newdate)
  }

  getInfoExtra(): Observable<any[]> {
    let infoPagos = this.pagosService.getPagosByIdVenta(this.paramIdVenta)
    let listaEstadoVenta = this.vccdService.getListaEstadosVenta()
    return forkJoin([infoPagos, listaEstadoVenta])
  }

  refreshTablaPagos() {
    this.pagosService.getPagosByIdVenta(this.paramIdVenta).subscribe(
      (resp) => {
        let sumaPagos = 0
        resp.forEach((pago) => {
          sumaPagos += pago.monto
        })
        this.statusVentaTotal = sumaPagos
        this.pagos = new MatTableDataSource<Pago>(resp)
      },
      (e) => {
        this.errors = ['Hubo un problema recuperando información adicional de la venta']
        console.log(e)
      }
    )
  }

  menuToggle() {
    this.status = !this.status
  }

  abrirModalAgregarPago() {
    this.limpiarFormulario()
    this.modalPagoModeEdit = false
  }

  setObjetoPagoEdit(editPagoObj) {
    this.limpiarFormulario()
    this.pagoModal = JSON.parse(JSON.stringify(editPagoObj))
    this.pagoModal.fecha = this.pagoModal.fecha.substring(0, 10)
    this.modalPagoModeEdit = true
  }

  setObjetoPagoDelete(pagoToDelete: Pago) {
    this.pagoToDelete = new Pago()
    this.pagoToDelete = pagoToDelete
  }

  eliminarPagoSeleccionado() {
    this.loading = true
    this.pagosService.deletePago(this.pagoToDelete).subscribe((_) => {
      this.loading = false
      document.getElementById('cerrarModalEliminarPago').click()
      this.openSnackBar('✓ Pago eliminado con éxito', 'Cerrar', 1500)
      this.refreshTablaPagos()
    })
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
}
