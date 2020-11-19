import { Component, OnInit } from '@angular/core'
import { TipoInmueble } from './tipoinmueble'
import { TipoVista } from './tipovista'
import { TipoInmuebleCategoria } from './tipoinmueblecategoria'
import { Inmueble } from '../inmuebles/inmueble'
import { InmuebleService } from '../inmuebles/inmueble.service'
import { ActivatedRoute } from '@angular/router'
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
  formIdInmueble: number = 0
  formIdProyecto: number = 0
  formIdTipoInmueble: number = 0
  formIdTipoInmuebleCategoria: number = 0
  formNroDptoEstac: string = ''
  formAreaTechada: number = 0
  formAreaLibre: number = 0
  formAreaTotal: number = 0
  formIdTipoVista: number = 0
  formCantDorm: number = 0
  formPrecio: number = 0
  formOtros: string = ''
  formEnable: number = 1

  constructor(private inmuebleService: InmuebleService, private activatedRoute: ActivatedRoute) {
    this.optionsTipoInmueble = []
  }

  ngOnInit() {
    this.initFunctions()
  }

  async initFunctions() {
    this.loading = true
    await sleep(1000)
    this.loadTipoInmueble()
    this.loading = false
    // console.log(this.optionsTipoInmueble)

    const __self = this
    __self.activatedRoute.paramMap.subscribe((params) => {
      const paramIdInmueble: number = parseInt(params.get('id')) // Id del inmueble

      __self.activatedRoute.queryParams.subscribe((queryParams) => {
        this.pageToBackIdProyecto = parseInt(queryParams.idProyecto) // Id del proyecto
      })

      if (paramIdInmueble === 0) {
        // Obtiene el id del queryParam idProyecto
        this.formIdProyecto = this.pageToBackIdProyecto
      } else {
        // Obtiene el id de la DB
        console.log('Obtiene el id de la DB')
        // this.formIdProyecto = this.pageToBackIdProyecto
      }
    })
  }

  menuToggle() {
    this.status = !this.status
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

  loadTipoVista(val: number) {
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

  loadTipoInmuebleCategoria(val: number) {
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

    const newInmueble = new Inmueble()
    newInmueble.idInmueble = this.formIdInmueble
    newInmueble.idProyecto = this.formIdProyecto
    newInmueble.idTipoInmueble = this.formIdTipoInmueble // Requerido
    newInmueble.idTipoInmuebleCategoria = this.formIdTipoInmuebleCategoria // Requerido
    newInmueble.numero = this.formNroDptoEstac
    newInmueble.areaTechada = this.formAreaTechada
    newInmueble.areaLibre = this.formAreaLibre
    newInmueble.areaTotal = this.formAreaTotal
    newInmueble.idTipoVista = this.formIdTipoVista // Requerido
    newInmueble.cantidadDormitorio = this.formCantDorm
    newInmueble.precio = this.formPrecio
    newInmueble.enable = this.formEnable

    // console.log(newInmueble)
    const __self = this
    __self.inmuebleService.crearInmueble(newInmueble).subscribe((resp) => {
      __self.regresar()
    })
  }

  regresar() {
    window.location.href = '/inmuebles/' + this.pageToBackIdProyecto
  }

  // Change Events Selectors
  onChangetTipoInmueble(val: number) {
    this.isFormDpto = val === 1

    if (this.isFormDpto) {
      // Dpto
      this.loadTipoVista(val)
      this.loadTipoInmuebleCategoria(val)
    } else {
      // Otros (Estacionamiento)
      this.formIdTipoInmuebleCategoria = 0
      this.formIdTipoVista = 0
      this.formCantDorm = 0
    }
  }

  validarForm() {
    this.errors = []
    let tmpValid = true
    if (this.formIdTipoInmueble === 0 || this.formIdTipoInmuebleCategoria === 0 || this.formIdTipoVista === 0) {
      tmpValid = false
      this.errors = ['Los campos: tipo inmueble, categoría y vista son requeridos']
    } 
    return tmpValid
  }
}
