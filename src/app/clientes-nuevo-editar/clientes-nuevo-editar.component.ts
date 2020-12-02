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

@Component({
  selector: 'app-clientes-nuevo-editar',
  templateUrl: './clientes-nuevo-editar.component.html'
})

export class ClientesNuevoEditarComponent implements OnInit {

  public cliente: Cliente = new Cliente()
  public clientenodo: Clientenodo = new Clientenodo()
  public errores: string[]
  public idCliente: number
  public nrodoc: string
  public idproyecto: number

  estadocivil: Estadocivil[]
  tipodocumento: Tipodocumento[]

  @ViewChild('dpFechaDeNacimiento', { static: true }) dpFechaDeNacimiento: DatepickerRoundedComponent

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private estadocivilService: EstadocivilService,
    private tipodocumentoService: TipodocumentoService
  ) {}

  ngOnInit() {

    this.obtenerEstadoCivil()
    this.obtenerTipoDocumento()

    this.activatedRoute.paramMap.subscribe((params) => {
      this.idCliente = parseInt(params.get('id'))
      this.nrodoc = (params.get('nrodoc'))
      this.idproyecto = parseInt(params.get('idproyecto'))
    })

    if( this.idCliente != 0 ){
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
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
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
    if(Object.keys(this.cliente).length < 12){
      swal('Campos Incompletos de Cliente', '','error')
      return
    }

    this.clienteFechanacimiento(this.cliente.fechaNacimiento);

    if(this.cliente.idCliente == 0){
      this.clienteService.agregarCliente(this.cliente).subscribe(
        (response) => {
          if(!isNull(this.nrodoc)){
            this.router.navigate(['/ventas-proyecto-nuevo-editar/' + this.idproyecto + '/' + response.nroDocumento])
            swal('Nuevo cliente', `Cliente ${response.nombres} creado con exito`, 'success')
          }else{
            this.router.navigate(['/clientes'])
            swal('Nuevo cliente', `Cliente ${response.nombres} creado con exito`, 'success')
          }
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
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

  siguientePagina(tabName: string){
    document.getElementById(tabName).click()
  }

  clienteFechanacimiento(event: string){
    let str = event.split('-');
    this.cliente.fechaNacimiento = str[2] + "-" + str[1] + "-" + str[0]
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
