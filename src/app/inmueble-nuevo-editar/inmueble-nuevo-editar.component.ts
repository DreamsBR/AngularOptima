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
  public inmueble: Inmueble = new Inmueble()
  public errores: string[]
   

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
        this.inmueble.idProyecto = this.pageToBackIdProyecto
      } else {
          
        this.inmuebleService.getInmueblesByIdInmueble(paramIdInmueble).subscribe(
          (response) => {
            this.inmueble = response
            console.log(response)
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

    console.log(this.inmueble)
    
    const __self = this
    __self.inmuebleService.crearInmueble(this.inmueble).subscribe((resp) => {
      __self.regresar()
    })
  }

  regresar() {
    window.location.href = '/inmuebles/' + this.pageToBackIdProyecto
  }

  // Change Events Selectors
  onChangetTipoInmueble(val: number) {
    this.isFormDpto = val === 1 // 1 ES Departamento

    if (this.isFormDpto) {
      // Dpto
      this.loadTipoVista()
      this.loadTipoInmuebleCategoria()
    } else {
      // Otros (Estacionamiento)
      this.inmueble.idTipoInmuebleCategoria = 0
      this.inmueble.idTipoVista = 0
      this.inmueble.cantidadDormitorio = 0
    }
  }

  validarForm() {
    this.errors = []
    let tmpValid = true
    if (this.inmueble.idTipoInmueble === 0 || this.inmueble.idTipoInmuebleCategoria === 0 || this.inmueble.idTipoVista === 0) {
      tmpValid = false
      this.errors = ['Los campos: tipo inmueble, categoría y vista son requeridos']
    } 
    return tmpValid
  }
}
