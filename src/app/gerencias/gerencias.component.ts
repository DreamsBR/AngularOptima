import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Colaborador } from '../colaboradores/colaborador';
import { ColaboradorService } from '../colaboradores/colaborador.service';

@Component({
  selector: 'app-gerencias',
  templateUrl: './gerencias.component.html'
})
export class GerenciasComponent implements OnInit {
  public colaboradorSelecionado:Colaborador = new Colaborador()

  public nrdoc: string

  constructor(
    private colaboradorserv:ColaboradorService
  ) { }

  ngOnInit() {
    this.colaboradorSelecionado.idColaborador=0
    this.colaboradorSelecionado.nombres= ''
    this.colaboradorSelecionado.apellidos= ''
    this.colaboradorSelecionado.numeroDocumento= ''
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }





}
