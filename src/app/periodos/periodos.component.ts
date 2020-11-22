import { Component, OnInit } from '@angular/core'
import { NgbDateStruct, NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap'
import { Periodo } from './periodo'
import { PeriodoService } from './periodo.service'
import { ActivatedRoute, Router } from '@angular/router'
//import { ModalService } from './detalles/modal.service';
import { AuthService } from '../usuarios/auth.service'
import { URL_BACKEND } from '../config/config'
import swal from 'sweetalert2'

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html'
})
export class PeriodosComponent implements OnInit {
<<<<<<< HEAD

  periodosLista: Periodo[];
  paginador: any;
  periodoSeleccionado: Periodo;
  urlBackend: String = URL_BACKEND;
  base: String;

  public errores: string[];

  totalRecords:number;

  pageActual:number = 1;
  public periodo: Periodo = new Periodo();
  model: NgbDateStruct;
  date: {year: number, month: number};
=======
  periodosLista: Periodo[]
  paginador: any
  periodoSeleccionado: Periodo
  urlBackend: String = URL_BACKEND
  base: String
  totalRecords: number
  public errores: string[]
  pageActual: number = 1
  public periodo: Periodo = new Periodo()
  model: NgbDateStruct
  date: { year: number; month: number }
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73


  constructor(
    private periodoService: PeriodoService,
    private activatedRoute: ActivatedRoute,
    //public modalService: ModalService,
<<<<<<< HEAD
    public authService: AuthService,
    private router: Router
  ) { }
=======
    public authService: AuthService
  ) {}
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73

  ngOnInit() {
    this.obtenerPeriodo()
  }

  public obtenerPeriodo() {

    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number = +params.get('page')
      if (!page) {
        page = 0
      }

<<<<<<< HEAD
      this.periodoService.getPeriodos(page).subscribe(
        periodosJsonResponse => {
          this.periodosLista = periodosJsonResponse.content;
          this.paginador = periodosJsonResponse;
          this.base = "periodo";

        }
      );
    });

=======
      this.periodoService.getPeriodos(page).subscribe((periodosJsonResponse) => {
        this.periodosLista = periodosJsonResponse.content
        this.paginador = periodosJsonResponse
        this.base = 'periodo'
      })
    }) // end subscribe
<<<<<<< HEAD
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73
=======

>>>>>>> 2ef74529641582e9530113ebfaa5d88f828667e7
  }


  public agregarPeriodo(): void {

    if(Object.keys(this.periodo).length < 3){
      swal('Campos Incompletos de Periodo', '','error')
      return
    }

    let fechaInicioT: any = this.periodo.fechaInicio
    let fechaFinT: any = this.periodo.fechaFin

    this.periodo.fechaInicio = fechaInicioT.year + '-' + fechaInicioT.month + '-' + fechaInicioT.day
    this.periodo.fechaFin = fechaFinT.year + '-' + fechaFinT.month + '-' + fechaFinT.day
    this.periodoService.agregarPeriodo(this.periodo).subscribe(
      (response) => {
        document.getElementById('cerrarModalEliminar').click()
        swal('Nuevo Periodo', `Periodo ${response.nombre} creado con exito`, 'success')
        this.obtenerPeriodo()
      },
      (err) => {
        console.error(err)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerPeriodo()
      })

    }




<<<<<<< HEAD





  status = false;
=======
  status = false
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73
  menuToggle() {
    this.status = !this.status
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
