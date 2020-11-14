import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas-consulta-cliente-detalle',
  templateUrl: './ventas-consulta-cliente-detalle.component.html'
})
export class VentasConsultaClienteDetalleComponent implements OnInit {

  status: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  menuToggle(){
    this.status = !this.status;
  }
}
