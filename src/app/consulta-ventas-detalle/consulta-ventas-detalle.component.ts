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


  constructor(
    private ventasproyectoService: VentasproyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.obtenerVentas();
  }
  obtenerVentas(){
    this.activatedRoute.paramMap.subscribe(() => {
      this.ventasproyectoService.getVentasProyectos().subscribe(
        clientesJsonResponse => {
          this.ventasProyectoLista = clientesJsonResponse;
        }
      );

    });

  }



  menuToggle(){
    this.status = !this.status;
  }


 }

