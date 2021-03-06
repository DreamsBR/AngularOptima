import { PeriodoProyecto } from "./../proyectos/periodoproyecto";
import { Component, OnInit, ɵConsole } from '@angular/core'
import { Proyecto } from '../proyectos/proyecto'
import { ProyectoService } from '../proyectos/proyectos.service'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { hardCodeProyectos } from '../proyectos/hardCodeProyectos'
import { Observable } from 'rxjs'
import { PeriodoService } from '../periodos/periodo.service'
import { Periodo } from '../periodos/periodo'

import { PeriodoGerencia } from './../periodo-gerencia/periodogerencia'

import { PeridoProyectoService } from "./periodoProyecto.service";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Gerencia } from '../gerencias/gerencia';
import swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto-nuevo-editar',
  templateUrl: './proyecto-nuevo-editar.component.html'
})

export class ProyectoNuevoEditarComponent implements OnInit {

  editMode: boolean = true
  public errores:string[]
  public proyecto = new Proyecto()
  public perioProyecto = new PeriodoProyecto()
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
    private router: Router,
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
          //this.agregarPeriodoProyecto()
          this.agregarPeriodoExistentes()


          console.info()
        },
        (err)=> {
          this.errores = err.error.errors as string[]
        })
      }else{
          this.proyecto.idProyecto = 0
      }
    })

    this.obtenerTodosLosPeriodos()
  }





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
  }


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

  guardarProyecto() {

    if(this.frmCodigo == '' || this.frmCodigo == null){
      swal('Ingrese el Codigo del Proyecto', '', 'warning')
      return
    }
    if(this.frmNombrepro == '' || this.frmNombrepro == null){
      swal('Ingrese el nombre de la Proyecto', '', 'warning')
      return
    }
    if(this.frmDireccion == '' || this.frmDireccion == null){
      swal('Ingrese la direccion del Proyecto', '', 'warning')
      return
    }
    // if(this.aryPeriodos.length == 0 ){
    //   swal('Ingrese la periodo del Proyecto', '', 'warning')
    //   return
    // }
    const newProyecto = new Proyecto()
    const newPerProyecto = new PeriodoProyecto()

    newProyecto.idProyecto = this.idProyecto
    newProyecto.codigo = this.frmCodigo
    newProyecto.nombre = this.frmNombrepro
    newProyecto.enable = this.frmEnable
    newProyecto.direccion = this.frmDireccion

    console.info(this.proyecto.idProyecto)

    if(this.idProyecto == 0) {
      this.proyectoService.newProyecto(newProyecto).subscribe(
        (response) => {
          this.guardarPeriodoProyecto(response.idProyecto)
        },
        (err)=>{
          this.errores = err.error.errors as string[]
        }
      )

    }else{
      this.proyectoService.editarProyecto(newProyecto, this.idProyecto).subscribe(
        (response) => {
          this.guardarPeriodoProyecto(response.idProyecto)
        },
        (err)=> {
          this.errores = err.error.errros as string[]
        }
      )
    }
    this.router.navigate(['/proyectos/'])
    swal('Gerencia registrada', ``, 'success')

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
    meta.idPeriodoProyecto = 0
    meta.idPeriodo = this.periodoSeleccionado.idPeriodo
    meta.nombre = this.periodoSeleccionado.nombre
    meta.monto = this.metaSeleccionada

    this.aryPeriodos.push(meta)
    console.info(this.aryPeriodos)
  }


  eliminarMeta(i: number){
    this.periodosEliminados.push(this.aryPeriodos[i].idPeriodoProyecto)
    this.aryPeriodos.splice(i, 1)
    console.info(this.aryPeriodos)
  }

  fechaTermino:string

  onFechaFinCargo(newdate:string){
    this.fechaTermino = newdate
  }



  periodosEliminados = []



  guardarPeriodoProyecto(idProyecto: number){
    if(this.idProyecto == 0){
    for (var i = 0; i < this.aryPeriodos.length; i++) {
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
        }
      )
    }
    }else {
      console.info(this.aryPeriodos)
      if(this.periodosEliminados.length >  0 ){
        for (var i = 0; i < this.periodosEliminados.length; i++) {
          this.periodoProyectoSerive.eliminarPeriodoProyecto(this.periodosEliminados[i]).subscribe(
            (response) => {},
            (err) => {
              this.errores=err.error.errors as string[]
            })
        }}

        for (var i  = 0; i < this.aryPeriodos.length; i++) {
          var periodop = new PeriodoProyecto()
          periodop.enable = 1
          periodop.idProyecto = idProyecto
          periodop.idPeriodo = this.aryPeriodos[i].idPeriodo
          periodop.meta = this.aryPeriodos[i].monto
          console.info(periodop)

          if (this.aryPeriodos[i].idPeriodoProyecto== 0){
            periodop.idPeriodoProyecto = 0
            this.periodoProyectoSerive.agregarPeriodoProyecto(periodop).subscribe(
              (response) => {
                console.info(response)
              },
              (err) => {
                this.errores=err.error.errors as string []
              }
            )
          }else{
            this.periodoProyectoSerive.editarPeriodoProyecto(periodop , this.aryPeriodos[i].idPeriodoProyecto).subscribe(
              (response) => {
                console.info(response)
              },
              (err) => {
                this.errores  = err.error.errors as string []
              }
            )
          }
          }
        }
      }



      agregarPeriodoExistentes(){
        this.periodoProyectoSerive
        .getPeriodoByIdProyecto(this.idProyecto)
        .subscribe((response)=> {
          for( let x = 0; x <  response.length ; x++){
            let meta: {[k : string]: any} = {};
            meta.idPeriodoProyecto = response[x].idPeriodoProyecto
            meta.idPeriodo = response[x].periodo.idPeriodo
            meta.nombre = response[x].periodo.nombre
            meta.monto = response[x].meta
            this.aryPeriodos.push(meta)
          }
        })
      }


  }








