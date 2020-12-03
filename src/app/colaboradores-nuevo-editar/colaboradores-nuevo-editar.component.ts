import { Component, OnInit } from '@angular/core'
import { ColaboradorService } from '../colaboradores/colaborador.service'
import { Colaborador } from '../colaboradores/colaborador'
import { Router, ActivatedRoute } from '@angular/router'

import swal from 'sweetalert2'
import { TipoDocumento } from '../colaboradores/tipoDocumento'
import { VentaService } from '../ventas/ventas.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'
import { Roles } from '../colaboradores/roles'
import { EstadocivilService } from '../clientes/estadocivil.service'
import { TipodocumentoService } from '../clientes-nuevo-editar/tipodocumento.service'
import { RolesServices } from '../colaboradores/roles.service'
import { UsuarioLoginService } from '../colaboradores/usuarioLogin.service'
import { UsuarioLogin } from '../colaboradores/usuarioLogin'



//fetchingTipoDocumento

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
    private usuarioLoginService:UsuarioLoginService
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
              },
              (err) => {
                this.errores = err.error.errors as string[]
              }
            )
          }
        })
      },
      (error) => {
        this.loading = false
        console.log(error)
      }
    )

    this.obtenerRoles()
  }





  menuToggle() {
    this.status = !this.status
  }


  roles : Roles[]

  public obtenerRoles(){
    this.rolesService.getRoles().subscribe((response)=> {
      this.roles = response
    })
  }





  public agregarColaborador(): void {
    let id = this.idColaborador
    // Ya que el modelo solo acepta el idTipoDocumento en el primer nivel
    const newColaborador = JSON.parse(JSON.stringify(this.colaborador))
    newColaborador.idTipoDocumento = this.tipoDocSelected

    if (id == 0) {
      this.colaboradorService.agregarColaborador(newColaborador).subscribe(
        (response) => {
          console.log(response)
          this.router.navigate(['/colaboradores'])
          swal('Nuevo colaborador', `Colaborador ${response.nombres} creado con exito`, 'success')
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
            this.router.navigate(['/colaboradores'])
            swal(
              'Editar colaborador',
              `Colaborador ${response.nombres} actualizado con exito`,
              'success'
            )
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
    }
  }


  public EnviarUsiario(idCola: number):void {

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
