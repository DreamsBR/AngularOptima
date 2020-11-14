import { Component, OnInit } from '@angular/core';
import { Ventasproyecto } from './../ventas-proyecto/Ventasproyecto';
import { VentasproyectoService } from './../ventas-proyecto/ventasproyecto.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-ventas-detalle',
  templateUrl: './consulta-ventas-detalle.component.html'
})
export class ConsultaVentasDetalleComponent implements OnInit {

  status: boolean = false;
  ventasProyectoLista: Ventasproyecto[];

  constructor(
    private ventasproyectoService: VentasproyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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
