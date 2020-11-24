import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { PagosService } from '../pagos/pagos.service'
import { VentaConsultaClienteDetalleService } from './ventas-consulta-cliente-detalle.service'
import { Router } from '@angular/router'
import { VentaNodos } from '../ventas/ventanodos'
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

import { EstadoVenta } from '../estados-ventas/estadoventa'

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

  venta: VentaNodos = new VentaNodos()
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

  sumaTotalPagos: number = 0

  optionsTiposEstadoVenta: EstadoVenta[] = []
  idEstadoVentaSelect: number = null

  // Fechas selseccionadas
  tempIdFechaSeparacion: string = ''
  tempIdFechaMinuta: string = ''
  tempIdFechaDesembolso: string = ''
  tempIdFechaEEP: string = ''
  tempIdFechaCaida: string = ''

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

  onFechaSeparacionChanged(newdate: string) {
    this.tempIdFechaSeparacion = newdate
  }
  onFechaMinutaChanged(newdate: string) {
    this.tempIdFechaMinuta = newdate
  }
  onFechaDesembolsoChanged(newdate: string) {
    this.tempIdFechaDesembolso = newdate
  }
  onFechaEEPChanged(newdate: string) {
    this.tempIdFechaEEP = newdate
  }
  onFechaCaidaChanged(newdate: string) {
    this.tempIdFechaCaida = newdate
  }

  actualizarVenta() {
    console.log('Aplicando lógica de negocio...')

    switch (this.idEstadoVentaSelect) {
      case 1: // SEPARACIÓN
        // TODO
        console.log('Fecha separacion ' + this.venta.fechaSeparacion)
        if (this.tempIdFechaSeparacion === '') {
          alert('Seleccione una fecha de separación')
          return
        } else {
          if (this.pagos.data.length < 1) {
            // 1er abono
            alert('Solicitud rechazada. Se necesita al menos el 1er abono.')
            return
          }
          this.venta.fechaSeparacion = this.tempIdFechaSeparacion
        }
        break

      case 2: // PRECALIFICACIÓN
        if (!this.venta.fechaSeparacion) {
          alert(
            'No se puede asignar el estado "Precalificación" sin haber asignado antes el estado "Separación"'
          )
          return
        } else {
          if (this.pagos.data.length < 1) {
            // 1er abono
            alert('Solicitud rechazada. Se necesita al menos el 1er abono.')
            return
          }
        }
        break

      case 4: // CUOTA INICIAL
        if (!this.venta.fechaSeparacion) {
          alert(
            'No se puede asignar el estado "Cuota inicial" sin haber asignado antes el estado "Separación"'
          )
          return
        } else {
          if (this.pagos.data.length < 2) {
            // 2 abono (minimo)
            alert('Debe existir el 2do abono')
            return
          }
        }
        break

      case 5: // MINUTA
        console.log('Fecha minuta ' + this.venta.fechaMinuta)
        if (!this.venta.fechaSeparacion) {
          alert(
            'No se puede asignar el estado "Minuta" sin haber asignado antes el estado "Separación"'
          )
          return
        } else {
          if (this.tempIdFechaMinuta === '') {
            alert('Seleccione una fecha de minuta')
            return
          } else {
            if (this.pagos.data.length < 2) {
              // 2 abono (minimo)
              alert('Debe existir el 2do abono')
              return
            }
            this.venta.fechaSeparacion = this.tempIdFechaSeparacion
            this.venta.fechaMinuta = this.tempIdFechaMinuta
          }
        }
        break

      case 6: // APERTURA DE AHORRO
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "Apertura de ahorro" sin haber asignado antes el estado "Minuta"'
          )
          return
        } else {
          if (this.pagos.data.length < 2) {
            // 2 abono (minimo)
            alert('Debe existir el 2do abono')
            return
          }
        }
        break

      case 7: // EN AHORRO
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "En ahorro" sin haber asignado antes el estado "Minuta"'
          )
          return
        } else {
          if (this.pagos.data.length < 2) {
            // 2 abono (minimo)
            alert('Debe existir el 2do abono')
            return
          }
        }
        break

      case 8: // CARTA DE APROBACIÓN
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "Carta de aprobación" sin haber asignado antes el estado "Minuta"'
          )
          return
        } else {
          if (this.pagos.data.length < 2) {
            // 2 abono (minimo)
            alert('Debe existir el 2do abono')
            return
          }
        }
        break

      case 9: // EETT
        if (!this.venta.fechaMinuta) {
          alert('No se puede asignar el estado "EETT" sin haber asignado antes el estado "Minuta"')
          return
        } else {
          if (this.pagos.data.length < 2) {
            // 2 abono (minimo)
            alert('Debe existir el 2do abono')
            return
          }
        }
        break

      case 10: // COFIDE
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "Cofide" sin haber asignado antes el estado "Minuta"'
          )
          return
        } else {
          if (this.pagos.data.length < 2) {
            // 2 abono (minimo)
            alert('Debe existir el 2do abono')
            return
          }
        }
        break

      case 11: // CRÉDITO DIRECTO
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "Crédito Directo" sin haber asignado antes el estado "Minuta"'
          )
          return
        } else {
          if (this.pagos.data.length < 1) {
            // 1 abono (minimo) -> Así está indicado en el word. No es un error de código
            alert('Solicitud rechazada. Se necesita al menos el 1er abono.')
            return
          }
        }
        break

      case 12: // DESEMBOLSO
        console.log('Fecha desembolso ' + this.venta.fechaDesembolso)
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "Desembolso" sin haber asignado antes el estado "Minuta"'
          )
          return
        } else {
          if (this.tempIdFechaDesembolso === '') {
            alert('Seleccione una fecha de desembolso')
            return
          } else {
            if (this.pagos.data.length < 2) {
              // 2 abono (minimo)
              alert('Debe existir el 2do abono')
              return
            }
            this.venta.fechaSeparacion = this.tempIdFechaSeparacion
            this.venta.fechaMinuta = this.tempIdFechaMinuta
            this.venta.fechaDesembolso = this.tempIdFechaDesembolso
          }
        }
        break

      case 13: // EEP
        console.log('Fecha EEP ' + this.venta.fechaEpp)
        if (!this.venta.fechaDesembolso) {
          alert(
            'No se puede asignar el estado "EEPP" sin haber asignado antes el estado "Desembolso"'
          )
          return
        } else {
          if (this.tempIdFechaEEP === '') {
            alert('Seleccione una fecha de EEP')
            return
          } else {
            if (this.pagos.data.length < 2) {
              // 2 abono (minimo)
              alert('Debe existir el 2do abono')
              return
            }
            this.venta.fechaSeparacion = this.tempIdFechaSeparacion
            this.venta.fechaMinuta = this.tempIdFechaMinuta
            this.venta.fechaDesembolso = this.tempIdFechaDesembolso
            this.venta.fechaEpp = this.tempIdFechaEEP
          }
        }
        break

      case 14: // Caida
        console.log('Fecha Caída ' + this.venta.fechaCaida)
        if (this.tempIdFechaCaida === '') {
          alert('Seleccione una fecha de Caída')
          return
        } else {
          this.venta.fechaSeparacion = this.tempIdFechaSeparacion
          this.venta.fechaMinuta = this.tempIdFechaMinuta
          this.venta.fechaDesembolso = this.tempIdFechaDesembolso
          this.venta.fechaEpp = this.tempIdFechaEEP
          this.venta.fechaCaida = this.tempIdFechaCaida
        }
        break
    }

    //console.log('Objecto ventas consulta detalle')
    //console.log(this.venta)
    this.venta.estadoVenta.idEstadoVenta = this.idEstadoVentaSelect // Asigna el id al objeto venta
    this.loading = true
    this.vccdService.updateVenta(this.venta).subscribe(
      (resp) => {
        //this.loading = false
        //console.log(resp)
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
            this.sumaTotalPagos = sumaPagos
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
        this.sumaTotalPagos = sumaPagos
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

  get porcentajeFaltante(): string {
    if (typeof this.venta.total !== 'undefined') {
      const total = this.venta.total
      const porc = (this.sumaTotalPagos / total) * 100
      return `${porc.toFixed(2)} %`
    } else {
      return '--'
    }
  }

  get timelimeActive(): string {
    if (this.venta.fechaEpp !== null) {
      //
      return 'EEP'
    } else if (this.venta.fechaDesembolso !== null) {
      return 'Desembolso'
    } else if (this.venta.fechaMinuta !== null) {
      return 'Minuta'
    } else if (this.venta.fechaSeparacion !== null) {
      return 'Separacion'
    } else {
      return 'Inicio'
    }
  }

  get computedNombreStatusActual(): string {
    let name = 'No asignado'
    if (
      this.venta !== null &&
      typeof this.venta.estadoVenta !== 'undefined' &&
      this.venta.estadoVenta !== null
    ) {
      name = this.venta.estadoVenta.nombre
    }
    return name
  }
}
