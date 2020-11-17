import { Component, OnInit } from '@angular/core';
import { Periodo } from './periodo';
import { PeriodoService } from './periodo.service';
import { ActivatedRoute } from '@angular/router';
//import { ModalService } from './detalles/modal.service';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html'
})
export class PeriodosComponent implements OnInit {

  periodosLista: Periodo[];
  paginador: any;
  periodoSeleccionado: Periodo;
  urlBackend: String = URL_BACKEND;
  base: String;

  constructor(
    private periodoService: PeriodoService,
    private activatedRoute: ActivatedRoute,
    //public modalService: ModalService,
    public authService: AuthService
  ) {

  }
  //constructor() { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if (!page) {
        page = 0;
      }

      this.periodoService.getPeriodos(page).subscribe(
        periodosJsonResponse => {
          this.periodosLista = periodosJsonResponse.content;
          this.paginador = periodosJsonResponse;
          this.base = "periodo";
        }
      );
    });// end subscribe
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
