import { Component, OnInit, ViewChild } from '@angular/core';
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component';
import { ColaboradorService} from './../colaboradores/colaborador.service'
import { PeriodoService } from '../periodos/periodo.service'

@Component({
  selector: 'app-gerencia-nuevo-editar',
  templateUrl: './gerencia-nuevo-editar.component.html'
})
export class GerenciaNuevoEditarComponent implements OnInit {

  @ViewChild('dpFechaInicio', { static: true }) dpFechaInicio: DatepickerRoundedComponent
  @ViewChild('dpFechaFin', { static: true }) dpFechaFin: DatepickerRoundedComponent

  frmfechaIngreso : string
  fechaTermino : string

  kwBuscar = 'nombre'
  dataBuscarGerente = []
  dataBuscarPeriodo = []
  aryPeriodos = []

  metaSeleccionada: number

  constructor(
    private colaboradorService: ColaboradorService,
    private periodoService: PeriodoService
  ){}

  ngOnInit() {
    this.obtenerTodosLosColaboradores()
    this.obtenerTodosLosPeriodos()
  }

  obtenerTodosLosColaboradores(){
    this.colaboradorService.getTodosColaboradores().subscribe((data) => {
      const listaColaboradores = []
      data.forEach((elem: any) => {
        listaColaboradores.push({
            idColaborador: elem.idColaborador,
            nombre: elem.nombres + ' ' + elem.apellidos
        })
      })
      this.dataBuscarGerente = listaColaboradores
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

  seleccionarItemBusqueda(event){
    console.info(event)
  }

  periodoSeleccionado: any
  seleccionarItemBusquedaPeriodo(event){
    this.periodoSeleccionado = event
  }

  agregarPeriodoGerencia(){
    let meta: {[k: string]: any} = {};
    meta.idPeriodo = this.periodoSeleccionado.idPeriodo
    meta.nombre = this.periodoSeleccionado.nombre
    meta.monto = this.metaSeleccionada
    this.aryPeriodos.push(meta)
    console.info(this.aryPeriodos)
  }

  eliminarMeta(i: number){
    this.aryPeriodos.splice(i, 1)
    console.info(this.aryPeriodos)
  }

  onFechaIngresoCargo(newdate:string){
    this.frmfechaIngreso = newdate
  }
  onFechaFinCargo(newdate:string){
    this.fechaTermino = newdate
  }

  siguientePagina(tabName: string){
    document.getElementById(tabName).click()
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
