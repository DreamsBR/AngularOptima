import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { PeriodoService } from '../periodos/periodo.service'
import { PeriodocolaboradorService } from './periodocolaborador.service'
import { Periodocolaborador } from './periodocolaborador'
import { Periodocolaboradornodos } from './periodocolaboradornodos'

@Component({
  selector: 'app-colaborador-metas',
  templateUrl: './colaborador-metas.component.html'
})
export class ColaboradorMetasComponent implements OnInit {

  idColaborador: number
  idJefatura: number
  idProyecto: number
  idGerencia: number

  acNombrePeriodo = 'nombre'
  dataBuscarPeriodo = []

  aryPeriodos = []
  metaSeleccionada: any

  public errores: string[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private periodoService: PeriodoService,
    private periodocolaboradorService: PeriodocolaboradorService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idColaborador = parseInt(params.get('id'))
      this.idJefatura = parseInt(params.get('idJefatura'))
      this.idProyecto = parseInt(params.get('idProyecto'))
      this.idGerencia = parseInt(params.get('idGerencia'))
      this.obtenerPeriodoColaborador()
    })
    this.obtenerTodosLosPeriodos()
  }

  obtenerPeriodoColaborador(){
    this.aryPeriodos = []
    this.periodocolaboradorService.getPeriodosPorColaborador(this.idColaborador).subscribe((
      response) => {
        for(let x = 0 ; x < response.length ; x++ ){
          let meta: {[k: string]: any} = {};
          meta.idPeriodoColaborador = response[x].idPeriodoColaborador
          meta.idPeriodo = response[x].periodo.idPeriodo
          meta.nombre = response[x].periodo.nombre
          meta.monto = response[x].meta
          this.aryPeriodos.push(meta)
        }
        console.info(this.aryPeriodos)
    })
  }

  obtenerTodosLosPeriodos(){
    this.periodoService.getTodoPeriodos().subscribe((data) => {
      const listaPeriodos = []
      data.forEach((elem: any) => {
        listaPeriodos.push({
            idPeriodo: elem.idPeriodo,
            nombre: elem.nombre + " "
        })
      })
      this.dataBuscarPeriodo = listaPeriodos
    })
  }

  agregarPeriodoColaborador(){

    var periodocolaborador = new Periodocolaborador()
    periodocolaborador.enable = 1
    periodocolaborador.idColaborador = this.idColaborador
    periodocolaborador.idPeriodo = this.periodoSeleccionado.idPeriodo
    periodocolaborador.meta = this.metaSeleccionada
    periodocolaborador.idPeriodoColaborador = 0
    this.periodocolaboradorService.agregarPeriodoColaborador(periodocolaborador).subscribe(
      (response) => {
        let meta: {[k: string]: any} = {};
        meta.idPeriodoColaborador = response.idPeriodoColaborador
        meta.idPeriodo = this.periodoSeleccionado.idPeriodo
        meta.nombre = this.periodoSeleccionado.nombre
        meta.monto = this.metaSeleccionada
        this.aryPeriodos.push(meta)
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )
  }

  editarMeta(i: number){
    var periodocolaborador = new Periodocolaborador()
    periodocolaborador.idPeriodoColaborador = this.aryPeriodos[i].idPeriodoColaborador
    periodocolaborador.enable = 1
    periodocolaborador.idColaborador = this.idColaborador
    periodocolaborador.idPeriodo = this.aryPeriodos[i].idPeriodo
    periodocolaborador.meta = this.aryPeriodos[i].monto
    this.periodocolaboradorService.editarPeriodoColaborador(periodocolaborador, this.aryPeriodos[i].idPeriodoColaborador).subscribe(
      (response) => {
        this.obtenerPeriodoColaborador()
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )
  }

  eliminarMeta(i: number){
    this.periodocolaboradorService.eliminarPeriodoColaborador(this.aryPeriodos[i].idPeriodoColaborador).subscribe(
      (response) => {
        this.aryPeriodos.splice(i, 1)
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )
  }

  periodoSeleccionado: any
  seleccionarItemBusquedaPeriodo(event){
    this.periodoSeleccionado = event
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
