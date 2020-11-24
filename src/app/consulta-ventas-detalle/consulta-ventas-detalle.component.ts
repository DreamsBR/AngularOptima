import { Component, OnInit, Input } from '@angular/core';
import { Ventasproyecto } from './../ventas-proyecto/Ventasproyecto';
import { VentasproyectoService } from './../ventas-proyecto/ventasproyecto.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { Proyecto } from '../proyectos/proyecto';
import { VentaConsultaClienteDetalleService } from './../ventas-consulta-cliente-detalle/ventas-consulta-cliente-detalle.service';
import { forkJoin, Observable } from 'rxjs';
import { estadoventa } from '../consulta-ventas/estadoventa';
import { statusVentaservice } from '../consulta-ventas/statusventa.service';
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
  tipoestado : estadoventa[]
  constructor(
    private estadoventa : statusVentaservice,
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
    this.obtenerEstadoVentas()

  }


  public obtenerEstadoVentas(){
    this.estadoventa.getEstadoVenta().subscribe((response)=> {
      this.tipoestado = response
      console.info(this.estadoventa)
    })
  }


  menuToggle(){
    this.status = !this.status;
  }


 }

