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
  public colaborador: Colaborador = new Colaborador();
  public errores: string[];
  status: boolean = false;
  colaboradoresLista: Colaborador[];
  paginador: any;
  colaboradorSeleccionado: Colaborador;
  urlBackend: String = URL_BACKEND;
  base: String;
  
  constructor(
    private colaboradorService: ColaboradorService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if (!page) {
        page = 0;
      }
      this.colaboradorService.getColaboradores(page).subscribe(
        clientesJsonResponse => {
          this.colaboradoresLista = clientesJsonResponse.content;
          this.paginador = clientesJsonResponse;
        }
      );
    });
  }

  menuToggle(){
    this.status = !this.status;
  }
  
  public agregarColaborador(): void {

    this.colaboradorService.agregarColaborador(this.colaborador)
      .subscribe(response => {
        this.router.navigate(['/colaborador'])
        swal('Nuevo colaborador', `colaborador ${response.colaborador.nombres} creado con exito`, 'success')

      },
        err => {
          this.errores = err.error.errors as string[];
        }
      );
  }




}