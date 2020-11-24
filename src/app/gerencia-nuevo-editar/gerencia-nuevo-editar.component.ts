import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Colaborador } from '../colaboradores/colaborador';
import { ColaboradorService } from '../colaboradores/colaborador.service';

@Component({
  selector: 'app-gerencia-nuevo-editar',
  templateUrl: './gerencia-nuevo-editar.component.html'
})
export class GerenciaNuevoEditarComponent implements OnInit {
  public colaboradorSelecionado:Colaborador = new Colaborador()

  public nrdoc: string

  constructor(
    private colaboradorserv:ColaboradorService

  ) { }

  ngOnInit() {
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }
  public obtenerClienteSeleccionado(nrdoc: string) {
    this.colaboradorserv.obtenerColaboradorDni(nrdoc).subscribe((colaborador) => {
      if (Object.keys(colaborador).length > 0) {
        this.colaboradorSelecionado = colaborador[0]
      } else {
        this.colaboradorSelecionado.idColaborador = 0
        this.colaboradorSelecionado.nombres = ''
        this.colaboradorSelecionado.apellidos = ''
        this.colaboradorSelecionado.numeroDocumento = ''
        swal('consultar Colaborador', 'No se encontro el registro solicitado ', 'warning')
      }
    })
  }





}
