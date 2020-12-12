import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { TipoInmuebleCategoria } from './tipoInmuebleCategoria'
import { TipoInmuebleCategoriaService } from './tipoInmuebleCategoria.service'
import { TipoInmueble } from '../tipoinmueble/tipoInmueble'
import { TipoInmuebleService } from '../tipoinmueble/tipoInmueble.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-tipo-inmueble',
  templateUrl: './tipoinmueblecategoria.component.html'
})
export class TipoInmuebleCategoriaComponent implements OnInit {
  itemsLista: TipoInmuebleCategoria[]
  registroSeleccionado: TipoInmuebleCategoria

  optionsTipoInmueble: TipoInmueble[] = []
  selectedTipoInmueblePadre:string = null

  constructor(
    private tipoInmuebleCategoriaService: TipoInmuebleCategoriaService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private tipoInmuebleService: TipoInmuebleService,
  ) {}

  ngOnInit() {
    this.tipoInmuebleService.getTipoInmueble().subscribe(
      resp => {
        this.optionsTipoInmueble = resp
      })
    
  }

  public obtenerItems() {
    if (this.selectedTipoInmueblePadre === null || this.selectedTipoInmueblePadre == "0") {
      swal('Debe seleccionar el tipo de inmueble padre', '', 'error')
      return
    }
    this.activatedRoute.paramMap.subscribe((params) => {
      this.tipoInmuebleCategoriaService.getTipoInmuebleCategoria(parseInt(this.selectedTipoInmueblePadre)).subscribe((jsonResponse) => {
        this.itemsLista = jsonResponse
      })
    })
  }

  public eliminar(tipoInmuebleCategoria: TipoInmuebleCategoria): void {
    tipoInmuebleCategoria.enable = 0
    this.tipoInmuebleCategoriaService.actualizar(tipoInmuebleCategoria, tipoInmuebleCategoria.idTipoInmuebleCategoria).subscribe(
      (_) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerItems()
      },
      (_) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerItems()
      }
    )
  }

  public obtenerSeleccionado(tipoInmuebleCategoria: TipoInmuebleCategoria) {
    this.registroSeleccionado = tipoInmuebleCategoria
    console.log(this.registroSeleccionado)
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
