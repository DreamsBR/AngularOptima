import { Component, OnInit } from '@angular/core'
import { TipoInmueble } from './../tipoinmueble/tipoInmueble'
import { TipoVista } from './../tipovista/tipoVista'
import { TipoInmuebleCategoria } from './../tipoinmueblecategoria/tipoInmuebleCategoria'
import { Inmueble } from '../inmuebles/inmueble'
import { InmuebleService } from '../inmuebles/inmueble.service'
import { ActivatedRoute, Router } from '@angular/router'
import { TipoInmuebleService } from './../tipoinmueble/tipoInmueble.service'
import { TipoVistaService } from './../tipovista/tipoVista.service'
import { TipoInmuebleCategoriaService } from './../tipoinmueblecategoria/tipoInmuebleCategoria.service'

import sleep from 'await-sleep'
@Component({
  selector: 'app-inmueble-nuevo-editar',
  templateUrl: './inmueble-nuevo-editar.component.html'
})
export class InmuebleNuevoEditarComponent implements OnInit {

  errors: string[] = []
  loading: boolean = false
  status: boolean = false

  pageToBackIdProyecto: number = 0

  isFormDpto: boolean = false
  optionsTipoInmueble: TipoInmueble[] = []
  optionsTipoVista: TipoVista[] = []
  optionsTipoInmuebleCategoria: TipoInmuebleCategoria[] = []
  // Formulario
  public inmueble: Inmueble = new Inmueble()

  public errores: string[]

  tipoinmueble: TipoInmueble[]
  tipovista: TipoVista[]
  tipoinmueblecategoria:TipoInmuebleCategoria[]

  constructor(
    private inmuebleService: InmuebleService,
    private activatedRoute: ActivatedRoute,
    private tipoInmuebleService:TipoInmuebleService,
    private tipoVistaService:TipoVistaService,
    private router: Router,
    private tipoInmuebleCategoriaService:TipoInmuebleCategoriaService) {
    this.optionsTipoInmueble = []
  }

  ngOnInit() {
    this.initFunctions()
  }

  async initFunctions() {

    this.loading = true
    await sleep(1000)
    this.loadTipoInmueble2()
    this.loadTipoVista2()

    this.loading = false

    const __self = this
    __self.activatedRoute.paramMap.subscribe((params) => {
      const paramIdInmueble: number = parseInt(params.get('id')) // Id del inmueble

      __self.activatedRoute.queryParams.subscribe((queryParams) => {
        this.pageToBackIdProyecto = parseInt(queryParams.idProyecto) // Id del proyecto
      })

      if (paramIdInmueble === 0) {
        // Obtiene el id del queryParam idProyecto
        this.inmueble.idProyecto = this.pageToBackIdProyecto
      } else {

        this.inmuebleService.getInmueblesByIdInmueble(paramIdInmueble).subscribe(
          (response) => {
            this.inmueble = response
            this.pageToBackIdProyecto = this.inmueble.idProyecto
            this.inmueble.idTipoInmueble=response.tipoInmueble.idTipoInmueble
            this.inmueble.idTipoInmuebleCategoria=response.tipoInmuebleCategoria.idTipoInmuebleCategoria
            this.inmueble.idTipoVista=response.tipoVista.idTipoVista
            this.loadTipoInmuebleCategoria2(this.inmueble.idTipoInmueble)
            this.isFormDpto=this.inmueble.idTipoInmueble==1?true:false

          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )

      }
    })

  }

  menuToggle() {
    this.status = !this.status
  }


  loadTipoInmueble2() {

    this.tipoInmuebleService.getTipoInmueble().subscribe((response) => {
      this.tipoinmueble = response

    })

  }

  loadTipoInmueble() {

    this.optionsTipoInmueble = [
      {
        idTipoInmueble: 1,
        enable: 1,
        nombre: 'DEPARTAMENTO'
      },
      {
        idTipoInmueble: 2,
        enable: 1,
        nombre: 'ESTACIONAMIENTO'
      }
    ]

    // CONSULTAR... LISTASMAESTRAS --> FALTA INYECTAR EN app.module.ts
    /* this.proyectoService.getProyectos(pageIndex).subscribe((listaJsonResponse) => {
      console.log(listaJsonResponse)
    }) */
  }

  loadTipoVista2() {

    this.tipoVistaService.getTipoVista().subscribe((response) => {
      this.tipovista = response

    })

  }

  loadTipoVista() {
    this.optionsTipoVista = [
      {
        idTipoVista: 1,
        enable: 1,
        nombre: 'EXTERIOR'
      },
      {
        idTipoVista: 2,
        enable: 1,
        nombre: 'INTERIOR'
      }
    ]
  }

  loadTipoInmuebleCategoria2(val: number) {

      this.tipoInmuebleCategoriaService.getTipoInmuebleCategoria(val).subscribe((response) => {
      this.tipoinmueblecategoria = response

    })

  }

  loadTipoInmuebleCategoria() {
    this.optionsTipoInmuebleCategoria = [
      {
        idTipoInmuebleCategoria: 1,
        enable: 1,
        idTipoInmueble: 1,
        nombre: 'A'
      },
      {
        idTipoInmuebleCategoria: 2,
        enable: 1,
        idTipoInmueble: 1,
        nombre: 'B'
      }
    ]
  }

  guardar() {
    const isValid = this.validarForm()

    if (!isValid) return

    if(this.inmueble.idTipoInmueble==2){
      this.inmueble.idTipoInmuebleCategoria=0
    }

      const __self = this
    __self.inmuebleService.crearInmueble(this.inmueble).subscribe((resp) => {
      __self.regresar()
    })
  }

  regresar() {
    this.router.navigate(['/inmuebles/' + this.pageToBackIdProyecto])

    //window.history.back()
  }

  // Change Events Selectors
  onChangetTipoInmueble(val: number) {

    this.isFormDpto = val === 1 // 1 ES Departamento

    if (this.isFormDpto) {
      // Dpto
    //  this.loadTipoVista()
      this.loadTipoInmuebleCategoria2(val)
    } else {
      this.loadTipoInmuebleCategoria2(val)
      // Otros (Estacionamiento)
      this.inmueble.idTipoInmuebleCategoria = 0
     // this.inmueble.idTipoVista = 0
      this.inmueble.cantidadDormitorio = 0
    }
  }

  validarForm() {
    this.errors = []
    let tmpValid = true
    if(this.inmueble.idInmueble===0){

      if(this.inmueble.idTipoInmueble===2&&this.inmueble.idTipoVista === 0){
        tmpValid = false
        this.errors = ['Los campos: tipo  vista son requeridos']
      }

      if (this.inmueble.idTipoInmueble === 0  && this.inmueble.idTipoVista === 0) {
        tmpValid = false
        this.errors = ['Los campos: tipo inmueble, vista son requeridos']
      }
      if (this.inmueble.idTipoInmueble === 1  && this.inmueble.idTipoInmuebleCategoria==0 && this.inmueble.idTipoVista === 0) {
        tmpValid = false
        this.errors = ['Los campos: tipo inmueble,categoría, vista son requeridos']
      }
      if (this.inmueble.idTipoInmueble === 1  && this.inmueble.idTipoInmuebleCategoria==1 && this.inmueble.idTipoVista === 0) {
        tmpValid = false
        this.errors = ['Los campos: tipo vista son requeridos']
      }

    }else{

      if((this.inmueble.idTipoInmueble === 1&&this.inmueble.idTipoInmuebleCategoria === 0)||this.inmueble.idTipoVista === 0){
        tmpValid = false
        this.errors = ['Los campos: tipo categoría y vista son requeridos']
        }
       if(this.inmueble.idTipoInmueble === 1&&this.inmueble.idTipoInmuebleCategoria === 1&&this.inmueble.idTipoVista === 0){
        tmpValid = false
        this.errors = ['Los campos: tipo vista son requeridos']
      }
      if(this.inmueble.idTipoInmueble ===2&&this.inmueble.idTipoVista === 0){
        tmpValid = false
        this.errors = ['Los campos: tipo vista son requeridos']
      }
      if(this.inmueble.idTipoInmueble ===0&&this.inmueble.idTipoVista != 0){
        tmpValid = false
        this.errors = ['Los campos: tipo vista son requeridos']
      }
    }

    return tmpValid
  }
}
