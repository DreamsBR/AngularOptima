import { Component, OnInit, Input } from '@angular/core';
import { Ventasproyecto } from './../ventas-proyecto/Ventasproyecto';
import { VentasproyectoService } from './../ventas-proyecto/ventasproyecto.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { Proyecto } from '../proyectos/proyecto';

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
  sortDesde: string = ''
  sortHasta: string = ''
  paginador:any;
  base:string;

  constructor(
    private ventasproyectoService: VentasproyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerColaborador();
    /*
    this.activatedRoute.paramMap.subscribe(() => {

      this.ventasproyectoService.getVentasProyectos(page).subscribe(
        clientesJsonResponse => {
          this.ventasProyectoLista = clientesJsonResponse;
        }
      );

    });*/
  }

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
  }



  menuToggle(){
    this.status = !this.status;
  }

}
