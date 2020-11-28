import { Component, OnInit, ViewChild } from '@angular/core';
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component';
import { ColaboradorService} from './../colaboradores/colaborador.service'
import { PeriodoService } from '../periodos/periodo.service'
import { ProyectoService } from '../proyectos/proyectos.service'
import { Gerencia } from './../gerencias/gerencia'
import { Gerencia2 } from './../gerencias/gerencia2'
import { GerenciaService } from './../gerencias/gerencia.service'
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router'
import { PeriodoGerenciaService } from './../periodo-gerencia/periodo-gerencia.service'
import { PeriodoGerencia2 } from './../periodo-gerencia/periodogerencia2'
import { GerenciaproyectoService } from './gerenciaproyecto.service'
import { Gerenciaproyecto } from './gerenciaproyecto'

@Component({
  selector: 'app-gerencia-nuevo-editar',
  templateUrl: './gerencia-nuevo-editar.component.html'
})

export class GerenciaNuevoEditarComponent implements OnInit {

  public idGerencia: number

  public nombreGerencia: string

  public errores: string[]
  public gerencia: Gerencia = new Gerencia()

  @ViewChild('dpFechaInicio', { static: true }) dpFechaInicio: DatepickerRoundedComponent
  @ViewChild('dpFechaFin', { static: true }) dpFechaFin: DatepickerRoundedComponent
  @ViewChild('dpFechaAsignacionProyecto', { static: true }) dpFechaAsignacionProyecto: DatepickerRoundedComponent
  @ViewChild('dpFechaTerminoProyecto', { static: true }) dpFechaTerminoProyecto: DatepickerRoundedComponent

  fechaIngreso : string
  fechaTermino : string
  fechaAsignacionProyecto : string
  fechaTerminoProyecto : string

  nombreGerente: string

  kwBuscar = 'nombre'
  dataBuscarGerente = []
  dataBuscarPeriodo = []
  dataBuscarProyecto = []
  aryPeriodos = []
  aryProyectos = []

  colaboradorSeleccionado: any
  metaSeleccionada: any

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private colaboradorService: ColaboradorService,
    private periodoService: PeriodoService,
    private proyectoService: ProyectoService,
    private gerenciaService: GerenciaService,
    private periodoGerenciaService: PeriodoGerenciaService,
    private gerenciaproyectoService: GerenciaproyectoService
  ){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idGerencia = parseInt(params.get('id'))
      if(this.idGerencia != 0){
        this.gerenciaService.geGerenciasPorId(this.idGerencia).subscribe(
          (response) => {
            console.info(response)
            this.nombreGerencia = response.gerencia.nombre
            this.nombreGerente = response.gerente.nombres + ' ' + response.gerente.apellidos

            console.info(this.nombreGerente)

            this.dpFechaInicio.setValue(response.gerencia.fechaIngreso)
            this.dpFechaFin.setValue(response.gerencia.fechaTermino)
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
      }
      this.obtenerTodosLosColaboradores()
      this.obtenerTodosLosPeriodos()
      this.obtenerTodosLosProyectos()
    })
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

  obtenerTodosLosProyectos(){
    this.proyectoService.getAllProjects().subscribe((data) => {
      const listaProyectos = []
      data.forEach((elem: any) => {
        listaProyectos.push({
            idProyecto: elem.idProyecto,
            nombre: elem.nombre + " "
        })
      })
      this.dataBuscarProyecto = listaProyectos
    })
  }

  seleccionarItemBusqueda(event){
    this.colaboradorSeleccionado = event
    console.info(event)
  }

  proyectoSeleccionado: any
  seleccionarItemBusquedaProyecto(event){
    this.proyectoSeleccionado = event
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

  agregarProyectoGerencia(){
    let proyecto: {[k: string]: any} = {};
    proyecto.idProyecto = this.proyectoSeleccionado.idProyecto
    proyecto.nombre = this.proyectoSeleccionado.nombre
    proyecto.fechaAsignacionProyecto = this.fechaAsignacionProyecto
    proyecto.fechaTerminoProyecto = this.fechaTerminoProyecto
    this.aryProyectos.push(proyecto)
    console.info(this.aryProyectos)
  }

  eliminarProyectoGerencia(i: number){
    this.aryProyectos.splice(i, 1)
    console.info(this.aryPeriodos)
  }

  onFechaIngresoCargo(newdate:string){
    this.fechaIngreso = newdate
  }
  onFechaFinCargo(newdate:string){
    this.fechaTermino = newdate
  }

  onFechaAsignacionProyecto(newdate:string){
    this.fechaAsignacionProyecto = newdate
  }
  onFechaTerminoProyecto(newdate:string){
    this.fechaTerminoProyecto = newdate
  }

  siguientePagina(tabName: string){
    document.getElementById(tabName).click()
  }

  agregarGerencia(){

    if(this.gerencia.nombre == '' || this.gerencia.nombre == null){
      swal('Ingrese el nombre de la gerencia', '', 'warning')
      return
    }

    if(this.colaboradorSeleccionado == null){
      swal('No ha seleccionado ningun colaborador para gerente', '', 'warning')
      return
    }

    if(this.fechaIngreso == '' || this.fechaIngreso == null){
      swal('Seleccione una fecha de ingreso de gerencia', '', 'warning')
      return
    }

    if(this.fechaTermino == '' || this.fechaTermino == null){
      swal('Seleccione una fecha de termino de gerencia', '', 'warning')
      return
    }

    if(this.aryPeriodos.length == 0){
      swal('No hay periodos agregados', '', 'warning')
      return
    }

    if(this.aryProyectos.length == 0){
      swal('No hay proyectos agregados', '', 'warning')
      return
    }

    let gerenciaadd: Gerencia2 = new Gerencia2()

    gerenciaadd.idGerencia = 0
    gerenciaadd.enable = 1
    gerenciaadd.fechaIngreso = this.fechaIngreso
    gerenciaadd.fechaTermino = this.fechaTermino
    gerenciaadd.idGerente = this.colaboradorSeleccionado.idColaborador
    gerenciaadd.nombre = this.nombreGerencia

    if(this.gerencia.idGerencia == 0){
      this.gerenciaService.agregarGerencia(gerenciaadd).subscribe(
        (response) => {
            //this.router.navigate(['/gerencias/'])
            //swal('Nueva gerencia', `Gerencia ${response.nombre} creado con exito`, 'success')
            this.guardarPeriodoGerencia(response.idGerencia)
            this.guardarProyectosGerencia(response.idGerencia)
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
      // this.clienteService.actualizarCliente(this.cliente, this.cliente.idCliente).subscribe(
      //   (response) => {
      //     this.router.navigate(['/clientes'])
      //     swal('Editar cliente', `Cliente ${response.nombres} actualizado con exito`, 'success')
      //   },
      //   (err) => {
      //     this.errores = err.error.errors as string[]
      //   }
      // )
    }

  }

  guardarPeriodoGerencia(idGerencia: number){
    for (var i = 0; i < this.aryPeriodos.length; i++) {
      var periodoGerencia = new PeriodoGerencia2()
      periodoGerencia.enable = 1
      periodoGerencia.idPeriodoGerencia = 0
      periodoGerencia.idGerencia = idGerencia
      periodoGerencia.idPeriodo = this.aryPeriodos[i].idPeriodo
      periodoGerencia.meta = this.aryPeriodos[i].monto
      this.periodoGerenciaService.agregarPeriodoGerencia(periodoGerencia).subscribe(
        (response) => {
          console.info(response)
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }
  }

  guardarProyectosGerencia(idGerencia: number){
    for (var i = 0; i < this.aryPeriodos.length; i++) {
      var gerenciaproyecto = new Gerenciaproyecto()
      gerenciaproyecto.idGerenciaProyecto = 0
      gerenciaproyecto.enable = 1
      gerenciaproyecto.idGerencia = idGerencia
      gerenciaproyecto.idProyecto = this.aryProyectos[i].idProyecto
      this.gerenciaproyectoService.agregarProyectosGerencia(gerenciaproyecto).subscribe(
        (response) => {
          console.info(response)
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}