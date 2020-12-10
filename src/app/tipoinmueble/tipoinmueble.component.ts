import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { TipoInmueble } from './tipoInmueble'
import { TipoInmuebleService } from './tipoInmueble.service'

@Component({
  selector: 'app-tipo-inmueble',
  templateUrl: './tipoinmueble.component.html'
})
export class TipoInmuebleComponent implements OnInit {
  itemsLista: TipoInmueble[]
  registroSeleccionado: TipoInmueble

  constructor(private tipoInmuebleService: TipoInmuebleService, private activatedRoute: ActivatedRoute, public authService: AuthService) {}

  ngOnInit() {
    this.obtenerItems()
  }

  public obtenerItems() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.tipoInmuebleService.getTipoInmueble().subscribe((jsonResponse) => {
        this.itemsLista = jsonResponse
      })
    })
  }

  public eliminar(tipoInmueble: TipoInmueble): void {
    tipoInmueble.enable = 0
    this.tipoInmuebleService.actualizar(tipoInmueble, tipoInmueble.idTipoInmueble).subscribe(
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

  public obtenerSeleccionado(tipoInmueble: TipoInmueble) {
    this.registroSeleccionado = tipoInmueble
    console.log(this.registroSeleccionado)
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
