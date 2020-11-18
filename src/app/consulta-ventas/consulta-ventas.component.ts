import { Component, OnInit } from '@angular/core'
import { Proyecto } from './../ventas/proyecto'
import { ProyectoService } from './../ventas/proyectos.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Component({
  selector: 'app-consulta-ventas',
  templateUrl: './consulta-ventas.component.html'
})
export class ConsultaVentasComponent implements OnInit {
  status: boolean = false
  proyectoLista: Proyecto[]


  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      this.proyectoService.getProyectos().subscribe((clientesJsonResponse) => {
        this.proyectoLista = clientesJsonResponse
      })
    })
  }

  menuToggle() {
    this.status = !this.status
  }
}
