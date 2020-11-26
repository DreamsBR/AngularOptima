import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { parse } from 'querystring';
import swal from 'sweetalert2';
import { isNull } from 'util';
import { ClienteService } from '../clientes/clientes.service';
import { Colaborador } from '../colaboradores/colaborador';
import { ColaboradorService } from '../colaboradores/colaborador.service';
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component';
import { Gerencia } from '../gerencias/gerencia';
import { GerenciaService } from '../gerencias/gerencia.service';


@Component({
  selector: 'app-gerencia-nuevo-editar',
  templateUrl: './gerencia-nuevo-editar.component.html'
})
export class GerenciaNuevoEditarComponent implements OnInit {
  public colaboradorSelecionado:Colaborador = new Colaborador()
  public nrdoc: string
  paramIdProyecto : number
  public gerencia: Gerencia = new Gerencia()
  public errores: string[]

  frmenable :number = 0
  frmfechaIngreso:string
  fechaTermino : string
  frmidGerencia:number = 0
  frmidGerente:number = 0
  frmnombre : string = ''

  @ViewChild('dpFechaInicio', { static: true }) dpFechaInicio: DatepickerRoundedComponent

  @ViewChild('dpFechaFin', { static: true }) dpFechaFin: DatepickerRoundedComponent

  /*
    enable: number
  fechaIngreso:Date
  idGerencia:number
  idGerente:number
  nombre:string

  */

  constructor(
    private activatedRoute: ActivatedRoute,
    private gerenciaService: GerenciaService,
    private colaboradorserv:ColaboradorService,
    private router:Router

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
      if(!isNull(params.get('dni'))){
        console.info(params.get('dni'))
        this.nrdoc = params.get('dni')
        this.obatenerColaboradorPorDni(params.get('dni'))
      }
    })
    this.colaboradorSelecionado.idColaborador=0
    this.colaboradorSelecionado.nombres= ""
    this.colaboradorSelecionado.apellidos= ""
    this.colaboradorSelecionado.numeroDocumento= ""

  }
  onFechaIngresoCargo(newdate:string){
    this.frmfechaIngreso=newdate
  }
  onFechaFinCargo(newdate:string){
    this.fechaTermino = newdate
  }


  status = false;
  menuToggle() {
    this.status = !this.status;
  }


  public obatenerColaboradorPorDni(nrdoc: string) {
    this.colaboradorserv.obtenerColaboradorDni(nrdoc).subscribe((colaborador) => {
      if (Object.keys(colaborador).length > 0) {
        this.colaboradorSelecionado = colaborador[0]
        this.gerencia.idGerente = colaborador[0].idColaborador
        console.info(this.nrdoc)

      } else {
        this.colaboradorSelecionado.idColaborador = 0
        this.colaboradorSelecionado.nombres = ''
        this.colaboradorSelecionado.apellidos = ''
        this.colaboradorSelecionado.numeroDocumento = ''
        swal('consultar Colaborador', 'No se encontro el registro solicitado ', 'warning')

      }
    })
  }


  public agregarGerencia(): void{
    this.gerencia.fechaIngreso = this.frmfechaIngreso
    console.info(this.gerencia)
    this.gerenciaService.agregarGerencia(this.gerencia).subscribe(
      (response) => {
        swal('Nueva Gerencia', `Gerencia creado con exito`, 'success')
      },
        (err) => {
          this.errores = err.error.erros as string[];
        }
      )}



      siguientePagina(tabName: string){
        document.getElementById(tabName).click()
      }


}
