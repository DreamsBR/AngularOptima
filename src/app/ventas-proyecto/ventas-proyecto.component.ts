import { Component, OnInit } from '@angular/core';
import { Ventasproyecto } from './Ventasproyecto';
import { VentasproyectoService } from './ventasproyecto.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas-proyecto',
  templateUrl: './ventas-proyecto.component.html'
})
export class VentasProyectoComponent implements OnInit {

  status: boolean = false;
  ventasProyectoLista: Ventasproyecto[];
  idProyectoSeleted:number = 0;

  paramIdProyecto: number

  constructor(
    private ventasproyectoService: VentasproyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
    })

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



  selectItemProyecto(idProyecto) {
    this.idProyectoSeleted = idProyecto
  }

}
