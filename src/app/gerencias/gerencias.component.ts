import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { GerenciaService } from './gerencia.service'
import { Gerencia } from './gerencia'

@Component({
  selector: 'app-gerencias',
  templateUrl: './gerencias.component.html'
})

export class GerenciasComponent implements OnInit {
  gerenciasLista: Gerencia[]
  gerenciaSeleccionado: Gerencia
  paginador: any
  base: string

  constructor(
    private gerenciaService: GerenciaService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  )
  {}

  ngOnInit(){
    this.obtenerGerencias()
  }

  public obtenerGerencias() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number =+ params.get('page')
      if (!page) {
        page = 0
      }
      this.gerenciaService.geGerenciasPorPagina(page).subscribe((
        clientesJsonResponse) => {
        this.gerenciasLista = clientesJsonResponse.content
        this.paginador = clientesJsonResponse
        this.base = 'gerencias'
      })
    })
  }

  public obtenerGerenciaSeleccionado(gerencia: Gerencia) {
    this.gerenciaSeleccionado = gerencia
  }

  public eliminar(gerencia: Gerencia): void {
    this.gerenciaService.eliminarGerencia(gerencia.idGerencia).subscribe(
      (response) => {
        console.info(response)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerGerencias()
      },
      (err) => {
        console.error(err)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerGerencias()
      }
    )
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
