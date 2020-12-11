import { Component, OnInit } from '@angular/core'
import { ColaboradorService } from '../colaboradores/colaborador.service'
import { Colaborador } from '../colaboradores/colaborador'
import { Router, ActivatedRoute } from '@angular/router'

import swal from 'sweetalert2'
import { TipoDocumento } from '../colaboradores/tipoDocumento'
import { VentaService } from '../ventas/ventas.service'
import { Roles } from '../colaboradores/roles'
import { TipodocumentoService } from '../clientes-nuevo-editar/tipodocumento.service'
import { RolesServices } from '../colaboradores/roles.service'

@Component({
  selector: 'app-colaboradores-nuevo-editar',
  templateUrl: './colaboradores-nuevo-editar.component.html'
})

export class ColaboradoresNuevoEditarComponent implements OnInit {
  loading: boolean = false

  public colaborador: Colaborador = new Colaborador()
  public errores: string[]

  public idColaborador: number

  optionsTiposDocumento: TipoDocumento[] = []
  tipoDocSelected: number = 0

  isModeEdit: boolean = false

  status = false

  constructor(
    private router: Router,
    private colaboradorService: ColaboradorService,
    private activatedRoute: ActivatedRoute,
    private ventaService: VentaService,
    private tipoDocu : TipodocumentoService,
    private rolesService: RolesServices,
  ) {
    this.colaborador.idColaborador = 0
    this.colaborador.nombres = ''
    this.colaborador.apellidos = ''
    this.colaborador.numeroDocumento = ''
    this.colaborador.sexo = '0'
    this.colaborador.tipoDocumento = new TipoDocumento()
    this.colaborador.tipoDocumento.idTipoDocumento = 0
    this.colaborador.tipoDocumento.nombre = ''
    this.colaborador.tipoDocumento.enable = 1
    this.colaborador.enable = 1
  }

  ngOnInit() {
    this.loading = true
    this.tipoDocu.getTipodocumento().subscribe(
      (resp) => {
        this.optionsTiposDocumento = resp

        this.loading = false

        this.activatedRoute.paramMap.subscribe((params) => {
          this.idColaborador = parseInt(params.get('id'))

          if (this.idColaborador != 0) {
            this.isModeEdit = true
            this.colaboradorService.obtenerColaboradorPorId(this.idColaborador).subscribe(
              (response) => {
                this.colaborador = response
                this.tipoDocSelected = this.colaborador.tipoDocumento.idTipoDocumento
                this.obtenerRoles()
              },
              (err) => {
                this.errores = err.error.errors as string[]
              }
            )
          }else{
            this.obtenerRoles()
          }

        })
      },
      (error) => {
        this.loading = false
      }
    )
  }

  menuToggle() {
    this.status = !this.status
  }

  roles : Roles[]

  public obtenerRoles(){
    this.rolesService.getRoles().subscribe((response)=> {
      this.roles = response
      this.colaboradorService.obtenerUsuarioPorIdColaborador(this.idColaborador).subscribe(
        (response) => {
          if(response.length > 0){
            this.usuario = response[0].username
            this.rolseleccionado = response[0].roles[0].name
          }
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    })
  }

  public agregarColaborador(): void {

    if( this.usuario.length == 0 ){
      swal('Ingrese un nombre de usuario', '', 'warning')
    }

    if( this.rolseleccionado == '' ){
      swal('Seleccione un rol', '', 'warning')
    }

    let id = this.idColaborador
    const newColaborador = JSON.parse(JSON.stringify(this.colaborador))
    newColaborador.idTipoDocumento = this.tipoDocSelected

    if (id == 0) {

      if( this.contrasenia == null || this.contrasenia == '' ){
        swal('La contraseña debe contener minimo 8 digitos.', '', 'warning')
        return
      }

      this.colaboradorService.agregarColaborador(newColaborador).subscribe(
        (response) => {
          this.guardarUsuario(response.idColaborador)
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )

    } else {

      this.colaboradorService
        .actualizarColaborador(newColaborador, this.colaborador.idColaborador)
        .subscribe(
          (response) => {
            this.editarUsuario(this.usuario, this.contrasenia, this.rolseleccionado)
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )

    }

  }

  public guardarUsuario(idColaborador: number):void {

    let addUsuarioLogin = {
      "email": this.usuario,
      "idColaborador": idColaborador,
      "name": this.colaborador.nombres + ' ' + this.colaborador.apellidos,
      "password": this.contrasenia,
      "role": [
        this.rolseleccionado
      ],
      "username": this.usuario
    }

    this.colaboradorService.agregarUsuario(addUsuarioLogin).subscribe(
      (response: any) => {
        console.log('response: ' + response)
        this.router.navigate(['/colaboradores'])
        swal('Registro agregado', '', 'success')
      },
      (err) =>{
        if (err.status == 400){
          swal('Usuario ya existe', '', 'warning')
          this.idColaborador = idColaborador
          this.colaborador.idColaborador = idColaborador
        }
        if (err.status == 401){
          swal('Error en datos', '', 'warning')
          this.idColaborador = idColaborador
          this.colaborador.idColaborador = idColaborador
        }
      }
    )
  }


  usuario: string
  contrasenia: string
  rolseleccionado: string

  public editarUsuario(usuario: string, contrasenia: string, role: string){

    console.info(contrasenia)

    if(contrasenia){

      if( contrasenia.length < 8 ){
        swal('La contraseña debe contener minimo 8 digitos.', '', 'warning')
      }else{
        this.colaboradorService.editarUsuario(usuario, contrasenia, role).subscribe(
          (response: any) => {
            this.router.navigate(['/colaboradores'])
            swal('Registro editado correctamente', '', 'success')
          },
          (err) =>{
            if (err.status == 400){
              swal('Usuario ya existe', '', 'warning')
            }
            if (err.status == 401){
              swal('Error en datos', '', 'warning')
            }
          }
        )
      }

    }else{

      this.router.navigate(['/colaboradores'])
      swal('Registro editado correctamente', '', 'success')

    }
  }

  get isValidForm() {
    let isValid = true

    if (
      this.colaborador.nombres.trim() === '' ||
      this.colaborador.apellidos.trim() === '' ||
      this.colaborador.numeroDocumento.trim() === ''
    ) {
      isValid = false
    }

    if (this.colaborador.sexo === '0' || this.tipoDocSelected === 0) {
      isValid = false
    }

    return isValid
  }

  regresar() {
    window.location.href = '/colaboradores'
  }
}
