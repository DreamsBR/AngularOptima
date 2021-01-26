import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { VentaAttached } from './venta-attached'
import { UtilService } from '../util/util.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { VentasAdjuntosService } from './ventas-adjuntos.service'
import { detectMime } from '../util/detectMime'

@Component({
  selector: 'ventas-adjuntos',
  templateUrl: './ventas-adjuntos.component.html',
  styleUrls: ['./ventas-adjuntos.component.css']
})
export class VentasAdjuntosComponent implements OnInit {
  @Input() ventaId: number = null

  @Output() onLoadingChange = new EventEmitter<boolean>()

  displayedColumns: string[] = ['editar', 'idVentaAttached', 'nombre', 'descargar', 'fechaRegistro']
  itemsLista = new MatTableDataSource<VentaAttached>()

  formIsValid: boolean = true

  newVentaAttached: VentaAttached = new VentaAttached()
  nombreArchivoAdjunto: string = ''

  attachedToDelete: VentaAttached = new VentaAttached()

  constructor(
    private utilService: UtilService,
    private ventasAdjuntosService: VentasAdjuntosService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (!this.ventaId) {
      alert('Falta adjuntar el ID de Venta')
    } else {
      this.fetchData()
    }
  }

  fetchData() {
    this.emitLoading(true)
    this.ventasAdjuntosService.getAttachedByVenta(this.ventaId).subscribe(
      (resp) => {
        this.emitLoading(false)
        this.itemsLista = new MatTableDataSource<VentaAttached>(resp)
      },
      (error) => {
        this.emitLoading(false)
        console.error(error)
      }
    )
  }

  limpiarFormulario() {
    //this.modalPagoErrores = []
    //this.modalPagoWarnings = []
    this.newVentaAttached = new VentaAttached()
  }

  emitLoading(isLoading: boolean) {
    this.onLoadingChange.emit(isLoading)
  }

  btnCerrarModalAttach() {
    document.getElementById('btnModalAttachClose').click()
  }

  abrirModalAddAttach() {}

  uploadFileFechas(event, type: string) {
    const file = event.target.files[0]
    if (file) {
      this.emitLoading(true)
      const extension = file.name.split('.').pop()
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.utilService
            .postUploadFile(reader.result, `ADJUNTO_VENTAID_${this.ventaId}.${extension}`)
            .subscribe(
              (resp) => {
                console.log('Archivo subido')

                const now = new Date()
                this.newVentaAttached = new VentaAttached()
                this.newVentaAttached.idVentaAttached = 0
                this.newVentaAttached.fileRuta = resp.fileName
                this.newVentaAttached.idVenta = this.ventaId
                this.newVentaAttached.fechaRegistro = now.toISOString()
                this.newVentaAttached.nombre = this.nombreArchivoAdjunto

                this.ventasAdjuntosService.postAttached(this.newVentaAttached).subscribe(
                  (resp) => {
                    this.emitLoading(false)
                    this.btnCerrarModalAttach()
                    this.fetchData()

                    this.openSnackBar('success', '✓ Archivo guardado con éxito', 'Cerrar')
                  },
                  (error) => {
                    this.emitLoading(false)
                    this.openSnackBar(
                      'error',
                      'No se pudo asociar el archivo a la fecha seleccionada',
                      'Cerrar'
                    )
                    console.log(error)
                  }
                )
              },
              (error) => {
                this.emitLoading(false)
                this.openSnackBar('error', 'No se pudo subir el archivo', 'Cerrar')
                console.log(error)
              }
            )
        } else {
          this.emitLoading(false)
          this.openSnackBar('error', 'No se pudo convertir a String base 64', 'Cerrar')
          console.log('No se pudo convertir a String base 64')
        }
      }
    }
  }

  descargarArchivoAttached(fileName: string) {
    this.emitLoading(true)
    this.utilService.postDownloadBase64File(fileName).subscribe(
      (resp) => {
        this.emitLoading(false)
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
        this.emitLoading(false)
        console.log(error)
      }
    )
  }

  setObjetoAttachedEdit(attached: VentaAttached) {
    this.limpiarFormulario()
    this.newVentaAttached = JSON.parse(JSON.stringify(attached))
    //this.pagoModal.fecha = this.pagoModal.fecha.substring(0, 10)
    //this.modalPagoModeEdit = true
  }

  setObjetoAttachedDelete(attached: VentaAttached) {
    this.attachedToDelete = new VentaAttached()
    this.attachedToDelete = attached
  }

  eliminarAttachedSeleccionado() {
    this.emitLoading(true)
    this.ventasAdjuntosService.deleteAttached(this.attachedToDelete).subscribe((_) => {
      this.emitLoading(false)
      document.getElementById('cerrarModalEliminarAttached').click()
      this.openSnackBar('success', '✓ Pago eliminado con éxito', 'Cerrar', 1500)
      this.fetchData()
    })
  }

  checkIsFormValid() {
    this.formIsValid = !(this.nombreArchivoAdjunto.length >= 3)
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
}
