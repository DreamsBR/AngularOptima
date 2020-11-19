import { Component, OnInit } from '@angular/core'
import { Proyecto } from './../ventas/proyecto'
import { ProyectoService } from './../proyectos/proyectos.service';
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
  paginador:any
  base: string

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerProyecto();
  }

public obtenerProyecto(){
  this.activatedRoute.paramMap.subscribe((params) => {
    let page: number = +params.get('page')
    if (!page) {
      page = 0
    }
    this.proyectoService.getProyectos(page).subscribe((
      proyectosJsonResponse) => {
      this.proyectoLista = proyectosJsonResponse.content;
      this.paginador=proyectosJsonResponse
      this.base = 'proyecto';
    })
  })

}




  menuToggle() {
    this.status = !this.status
  }
}
