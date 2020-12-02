import { Component, OnInit } from '@angular/core'
import { Proyecto } from './../proyectos/proyecto'
import { ProyectoService } from './../proyectos/proyectos.service';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'

@Component({
  selector: 'app-consulta-ventas',
  templateUrl: './consulta-ventas.component.html'
})

export class ConsultaVentasComponent implements OnInit {
  proyectoLista: Proyecto[]
  public paginador:any
  base: string
  nombreProyecto: string
  pageActual: number = 1
  idProyectoSelected:string= ""

  fechaDesde: string
  fechaHasta: string

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
<<<<<<< HEAD
=======
    
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    this.fechaDesde = year + '-' + month + '-' + day
    this.fechaHasta = year + '-' + month + '-' + day

>>>>>>> 194e5e7b139518794d7cd72457455628332389e2
    this.obtenerProyecto();
  }

  public obtenerProyecto(){
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number =+ params.get('page')
      if (!page) {
        page = 0
      }
      this.proyectoService.getProyectos(page).subscribe((
        proyectosJsonResponse) => {
        this.proyectoLista = proyectosJsonResponse.content;
        this.paginador = proyectosJsonResponse
        this.base = 'consulta-ventas'
      })
    })
  }

  status: boolean = false
  menuToggle() {
    this.status = !this.status
  }

}
