import { PeriodoProyecto } from "./../proyectos/periodoproyecto";
import { Component, OnInit, ɵConsole } from '@angular/core'
import { Proyecto } from '../proyectos/proyecto'
import { ProyectoService } from '../proyectos/proyectos.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { hardCodeProyectos } from '../proyectos/hardCodeProyectos'
import { Observable } from 'rxjs'
import { PeriodoService } from '../periodos/periodo.service'
import { Periodo } from '../periodos/periodo'

import { PeriodoGerencia } from './../periodo-gerencia/periodogerencia'

import { PeridoProyectoService } from "./periodoProyecto.service";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Gerencia } from '../gerencias/gerencia';

@Component({
  selector: 'app-proyecto-nuevo-editar',
  templateUrl: './proyecto-nuevo-editar.component.html'
})

export class ProyectoNuevoEditarComponent implements OnInit {

  editMode: boolean = true
  public errores:string[]
  public proyecto = new Proyecto()
  public perioProyecto = new PeriodoGerencia()
  public newPeriodo:[]
  metaSeleccionada: number
  fechainicio : string
  fechafin : string



  public idProyecto:number
  frmIdProyecto: number = 0
  frmCodigo: string = ''
  frmNombrepro: string = ''
  frmEnable: number = 1
  frmDireccion: string = ''

  aryPeriodos = []
  model: any
  searchPeriodos: any

  constructor(
    private proyectoService: ProyectoService,
    private periodoService: PeriodoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private periodo: PeriodoService,
    private periodoProyectoSerive : PeridoProyectoService
  ) {}


  ngOnInit() {


    this.activatedRoute.paramMap.subscribe((params) => {
      this.idProyecto = parseInt(params.get('id'))
      if (this.idProyecto != 0) {
        this.proyecto.idProyecto = this.idProyecto
        this.proyectoService.getProyectosById(this.idProyecto).subscribe(
        (response)=> {
          console.log(response)

          this.frmIdProyecto = response.proyecto.idProyecto
          this.frmCodigo  = response.proyecto.codigo
          this.frmNombrepro  = response.proyecto.nombre
          this.frmEnable  =  response.proyecto.enable
          this.frmDireccion =  response.proyecto.direccion

          console.info()
        },
        (err)=> {
          this.errores = err.error.errors as string[]
        })
      }
    })

    this.obtenerTodosLosPeriodos()

  }
/*
  public obtenerPeriodos() {
    this.periodoService.getTodoPeriodos().subscribe((response) => {
      for(let x = 0 ; x < response.length ; x++){
        this.aryPeriodos.push(response[x].nombre)
      }
      console.info(this.aryPeriodos)

      this.searchPeriodos = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => term.length < 2 ? []: this.aryPeriodos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      )
    })
  }*/
  frmfechaIngreso:string
  onFechaIngresoCargo(newdate:string){
    this.frmfechaIngreso = newdate
  }

  aryProyectos = []
  eliminarProyectoPeriodo(i: number){
    this.aryProyectos.splice(i, 1)
    console.info(this.aryPeriodos)
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

  regresar() {
    window.location.href = '/proyectos'
  }
  guardar() {

    const newProyecto = new Proyecto()
    const newPerProyecto = new PeriodoGerencia()


    newProyecto.idProyecto = this.frmIdProyecto
    newProyecto.codigo = this.frmCodigo
    newProyecto.nombre = this.frmNombrepro
    newProyecto.enable = this.frmEnable
    newProyecto.direccion = this.frmDireccion
    newPerProyecto.meta = this.frmMonto

    if(this.proyecto.idProyecto = 0) {
      this.proyectoService.newProyecto(newProyecto).subscribe(
        (response) => {
          this.guardarPeriodoProyecto(response.idProyecto)
        }
      )
    }

    this.proyectoService.newProyecto(newProyecto).subscribe((_) => {
      window.location.href = '/proyectos'
    })
  }

/*****/
  kwBuscar = 'nombre'
  dataBuscarPeriodo = []
  frmMonto :number = 0
  fmrPeriodo : number


  fetchDataById() {
    const proyectToEdit = new Proyecto()
    proyectToEdit.idProyecto = this.frmIdProyecto

    for (const proy of hardCodeProyectos) {
      if (proy.idProyecto === proyectToEdit.idProyecto) {
        this.frmIdProyecto = proy.idProyecto
        this.frmCodigo = proy.codigo
        this.frmNombrepro = proy.nombre
        this.frmEnable = proy.enable
        this.frmDireccion = proy.direccion

        break
      }
    }
  }
  periodoGer : Periodo[]

/*
  public obtenerPeriodos(){
    this.periodo.getTodoPeriodos().subscribe((response) =>{
      console.log(response)
      this.periodoGer = response
      console.info(this.periodo)
    })
  }*/




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

  periodoSeleccionado: any
  seleccionarItemBusquedaPeriodo(event){
    this.periodoSeleccionado = event
  }


  agregarPeriodoProyecto(){
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

  fechaTermino:string

  onFechaFinCargo(newdate:string){
    this.fechaTermino = newdate
  }


  guardarPeriodoProyecto(idProyecto: number){
    for (let i = 0; i < this.aryPeriodos.length; i++) {
      var periodoProyecto = new PeriodoProyecto()
      periodoProyecto.idPeriodoProyecto = 0
      periodoProyecto.enable = 1
      periodoProyecto.idProyecto = idProyecto
      periodoProyecto.idPeriodo = this.aryPeriodos[i].idPeriodo
      periodoProyecto.meta = this.aryPeriodos[i].monto
      this.periodoProyectoSerive.agregarPeriodoProyecto(periodoProyecto).subscribe(
        (response) => {
          console.info(response)
        },
        (err) => {
          this.errores = err.error.errors as string[];

        })
    }}



}
