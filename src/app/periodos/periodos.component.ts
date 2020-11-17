import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Periodo } from './periodo';
import { PeriodoService } from './periodo.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { ModalService } from './detalles/modal.service';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';
import swal from 'sweetalert2';

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
  
  public errores: string[];
  private router: Router;
  public periodo: Periodo = new Periodo();
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(
    private periodoService: PeriodoService,
    private activatedRoute: ActivatedRoute,
    //public modalService: ModalService,
    public authService: AuthService
  ) { }

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
  
  public agregarPeriodo(): void {
    


    let fechaInicioT:any = this.periodo.fechaInicio;
    let fechaFinT:any = this.periodo.fechaFin;

    this.periodo.fechaInicio=fechaInicioT.year+'-'+fechaInicioT.month+'-'+fechaInicioT.day;
    this.periodo.fechaFin=fechaFinT.year+'-'+fechaFinT.month+'-'+fechaFinT.day;


    this.periodoService.agregarPeriodo(this.periodo)
      .subscribe(response => {
        this.router.navigate(['/periodo'])
        swal('Nuevo Periodo', `Periodo ${response.periodo.nombre} creado con exito`, 'success')
        
      },
        err => {
          this.errores = err.error.errors as string[];
        }
      );
      
  }








  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}


/*public agregarCliente(): void {

    this.clienteService.agregarCliente(this.cliente)
      .subscribe(response => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `Cliente ${response.cliente.nombre} creado con exito`, 'success')

      },
        err => {
          this.errores = err.error.errors as string[];
        }
      );
  }*/