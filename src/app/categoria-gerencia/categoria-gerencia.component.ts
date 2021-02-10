import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { CategoriaGerencia } from './categoria-gerencia'
import { CategoriaGerenciaService } from './categoria-gerencia.service'

@Component({
  selector: 'app-categoria-gerencia',
  templateUrl: './categoria-gerencia.component.html',
  styleUrls: ['./categoria-gerencia.component.css']
})
export class CategoriaGerenciaComponent implements OnInit {
  itemsLista: CategoriaGerencia[]
  registroSeleccionado: CategoriaGerencia

  constructor(
    private categoriaGerenciaService: CategoriaGerenciaService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.obtenerListaItems()
  }

  public obtenerListaItems() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoriaGerenciaService.getCategoriasGerencia().subscribe((response) => {
        this.itemsLista = response
      })
    })
  }

  public eliminar(categoriaGerencia: CategoriaGerencia): void {
    categoriaGerencia.enable = 0
    this.categoriaGerenciaService
      .actualizar(categoriaGerencia, categoriaGerencia.idCategoriaGerencia)
      .subscribe(
        (_) => {
          document.getElementById('cerrarModalEliminar').click()
          this.obtenerListaItems()
        },
        (_) => {
          document.getElementById('cerrarModalEliminar').click()
          this.obtenerListaItems()
        }
      )
  }

  public obtenerSeleccionado(categoriaGerencia: CategoriaGerencia) {
    this.registroSeleccionado = categoriaGerencia
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
