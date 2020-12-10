import { Component, OnInit, ViewChild } from '@angular/core'
import { Cliente } from './../clientes/cliente'
import { Clientenodo } from './../clientes/clientenodo'
import { ClienteService } from './../clientes/clientes.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'
import { Estadocivil } from './../clientes/estadocivil'
import { EstadocivilService } from './../clientes/estadocivil.service'
import { Tipodocumento } from './tipodocumento'
import { TipodocumentoService } from './tipodocumento.service'
import { isNull } from 'util'
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component'
import { UtilService } from '../util/util.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { detectMime } from '../util/detectMime'
import { Location } from '@angular/common'

@Component({
  selector: 'app-clientes-nuevo-editar',
  templateUrl: './clientes-nuevo-editar.component.html'
})
export class ClientesNuevoEditarComponent implements OnInit {
  loading: boolean = false
  public cliente: Cliente = new Cliente()

  public clientenodo: Clientenodo = new Clientenodo()
  public errores: string[]
  public idCliente: number
  public nrodoc: string
  public idproyecto: number

  estadocivil: Estadocivil[]
  tipodocumento: Tipodocumento[]

  @ViewChild('dpFechaDeNacimiento', { static: true }) dpFechaDeNacimiento: DatepickerRoundedComponent

  TYPES_UPLOAD_FILE = {
    KEYCLIENTE: 'CLIENTE',
    KEYCLIENTE_CONYUGE: 'CLIENTE_CONYUGE'
  }

  typeUploadSelected: string = null

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private estadocivilService: EstadocivilService,
    private tipodocumentoService: TipodocumentoService,
    private _snackBar: MatSnackBar,
    private utilService: UtilService,
    private location: Location
  ) {}

  ngOnInit() {
    this.obtenerEstadoCivil()
    this.obtenerTipoDocumento()

    this.activatedRoute.paramMap.subscribe((params) => {
      this.idCliente = parseInt(params.get('id'))
      this.nrodoc = params.get('nrodoc')
      this.idproyecto = parseInt(params.get('idproyecto'))
    })

    if (this.idCliente != 0) {
      this.clienteService.obtenerClientesPorId(this.idCliente).subscribe(
        (response) => {
          this.cliente.apellidos = response.apellidos
          this.cliente.asesor = response.asesor
          this.cliente.conyuge = response.conyuge
          this.cliente.direccion = response.direccion
          this.cliente.distrito = response.distrito
          this.cliente.email = response.email
          this.dpFechaDeNacimiento.setValue(response.fechaNacimiento)
          this.cliente.idCliente = response.idCliente
          this.cliente.idEstadoCivil = response.estadoCivil.idEstadoCivil
          this.cliente.idEstadoCivilConyuge = response.estadoCivilConyuge.idEstadoCivil
          this.cliente.idPais = response.pais.idPais
          this.cliente.idTipoDocumento = response.tipoDocumento.idTipoDocumento
          this.cliente.idTipoDocumentoConyuge = response.tipoDocumentoConyuge.idTipoDocumento
          this.cliente.ingresos = response.ingresos
          this.cliente.lugarTrabajo = response.lugarTrabajo
          this.cliente.nombres = response.nombres
          this.cliente.nroDocumento = response.nroDocumento
          this.cliente.nroDocumentoConyuge = response.nroDocConyuge
          this.cliente.ocupacion = response.ocupacion
          this.cliente.ocupacionConyuge = response.ocupacionConyuge
          this.cliente.provincia = response.provincia
          this.cliente.sexo = response.sexo
          this.cliente.telefono = response.telefono
          this.cliente.fotoDni = response.fotoDni
          this.cliente.fotoDniConyuge = response.fotoDniConyuge
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    } else {
      this.cliente.idCliente = 0
      this.cliente.idPais = 1
    }
  }

  public obtenerEstadoCivil() {
    this.estadocivilService.getEstadocivil().subscribe((response) => {
      this.estadocivil = response
    })
  }

  public obtenerTipoDocumento() {
    this.tipodocumentoService.getTipodocumento().subscribe((response) => {
      this.tipodocumento = response
    })
  }

  public agregarCliente(): void {
    if (Object.keys(this.cliente).length < 14) {
      swal('Campos Incompletos de Cliente', '', 'error')
      return
    }

    if (this.cliente.idCliente == 0) {
      this.clienteService.agregarCliente(this.cliente).subscribe(
        (response) => {
          if (!isNull(this.nrodoc)) {
            this.router.navigate(['/ventas-proyecto-nuevo-editar/' + this.idproyecto + '/' + response.nroDocumento])
            swal('Nuevo cliente', `Cliente ${response.nombres} creado con exito`, 'success')
          } else {
            this.router.navigate(['/clientes'])
            swal('Nuevo cliente', `Cliente ${response.nombres} creado con exito`, 'success')
          }
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    } else {
      this.clienteService.actualizarCliente(this.cliente, this.cliente.idCliente).subscribe(
        (response) => {
          this.router.navigate(['/clientes'])
          swal('Editar cliente', `Cliente ${response.nombres} actualizado con exito`, 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }
  }

  siguientePagina(tabName: string) {
    document.getElementById(tabName).click()
  }

  /* clienteFechanacimiento(event: string){
    let str = event.split('-');
    this.cliente.fechaNacimiento = str[2] + "-" + str[1] + "-" + str[0]
  } */

  status = false
  menuToggle() {
    this.status = !this.status
  }

  setFechaNacimiento(date: string) {
    this.cliente.fechaNacimiento = date
  }

  documentoPersonal(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
    }
  }

  documentoCony(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
    }
  }

  setTypeFileToUpload(type: string) {
    this.typeUploadSelected = type
  }

  inputUploadFileChanged(event) {
    const file = event.target.files[0]
    if (file) {
      this.loading = true
      this.utilService.postUploadFile
      const extension = file.name.split('.').pop()
      const reader = new FileReader()
      const hashRandom = Math.floor(Math.random() * (99999 - 11111)) + 11111
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.utilService.postUploadFile(reader.result, `${this.typeUploadSelected}_FILEDOC_RANDOM_${hashRandom}.${extension}`).subscribe(
            (resp) => {
              switch (this.typeUploadSelected) {
                case this.TYPES_UPLOAD_FILE.KEYCLIENTE:
                  this.cliente.fotoDni = resp.fileName
                  break
                case this.TYPES_UPLOAD_FILE.KEYCLIENTE_CONYUGE:
                  this.cliente.fotoDniConyuge = resp.fileName
                  break
              }
              this.btnCerrarModalSubirArchivo()
              this.openSnackBar('success', '✓ Archivo subido', 'Cerrar')
              this.loading = false
            },
            (error) => {
              this.loading = false
              this.openSnackBar('error', 'No se pudo asociar el archivo a la fecha seleccionada', 'Cerrar')
              console.log(error)
            }
          )
        } else {
          this.openSnackBar('error', 'No se pudo convertir a String base 64', 'Cerrar')
          console.log('No se pudo convertir a String base 64')
        }
      }
    } else {
      console.log('Archivo vacío. no se sube la ')
    }
  }

  btnCerrarModalSubirArchivo() {
    document.getElementById('btnModalSubirArchivoClose').click()
  }

  descargarArchivoSubido(fileName: string) {
    console.log('descargando')
    this.loading = true
    this.utilService.postDownloadBase64File(fileName).subscribe(
      (resp) => {
        const dataTag = detectMime(resp.fileName)
        fetch(dataTag + resp.base64)
          .then((res) => res.blob())
          .then((blob) => {
            this.loading = false
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

  regresar() {
    this.location.back()
    //this.router.navigate(['/reportes-por-vendedor/' + idColaborador + '/' + this.filterIdPeriodo])
  }
}
