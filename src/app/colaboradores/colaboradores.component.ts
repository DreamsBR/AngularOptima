import { Component, OnInit } from '@angular/core';
import { Colaborador } from './colaborador';
import { ColaboradorService } from './colaborador.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { URL_BACKEND } from '../config/config';
import swal from 'sweetalert2';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html'
})

export class ColaboradoresComponent implements OnInit {


  colaboradoresLista: Colaborador[];
  paginador: any;
  colaboradorSeleccionado: Colaborador;
  urlBackend: String = URL_BACKEND;
  base: string;

  constructor(
    private colaboradorService: ColaboradorService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerColaborador()
  }

  dni:string
  filtrar(){
    this.colaboradorService.obtenerColaboradorFiltro(this.dni).subscribe((
      jsonColaborador) => {
        console.log(jsonColaborador)
        this.colaboradoresLista = jsonColaborador

      })

  }

  Cancelar(){
    this.dni = ''
    this.obtenerColaborador()

  }


  obtenerColaborador(){
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number =+params.get('page');
      if (!page) {
        page = 0;
      }
      this.colaboradorService.getColaboradores(page).
      subscribe(
        (colaboradorJsonResponse) => {
          this.colaboradoresLista = colaboradorJsonResponse.content;
          this.paginador = colaboradorJsonResponse;
          this.base='colaborador'
        })
    })
  }

  public eliminar(colaborador: Colaborador): void {
    this.colaboradorService.eliminarColaborador(colaborador.idColaborador).subscribe(
      (response) => {
        console.info(response)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerColaborador()
      },
      (err) => {
        console.error(err)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerColaborador()
      }
    )
  }

  public obtenerColaboradorSeleccionado(colaborador: Colaborador) {
    this.colaboradorSeleccionado = colaborador
  }

  status: boolean = false;
  menuToggle(){
    this.status = !this.status;
  }

}
