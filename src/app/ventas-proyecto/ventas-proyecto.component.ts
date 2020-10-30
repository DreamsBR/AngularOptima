import { Component, OnInit } from '@angular/core';
import { Ventasproyecto } from './Ventasproyecto';
import { VentasproyectoService } from './ventasproyecto.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas-proyecto',
  templateUrl: './ventas-proyecto.component.html'
})
export class VentasProyectoComponent implements OnInit {

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
