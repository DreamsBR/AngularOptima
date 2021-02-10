import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { GerenciaService } from './gerencia.service'
import { Gerencia } from './gerencia'
import { Gerencia2 } from './../gerencias/gerencia2'
import { ProyectoService } from './../proyectos/proyectos.service'

@Component({
  selector: 'app-gerencias',
  templateUrl: './gerencias.component.html'
})

export class GerenciasComponent implements OnInit {

  gerenciasLista: Gerencia[]
  gerenciaSeleccionado: Gerencia
  paginador: any
  base: string
  departamentosAgregados = []

  constructor(
    private gerenciaService: GerenciaService,
    private proyectoService: ProyectoService,
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
        this.proyectosPorGerencia = []
        for (var i = 0 ; i < this.gerenciasLista.length ; i++) {
          this.obtenerProyectosPorGerencia(this.gerenciasLista[i].idGerencia)
        }
        this.paginador = clientesJsonResponse
        this.base = 'gerencias'
      })
    })
  }

  proyectosPorGerencia = []

  public obtenerProyectosPorGerencia(idGerencia: number){
    this.proyectoService.getProyectosByIdGerencia(idGerencia).subscribe((response) => {
        this.proyectosPorGerencia[idGerencia] = response
    })
  }

  public obtenerGerenciaSeleccionado(gerencia: Gerencia) {
    this.gerenciaSeleccionado = gerencia
  }

  public eliminar(gerencia: Gerencia): void {

    console.log(gerencia.categoriaGerencia.idCategoriaGerencia);

    let gerenciaadd: Gerencia2 = new Gerencia2()

    gerenciaadd.enable = 0 // --> Deshabilita Gerencia
    gerenciaadd.fechaIngreso = gerencia.fechaIngreso
    gerenciaadd.fechaTermino = gerencia.fechaTermino
    gerenciaadd.idGerente = gerencia.colaborador.idColaborador
    gerenciaadd.nombre = gerencia.nombre
    gerenciaadd.idGerencia = gerencia.idGerencia
    gerenciaadd.idCategoriaGerencia = gerencia.categoriaGerencia.idCategoriaGerencia

    this.gerenciaService.editarGerencia(gerenciaadd, gerenciaadd.idGerencia).subscribe(
      (response) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerGerencias()
      },
      (err) => {
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
