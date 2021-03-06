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
import { Clientenodo } from '../clientes/clientenodo'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import * as moment from 'moment'
import { FinanciamientoNodos } from '../financiamientos/financiamiento'
import { MatSnackBar } from '@angular/material/snack-bar'

import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component'

import { EstadoVenta } from '../estados-ventas/estadoventa'
import { Inmueble } from '../inmuebles/inmueble'
import { InmuebleService } from '../inmuebles/inmueble.service'
import { TipoInmueble } from '../inmueble-nuevo-editar/tipoinmueble'

import { UtilService } from '../util/util.service'
import { detectMime } from '../util/detectMime'
import { VentaFiles } from '../venta-files/ventafiles'
import { VentaFilesPost } from '../venta-files/ventafilespost'
import { VentaFilesService } from '../venta-files/venta-files.service'

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
  cliente: Clientenodo = new Clientenodo()
  financiamiento: FinanciamientoNodos = new FinanciamientoNodos()
  pago: Pago = new Pago()

  // Sort Datos
  svFechaCaida: NgbDateStruct

  fieldsTblPagos: string[] = ['editar', 'numeroOperacion', 'fecha', 'voucher', 'monto']
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

  displayedColumns: string[] = [
    // 'editar',
    'idTipoInmueble',
    'idTipoInmuebleCategoria',
    'numero',
    'areaTechada',
    'areaLibre',
    'areaTotal',
    'idTipoVista',
    'cantidadDormitorio',
    'precio',
    'descuento',
    'ayudainicial',
    'importe'
  ]
  inmuebleLista = new MatTableDataSource<Inmueble>()
  sumaTotalInmuebles: number = 0

  filterTipoInmuebleSelect: number = null
  optionsTipoInmueble: TipoInmueble[] = []

  inmuebleToDelete = new Inmueble()

  filePagoData = null

  FILES_TYPES_NAMES = {
    SEPARACION: 'SEPARACION',
    MINUTA: 'MINUTA',
    DESEMBOLSO: 'DESEMBOLSO',
    EEP: 'EEP'
  }

  modal_fecha_type = null

  ventaFileModal: VentaFilesPost = null
  ventaFileFSeparacion: VentaFiles = null
  ventaFileFMinuta: VentaFiles = null
  ventaFileFDesembolso: VentaFiles = null
  ventaFileFEEP: VentaFiles = null
  ventaFileFCaida: VentaFiles = null

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
    private _snackBar: MatSnackBar,
    private inmuebleService: InmuebleService,
    private utilService: UtilService,
    private ventaFilesService: VentaFilesService
  ) {
    this.paramIdVenta = parseInt(this.activatedRoute.snapshot.params.id)
  }

  ngOnInit() {
    this.initFunctions()
  }
  /*
  handleUpload(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
    }
  }
*/

  reader: any

  pdfSeparacion(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
    }
  }

  pdfMinuta(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
    }
  }

  pdfDeseembolso(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
    }
  }

  pdfEep(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
    }
  }

  onFechaSeparacionChanged(newdate: string) {
    this.tempIdFechaSeparacion = newdate
    this.idEstadoVentaSelect = 1
  }

  onFechaMinutaChanged(newdate: string) {
    this.tempIdFechaMinuta = newdate
    this.idEstadoVentaSelect = 5
  }

  onFechaDesembolsoChanged(newdate: string) {
    this.tempIdFechaDesembolso = newdate
    this.idEstadoVentaSelect = 12
  }
  onFechaEEPChanged(newdate: string) {
    this.tempIdFechaEEP = newdate
    this.idEstadoVentaSelect = 13
  }

  onFechaCaidaChanged(newdate: string) {
    this.tempIdFechaCaida = newdate
    this.idEstadoVentaSelect = 14
  }

  actualizarVenta() {
    console.log('Aplicando l??gica de negocio...')

    // this.venta.fechaSeparacion = null
    // this.venta.fechaMinuta = null
    // this.venta.fechaDesembolso = null
    // this.venta.fechaEpp = null
    // this.venta.fechaCaida = null

    switch (this.idEstadoVentaSelect) {
      case 1: // SEPARACI??N
        // TODO
        console.log('Fecha separacion ' + this.venta.fechaSeparacion)
        if (this.tempIdFechaSeparacion === '') {
          alert('Seleccione una fecha de separaci??n')
          return
        } else {
          if (this.pagos.data.length < 1) {
            // 1er abono
            alert('Solicitud rechazada. Se necesita al menos el 1er abono.')
            return
          }
          this.venta.fechaSeparacion = this.tempIdFechaSeparacion
          this.venta.fechaMinuta = null
          this.venta.fechaDesembolso = null
          this.venta.fechaEpp = null
          this.venta.fechaCaida = null
        }
        break

      case 2: // PRECALIFICACI??N
        if (!this.venta.fechaSeparacion) {
          alert(
            'No se puede asignar el estado "Precalificaci??n" sin haber asignado antes el estado "Separaci??n"'
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
            'No se puede asignar el estado "Cuota inicial" sin haber asignado antes el estado "Separaci??n"'
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
            'No se puede asignar el estado "Minuta" sin haber asignado antes el estado "Separaci??n"'
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
            this.venta.fechaDesembolso = null
            this.venta.fechaEpp = null
            this.venta.fechaCaida = null
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

      case 8: // CARTA DE APROBACI??N
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "Carta de aprobaci??n" sin haber asignado antes el estado "Minuta"'
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

      case 11: // CR??DITO DIRECTO
        if (!this.venta.fechaMinuta) {
          alert(
            'No se puede asignar el estado "Cr??dito Directo" sin haber asignado antes el estado "Minuta"'
          )
          return
        } else {
          if (this.pagos.data.length < 1) {
            // 1 abono (minimo) -> As?? est?? indicado en el word. No es un error de c??digo
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
            this.venta.fechaEpp = null
            this.venta.fechaCaida = null
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
            this.venta.fechaCaida = null
          }
        }
        break

      case 14: // Caida
        console.log('Fecha Ca??da ' + this.venta.fechaCaida)
        if (this.tempIdFechaCaida === '') {
          alert('Seleccione una fecha de Ca??da')
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
    // console.log(this.venta)
    // return

    console.info(this.venta)

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
        this.errors = ['Hubo un problema recuperando informaci??n adicional de la venta']
        console.log(err)
      }
    )
  }

  cambiarFecha() {
    this.dpFSeparacion.setValue('')
  }

  openSnackBar(type: string, message: string, action: string, duration: number = 5000) {
    let className = ''
    switch (type) {
      case 'success':
        className = 'agz-snackbar__success'
        break
      case 'error':
        className = 'agz-snackbar__error'
        break
    }
    this._snackBar.open(message, action, {
      duration: duration,
      panelClass: [className]
    })
  }

  limpiarFormulario() {
    this.modalPagoErrores = []
    this.modalPagoWarnings = []
    this.pagoModal = new Pago()
    this.pagoModal.numeroOperacion = null
    this.pagoModal.monto = null
    this.filePagoData = null
  }

  btnPagoGuardar() {
    this.modalPagoWarnings = []
    this.modalPagoErrores = []
    if (
      this.pagoModal.fecha === '' ||
      this.pagoModal.monto === 0 ||
      this.pagoModal.monto === null ||
      this.pagoModal.monto.toString() === '' ||
      this.pagoModal.numeroOperacion === '' ||
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
      // console.log(this.pagoModal)
      // return

      const montoFaltante =this.venta.total - this.sumaTotalPagos
      if (this.pagoModal.monto > montoFaltante) {
        this.loading = false
        const msg =
          'El monto ingresado supera el monto faltante para completar el total de venta. Ingrese un monto menor'
        this.modalPagoWarnings = [msg]
        return
      }
      let path = null
      if (this.modalPagoModeEdit) {
        path = this.pagosService.updatePago(this.pagoModal)
      } else {
        path = this.pagosService.postGuardarPago(this.pagoModal)
      }
      path.subscribe(
        (resp) => {
          //this.nuevoPagoData = resp
          this.loading = false
          this.openSnackBar('success', '??? Pago guardado', 'Cerrar')
          this.TerminarPagoModal()
        },
        (err) => {
          this.loading = false
          //this.openSnackBar('error', 'Hubo un error en la acci??n', 'Cerrar')
          this.modalPagoErrores = ['Hubo un problema al registrar el pago']
          console.log(err)
        }
      )
    }
  }

  TerminarPagoModal() {
    document.getElementById('btnPagoClose').click()
    this.refreshTablaPagos()
  }

  uploadFilePago(event) {
    const file = event.target.files[0]
    if (file) {
      this.loading = true
      const extension = file.name.split('.').pop()
      const reader = new FileReader()
      const randomCode = Math.floor(Math.random() * (99999 - 11111)) + 11111
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.utilService
            .postUploadFile(reader.result, `PAGO_RANDOMCODE_${randomCode}.${extension}`)
            .subscribe(
              (resp) => {
                this.pagoModal.fileRuta = resp.fileName
                this.loading = false
                this.openSnackBar('success', '??? Voucher subido correctamente', 'Cerrar')
              },
              (error) => {
                this.loading = false
                this.modalPagoErrores = ['Hubo un problema al subir el archivo']
                console.log(error)
              }
            )
        } else {
          console.log('No se pudo convertir a String base 64')
        }
      }
    }
  }

  descargarArchivoPago(fileName: string) {
    this.loading = true
    this.utilService.postDownloadBase64File(fileName).subscribe(
      (resp) => {
        this.loading = false
        const dataTag = detectMime(resp.fileName)
        fetch(dataTag + resp.base64)
          .then((res) => res.blob())
          .then((blob) => {
            var link = window.document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.target = '_blank'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          })
      },
      (error) => {
        this.loading = false
        console.log(error)
      }
    )
  }

  setNuevoVentaFile(TipoEstadoVenta: number) {
    console.log('seteando nuevo venta file model')
    switch (TipoEstadoVenta) {
      case 1:
        this.modal_fecha_type = this.FILES_TYPES_NAMES.SEPARACION
        break
      case 5:
        this.modal_fecha_type = this.FILES_TYPES_NAMES.MINUTA
        break
      case 12:
        this.modal_fecha_type = this.FILES_TYPES_NAMES.DESEMBOLSO
        break
      case 13:
        this.modal_fecha_type = this.FILES_TYPES_NAMES.EEP
        break
      default:
        break
    }

    this.ventaFileModal = new VentaFilesPost()
    this.ventaFileModal.idVenta = this.venta.idVenta
    this.ventaFileModal.idEstadoVenta = TipoEstadoVenta
    // console.log(this.ventaFileModal)

    // La propiedad fileRuta ser?? completada cuando suba el archivo
  }

  eliminarArchivoFechaPago(TipoEstadoVenta: number) {

    // @ViewChild('dpFSeparacion', { static: true }) dpFSeparacion: DatepickerRoundedComponent
    // @ViewChild('dpFMinuta', { static: true }) dpFMinuta: DatepickerRoundedComponent
    // @ViewChild('dpFDesembolso', { static: true }) dpFDesembolso: DatepickerRoundedComponent
    // @ViewChild('dpFEEP', { static: true }) dpFEEP: DatepickerRoundedComponent
    // @ViewChild('dpFCaida', { static: true }) dpFCaida: DatepickerRoundedComponent

    switch (TipoEstadoVenta) {
      case 1:
        this.ventaFilesService
          .deleteVentaFiles(this.ventaFileFSeparacion.idVentaFiles)
          .subscribe((resp) => {
            this.ventaFileFSeparacion = null
            this.dpFSeparacion.setValue('')
            this.venta.fechaSeparacion = null
            this.idEstadoVentaSelect = 15 // Estado inicio
            this.actualizarVenta()
          })
        break
      case 5:
        this.ventaFilesService
          .deleteVentaFiles(this.ventaFileFMinuta.idVentaFiles)
          .subscribe((resp) => {
            this.ventaFileFMinuta = null
            this.dpFMinuta.setValue('')
            this.venta.fechaMinuta = null
            this.idEstadoVentaSelect = 1
            this.actualizarVenta()
          })
        break
      case 12:
        this.ventaFilesService
          .deleteVentaFiles(this.ventaFileFDesembolso.idVentaFiles)
          .subscribe((resp) => {
            this.ventaFileFDesembolso = null
            this.dpFDesembolso.setValue('')
            this.venta.fechaDesembolso = null
            this.idEstadoVentaSelect = 5
            this.actualizarVenta()
          })
        break
      case 13:
        this.ventaFilesService
          .deleteVentaFiles(this.ventaFileFEEP.idVentaFiles)
          .subscribe((resp) => {
            this.ventaFileFEEP = null
            this.dpFEEP.setValue('')
            this.venta.fechaEpp = null
            this.idEstadoVentaSelect = 12
            this.actualizarVenta()
          })
        break
      default:
        break
    }
  }

  uploadFileFechas(event, type: string) {
    const file = event.target.files[0]
    if (file) {
      this.loading = true
      const extension = file.name.split('.').pop()
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.utilService
            .postUploadFile(
              reader.result,
              `FEC_${this.modal_fecha_type}_EVID_${this.ventaFileModal.idEstadoVenta}_VID_${this.venta.idVenta}.${extension}`
            )
            .subscribe(
              (resp) => {
                console.log('Archivo subido')
                console.log(resp)

                this.ventaFileModal.fileRuta = resp.fileName

                let pathToExec = null
                const vfvalidacion = this.getVentaFileToUpdateAndAssignID(this.ventaFileModal)
                if (vfvalidacion.idVentaFiles === 0) {
                  console.log('crear??')
                  console.log(vfvalidacion)
                  pathToExec = this.ventaFilesService.postVentaFiles(vfvalidacion)
                } else {
                  console.log('actualizar??')
                  console.log(vfvalidacion)
                  pathToExec = this.ventaFilesService.updateVentaFiles(vfvalidacion)
                }

                pathToExec.subscribe(
                  (resp) => {
                    this.loading = false
                    this.setLocalVentaFile(resp)
                    this.btnCerrarModalArchivoFecha()

                    this.openSnackBar('success', '??? Archivo guardado con ??xito', 'Cerrar')
                  },
                  (error) => {
                    this.loading = false
                    this.openSnackBar(
                      'error',
                      'No se pudo asociar el archivo a la fecha seleccionada',
                      'Cerrar'
                    )
                    console.log(error)
                  }
                )

                /*this.loading = false
              this.openSnackBar('success', '??? Voucher subido', 'Cerrar')
              this.TerminarPagoModal()
              console.log('llega')*/
              },
              (error) => {
                this.openSnackBar('error', 'No se pudo subir el archivo', 'Cerrar')
                console.log(error)
              }
            )
        } else {
          this.openSnackBar('error', 'No se pudo convertir a String base 64', 'Cerrar')
          console.log('No se pudo convertir a String base 64')
        }
      }
    }
  }

  initFunctions() {
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
            this.optionsTipoInmueble = resp_extra[2]
            this.filterTipoInmuebleSelect = 1 // Selecciona el tipo de Departamento
            this.refreshListaInmuebles()

            this.asignandoVentaFilesVariables(resp_extra[3])

            this.loading = false
          },
          (e) => {
            this.loading = false
            this.errors = ['Hubo un problema recuperando informaci??n adicional de la venta']
            console.log(e)
          }
        )
      },
      (error) => {
        this.loading = false
        this.errors = ['Hubo un problema recuperando la informaci??n de la venta']
        console.log(error)
      }
    )
  }

  asignandoVentaFilesVariables(data: VentaFiles[]) {
    data.forEach((element) => {
      this.setLocalVentaFile(element)
    })
  }

  setLocalVentaFile(ventaFilesPost: VentaFiles) {
    switch (ventaFilesPost.estadoVenta.idEstadoVenta) {
      case 1:
        this.ventaFileFSeparacion = ventaFilesPost
        break
      case 5:
        this.ventaFileFMinuta = ventaFilesPost
        break
      case 12:
        this.ventaFileFDesembolso = ventaFilesPost
        break
      case 13:
        this.ventaFileFEEP = ventaFilesPost
        break
      default:
        break
    }
  }

  getVentaFileToUpdateAndAssignID(ventaFilesPost: VentaFilesPost) {
    switch (ventaFilesPost.idEstadoVenta) {
      case 1:
        if (this.ventaFileFSeparacion !== null) {
          ventaFilesPost.idVentaFiles = this.ventaFileFSeparacion.idVentaFiles
        }
        break
      case 5:
        if (this.ventaFileFMinuta !== null) {
          ventaFilesPost.idVentaFiles = this.ventaFileFMinuta.idVentaFiles
        }
        break
      case 12:
        if (this.ventaFileFDesembolso !== null) {
          ventaFilesPost.idVentaFiles = this.ventaFileFDesembolso.idVentaFiles
        }
        break
      case 13:
        if (this.ventaFileFEEP !== null) {
          ventaFilesPost.idVentaFiles = this.ventaFileFEEP.idVentaFiles
        }
        break
      default:
        break
    }
    return ventaFilesPost
  }

  getInfoExtra(): Observable<any[]> {
    let infoPagos = this.pagosService.getPagosByIdVenta(this.paramIdVenta)
    let listaEstadoVenta = this.vccdService.getListaEstadosVenta()
    let listaTiposInmuebles = this.vccdService.getListaTipoInmuebles()
    let listaVentaFiles = this.ventaFilesService.getVentaFilesByIdVenta(this.venta.idVenta)
    // let listaInmuebles = this.vccdService.getInmueblesByIdVenta(this.paramIdVenta)
    return forkJoin([infoPagos, listaEstadoVenta, listaTiposInmuebles, listaVentaFiles])
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
        this.errors = ['Hubo un problema recuperando informaci??n adicional de la venta']
        console.log(e)
      }
    )
  }

  refreshListaInmuebles() {
    this.vccdService.getInmueblesByIdVenta(this.paramIdVenta).subscribe((inmueblesJsonResponse) => {
      this.inmuebleLista = new MatTableDataSource<Inmueble>(inmueblesJsonResponse)
      let tmpSumaInm = 0
      inmueblesJsonResponse.forEach((elem: any) => {
        tmpSumaInm += elem.precio - elem.descuento - elem.ayudainicial
      })
      this.sumaTotalInmuebles = tmpSumaInm
    })
  }

  menuToggle() {
    this.status = !this.status
  }

  abrirModalAgregarPago() {
    this.limpiarFormulario()
    this.modalPagoModeEdit = false
  }

  abrirModalArchivoFechas() {
    // this.limpiarFormulario()
    // this.modalPagoModeEdit = false
  }

  btnCerrarModalArchivoFecha() {
    document.getElementById('btnModalFechaArchivoClose').click()
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
      this.openSnackBar('success', '??? Pago eliminado con ??xito', 'Cerrar', 1500)
      this.refreshTablaPagos()
    })
  }

  setObjetoInmuebleDelete(inmuebleToDelete: Inmueble) {
    this.inmuebleToDelete = new Inmueble()
    this.inmuebleToDelete = inmuebleToDelete
  }

  eliminarInmuebleSeleccionado() {
    this.loading = true
    this.inmuebleService.deletePago(this.inmuebleToDelete).subscribe((_) => {
      this.loading = false
      document.getElementById('cerrarModalEliminarInmueble').click()
      this.openSnackBar('success', '??? Inmueble eliminado con ??xito', 'Cerrar', 1500)
      this.refreshListaInmuebles()
    })
  }

  get formatNacimientoEdad(): string {
    if (typeof this.cliente.fechaNacimiento !== 'undefined') {
      const fNac = this.cliente.fechaNacimiento.substring(0, 10) // Formato YYYY-MM-DD
      const edad = moment().diff(fNac, 'years', false)
      return `${fNac.split('-').reverse().join('-')} (${edad} a??os)`
    } else {
      return '--'
    }
  }

  get porcentajePagado(): string {
    if (typeof this.venta !== 'undefined') {
      const totalVenta = this.venta.total
      const porc = (this.sumaTotalPagos * 100) / totalVenta
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


  regresar() {
    window.history.back()
  }

  onLoadingChange(status: boolean) {
    this.loading = status
  }

  calculateDescuento (elem: Inmueble) {
    let descuento = ''
    if (elem && elem.descuento) {
      const factor = elem.precio / elem.descuento
      descuento = factor.toFixed(1);
    } else {
      descuento = '0.0';
    }
    return descuento
  }
}
