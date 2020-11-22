<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core'
import { Proyecto } from './../ventas/proyecto'
import { ProyectoService } from './../proyectos/proyectos.service';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { MatPaginator, MatTableDataSource } from '@angular/material';

=======
import { Component, OnInit } from '@angular/core'
import { Proyecto } from './../proyectos/proyecto'
import { ProyectoService } from './../proyectos/proyectos.service';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73

@Component({
  selector: 'app-consulta-ventas',
  templateUrl: './consulta-ventas.component.html'
})

export class ConsultaVentasComponent implements OnInit {
<<<<<<< HEAD

  proyectoLista = new MatTableDataSource<Proyecto>()
  displayedColumns: string[] = ['nombre']
  idProyectoSelected: number = 0

  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  pageSizeOptions: number[] = [5, 10, 25, 250]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

=======
  proyectoLista: Proyecto[]
  public paginador:any
  base: string
  nombreProyecto: string
  pageActual: number = 1
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
<<<<<<< HEAD
    public authService: AuthService,
    public router: Router
=======
    public authService: AuthService
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73
  ) {}

  ngOnInit() {
    this.obtenerProyectos(this.pageIndex);
  }

<<<<<<< HEAD
obtenerProyectos(pageIndex:number){

  this.proyectoService.getProyectos(pageIndex).subscribe((proyectosJsonResponse) => {
    this.proyectoLista = new MatTableDataSource<Proyecto>(proyectosJsonResponse.content)
    this.pageIndex = proyectosJsonResponse.pageable.pageNumber
    this.totalData = proyectosJsonResponse.totalElements
  })

}

onPageChange(event: any) {
  this.idProyectoSelected = 0
  this.obtenerProyectos(event.pageIndex)
}


selectItemProyecto(idProyecto) {
  this.idProyectoSelected = idProyecto
}

status: boolean=false
=======
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
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73
  menuToggle() {
    this.status = !this.status
  }

}
