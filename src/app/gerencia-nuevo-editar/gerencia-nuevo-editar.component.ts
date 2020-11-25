import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { parse } from 'querystring';
import swal from 'sweetalert2';
import { isNull } from 'util';
import { ClienteService } from '../clientes/clientes.service';
import { Colaborador } from '../colaboradores/colaborador';
import { ColaboradorService } from '../colaboradores/colaborador.service';


@Component({
  selector: 'app-gerencia-nuevo-editar',
  templateUrl: './gerencia-nuevo-editar.component.html'
})
export class GerenciaNuevoEditarComponent implements OnInit {
  public colaboradorSelecionado:Colaborador = new Colaborador()
  public nrdoc: string
  paramIdProyecto : number


  constructor(
    private activatedRoute: ActivatedRoute,

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

  status = false;
  menuToggle() {
    this.status = !this.status;
  }


  public obatenerColaboradorPorDni(nrdoc: string) {
    console.log(this.nrdoc)
    this.colaboradorserv.obtenerColaboradorDni(nrdoc).subscribe((colaborador) => {
      if (Object.keys(colaborador).length > 0) {
        this.colaboradorSelecionado = colaborador[0]
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


  agregarColaborador(nrdoc: string){
    console.info(nrdoc);
    if(nrdoc == '' || nrdoc == undefined){
      swal('No hizo una busqueda de cliente', '', 'warning')
      return
    }

    this.router.navigate(['/gerencia-nuevo-editar/0/' + nrdoc + '/' + this.paramIdProyecto])
  }





}
