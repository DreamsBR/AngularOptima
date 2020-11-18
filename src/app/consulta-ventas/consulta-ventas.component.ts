import { Component, OnInit } from '@angular/core'
import { Proyecto } from './../ventas/proyecto'
import { ProyectoService2 } from './../ventas/proyectos.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-consulta-ventas',
  templateUrl: './consulta-ventas.component.html'
})
export class ConsultaVentasComponent implements OnInit {
  status: boolean = false
  proyectoLista: Proyecto[]

  constructor(
    private proyectoService: ProyectoService2,
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
