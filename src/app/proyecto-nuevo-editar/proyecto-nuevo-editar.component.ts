import { Component, OnInit } from '@angular/core'
import { Proyecto } from '../proyectos/proyecto'
import { ProyectoService } from '../proyectos/proyectos.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { hardCodeProyectos } from '../proyectos/hardCodeProyectos'
import { Observable } from 'rxjs'
import { PeriodoService } from '../periodos/periodo.service'
import { Periodo } from '../periodos/periodo'

import { PeriodoGerencia } from './../periodo-gerencia/periodogerencia'


import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-proyecto-nuevo-editar',
  templateUrl: './proyecto-nuevo-editar.component.html'
})
export class ProyectoNuevoEditarComponent implements OnInit {

  editMode: boolean = true
  public errores:string[]
  public proyecto = new Proyecto()
  public newPeriodo:[]

  idProyecto:number
  frmIdProyecto: number = 0
  frmCodigo: string = ''
  frmNombre: string = ''
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
    private periodo: PeriodoService

  ) {}

  ngOnInit() {


    this.activatedRoute.paramMap.subscribe((params) => {
      this.idProyecto = parseInt(params.get('id'))
      if (this.idProyecto != 0) {
        this.proyecto.idProyecto = this.idProyecto
        this.proyectoService.getProyectosById(this.proyecto).subscribe(
        (response)=> {
          this.frmIdProyecto = response.idProyecto
          this.frmCodigo  = response.codigo
          this.frmNombre  = response.nombre
          this.frmEnable  =  response.enable
          this.frmDireccion =  response.direccion
        },
        (err)=> {
          this.errores = err.error.errors as string[]
        })
      }
    })

    this.obtenerPeriodos()
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

  status = false
  menuToggle() {
    this.status = !this.status
  }

  regresar() {
    window.location.href = '/proyectos'
  }
  guardar() {

    const newProyecto = new Proyecto()
    console.log(newProyecto)

    newProyecto.idProyecto = this.frmIdProyecto
    newProyecto.codigo = this.frmCodigo
    newProyecto.nombre = this.frmNombre
    newProyecto.enable = this.frmEnable
    newProyecto.direccion = this.frmDireccion

    this.proyectoService.newProyecto(newProyecto).subscribe((_) => {
      window.location.href = '/proyectos'
    })
  }

/*****/
  frmMonto :number = 0
  fmrPeriodo : number


  agregarPeriodoMonto(){
    const newPeriodo = new PeriodoGerencia

    newPeriodo.periodo.idPeriodo = this.fmrPeriodo
    newPeriodo.meta = this.frmMonto
    console.log(newPeriodo)
    this.proyectoService.getPeriodoMontoPro(newPeriodo).subscribe((_) =>{
      return newPeriodo
      console.log(newPeriodo)
    })
  }

  fetchDataById() {
    const proyectToEdit = new Proyecto()
    proyectToEdit.idProyecto = this.frmIdProyecto

    for (const proy of hardCodeProyectos) {
      if (proy.idProyecto === proyectToEdit.idProyecto) {
        this.frmIdProyecto = proy.idProyecto
        this.frmCodigo = proy.codigo
        this.frmNombre = proy.nombre
        this.frmEnable = proy.enable
        this.frmDireccion = proy.direccion
        break
      }
    }
  }
  periodoGer : Periodo[]


  public obtenerPeriodos(){
    this.periodo.getTodoPeriodos().subscribe((response) =>{
      console.log(response)
      this.periodoGer = response
      console.info(this.periodo)
    })
  }

}
