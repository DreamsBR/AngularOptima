import { Component, OnInit, Input } from '@angular/core';
import { Ventasproyecto } from './../ventas-proyecto/Ventasproyecto';
import { VentasproyectoService } from './../ventas-proyecto/ventasproyecto.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { Proyecto } from '../proyectos/proyecto';
<<<<<<< HEAD

=======
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73

@Component({
  selector: 'app-consulta-ventas-detalle',
  templateUrl: './consulta-ventas-detalle.component.html'
})
export class ConsultaVentasDetalleComponent implements OnInit {

  @Input()
  nombreProyecto:string

  proyectoLista: Proyecto[]
  status: boolean = false;
  ventasProyectoLista: Ventasproyecto[];
<<<<<<< HEAD
  proyectoLista:Proyecto[];
=======
  sortDesde: string = ''
  sortHasta: string = ''
<<<<<<< HEAD

>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73
=======
  paginador:any;
  base:string;
>>>>>>> 2ef74529641582e9530113ebfaa5d88f828667e7

  constructor(
    private ventasproyectoService: VentasproyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
<<<<<<< HEAD
    this.obtenerVentas();
  }
  obtenerVentas(){
=======
    //this.obtenerColaborador();

>>>>>>> 2ef74529641582e9530113ebfaa5d88f828667e7
    this.activatedRoute.paramMap.subscribe(() => {

      this.ventasproyectoService.getVentasProyectos().subscribe(
        clientesJsonResponse => {
          this.ventasProyectoLista = clientesJsonResponse;
        }
      );

    });

  }
/*
  obtenerColaborador(){
    this.activatedRoute.paramMap.subscribe(params => {
      let page:number =+params.get('page');
      if(!page){
        page = 0
      }
      this.ventasproyectoService.getVentasProyectos(page).
      subscribe((proyectoJsonReponse)=>{
        this.proyectoLista=proyectoJsonReponse.content;
        this.paginador = proyectoJsonReponse;
        this.base = 'proyecto';
      })
    })
  }*/


<<<<<<< HEAD
=======

>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73
  menuToggle(){
    this.status = !this.status;
  }


 }

