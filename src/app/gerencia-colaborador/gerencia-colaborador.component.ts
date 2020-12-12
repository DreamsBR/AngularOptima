import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { GerenciaService } from './../gerencias/gerencia.service'
import { Gerencia } from './../gerencias/gerencia'
import { Gerencia2 } from './../gerencias/gerencia2'
import { ProyectoService } from './../proyectos/proyectos.service'
import swal from 'sweetalert2';

@Component({
  selector: 'app-gerencia-colaborador',
  templateUrl: './gerencia-colaborador.component.html'
})

export class GerenciaColaboradorComponent implements OnInit {

  idColaborador: number
  idGerencia: number
  gerenciaNombre: string
  gerenteIniciales: string
  gerenteNombre: string
  fechaInicio: string
  // gerenciaSeleccionado: Gerencia
  // paginador: any
  // base: string
  // departamentosAgregados = []
  proyectosPorGerencia = []
  datos: any

  constructor(
    private gerenciaService: GerenciaService,
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService    
  ) { }

  ngOnInit() {
    this.obtenerGerencias()
  }

  public obtenerGerencias() {
    this.activatedRoute.paramMap.subscribe((params) => {
      // let page: number =+ params.get('page')
      // if (!page) {
      //   page = 0
      // }
      this.idColaborador = parseInt(params.get('idColaborador'));
      this.gerenciaService.getGerenciaPorColaborador(this.idColaborador).subscribe((
        clientesJsonResponse) => {
        this.datos = clientesJsonResponse
        console.info(this.datos)
        this.gerenciaNombre = this.datos.gerencia.nombre
        this.idGerencia = this.datos.gerencia.idGerencia
        this.gerenteNombre = this.datos.gerente.nombres + ' ' + this.datos.gerente.apellidos
        let ininom = this.datos.gerente.nombres.substr(0,1)
        let iniape = this.datos.gerente.apellidos.substr(0,1)
        this.gerenteIniciales = ininom.toUpperCase() + iniape.toUpperCase()
        this.fechaInicio = this.datos.gerencia.fechaIngreso

        this.proyectosPorGerencia = this.datos.listProyecto

        // this.proyectosPorGerencia = []
        // for (var i = 0 ; i < this.gerenciasLista.length ; i++) {
        //   this.obtenerProyectosPorGerencia(this.gerenciasLista[i].idGerencia)
        // }
        // this.paginador = clientesJsonResponse
        // this.base = 'gerencias'
      },
      (err) => {
        if(err.status == 500){

        }
      })
    })
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}