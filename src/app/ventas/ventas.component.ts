import { Component, OnInit } from '@angular/core';
//import { Proyecto } from './proyecto';
//import { ProyectoService } from './proyectos.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html'
})
export class VentasComponent implements OnInit {

  status: boolean = false;
  //proyectoLista: Proyecto[];

  constructor(
    //private proyectoService: ProyectoService,
    //private activatedRoute: ActivatedRoute,
    //public authService: AuthService,
    //private router: Router
  ) { }

  ngOnInit() {
    /*this.activatedRoute.paramMap.subscribe(() => {

      this.proyectoService.getProyectos().subscribe(
        clientesJsonResponse => {
          this.proyectoLista = clientesJsonResponse;
        }
      );

    });*/
  }

  menuToggle(){
    this.status = !this.status;
  }

}