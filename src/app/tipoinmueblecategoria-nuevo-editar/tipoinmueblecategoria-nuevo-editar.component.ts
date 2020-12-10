import { Component, OnInit, ViewChild } from '@angular/core'
import { TipoInmueble } from '../tipoinmueble/tipoInmueble'
import { TipoInmuebleService } from '../tipoinmueble/tipoInmueble.service'
import { TipoInmuebleCategoria } from '../tipoinmueblecategoria/tipoInmuebleCategoria'
import { TipoInmuebleCategoriaService } from '../tipoinmueblecategoria/tipoInmuebleCategoria.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-tipoinmueblecategoria-nuevo-editar',
  templateUrl: './tipoinmueblecategoria-nuevo-editar.component.html'
})
export class TipoinmueblecategoriaNuevoEditarComponent implements OnInit {
  public errores: string[]

  idTipoInmuebleCategoria: number
  public tipoInmuebleCategoria: TipoInmuebleCategoria = new TipoInmuebleCategoria()

  optionsTipoInmueble: TipoInmueble[] = []
  selectedTipoInmueblePadre:string = null

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tipoInmuebleCategoriaService: TipoInmuebleCategoriaService, private tipoInmuebleService: TipoInmuebleService ) {}

  ngOnInit() {

    this.tipoInmuebleService.getTipoInmueble().subscribe(
      resp => {
        this.optionsTipoInmueble = resp
        this.activatedRoute.paramMap.subscribe((params) => {
          this.idTipoInmuebleCategoria = parseInt(params.get('id'))
          if (this.idTipoInmuebleCategoria != 0) {
            this.tipoInmuebleCategoriaService.obtenerTipoInmuebleCategoriaPorId(this.idTipoInmuebleCategoria).subscribe((response) => {
              this.tipoInmuebleCategoria = response
              this.selectedTipoInmueblePadre = '' + response.idTipoInmueble
            })
          } else {
            this.tipoInmuebleCategoria.idTipoInmuebleCategoria = 0
            this.tipoInmuebleCategoria.enable = 1
          }
        })
      },
      error => {
        console.log(error)
      }
    )
  }

  public guardar(): void {
    if (this.selectedTipoInmueblePadre === null || this.selectedTipoInmueblePadre == "0") {
      swal('Debe seleccionar el tipo de inmueble padre', '', 'error')
      return
    }
    if (this.tipoInmuebleCategoria.nombre == '' || this.tipoInmuebleCategoria.nombre == undefined) {
      swal('Falta ingresar el nombre del Tipo de inmueble categoría', '', 'error')
      return
    }
    
    this.tipoInmuebleCategoria.idTipoInmueble = parseInt(this.selectedTipoInmueblePadre)
    if (this.tipoInmuebleCategoria.idTipoInmuebleCategoria == 0) {
      this.tipoInmuebleCategoriaService.agregar(this.tipoInmuebleCategoria).subscribe(
        (_) => {
          this.router.navigate(['/tipoinmueblecategoria/'])
          swal('Registro agregado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    } else {
      this.tipoInmuebleCategoriaService.actualizar(this.tipoInmuebleCategoria, this.tipoInmuebleCategoria.idTipoInmuebleCategoria).subscribe(
        (_) => {
          this.router.navigate(['/tipoinmueblecategoria/'])
          swal('Registro acutalizado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
