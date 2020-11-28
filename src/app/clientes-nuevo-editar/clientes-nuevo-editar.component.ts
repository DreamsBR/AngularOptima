import { Component, OnInit, ViewChild } from '@angular/core'
import { Cliente } from './../clientes/cliente'
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
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idCliente = parseInt(params.get('id'))
      this.nrodoc = (params.get('nrodoc'))
      this.idproyecto = parseInt(params.get('idproyecto'))
    })
    if(this.idCliente != 0){
      this.clienteService.obtenerClientesPorId(this.idCliente).subscribe(
        (response) => {
          this.cliente = response
          this.dpFechaDeNacimiento.setValue(response.fechaNacimiento)
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
      this.cliente.idCliente = 0
      this.cliente.idPais = 1

      if(this.nrodoc != ''){
        this.cliente.idTipoDocumento = 1
        this.cliente.nroDocumento = this.nrodoc
      }
    }
    this.obtenerEstadoCivil()
    this.obtenerTipoDocumento()
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

/*
    AGREGAR CLIENTE
*/

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
