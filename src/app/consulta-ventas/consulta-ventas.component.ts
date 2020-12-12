import { Component, OnInit } from '@angular/core'
import { Proyecto } from './../proyectos/proyecto'
import { ProyectoService } from './../proyectos/proyectos.service';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-consulta-ventas',
  templateUrl: './consulta-ventas.component.html'
})

export class ConsultaVentasComponent implements OnInit {
  proyectoLista = new MatTableDataSource<Proyecto>()

  public paginador:any
  base: string
  nombreProyecto: string
  pageActual: number = 1
  idProyectoSelected:number = 0
  displayedColumns: string[] = ['nombre']



  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 15
  pageSizeOptions: number[] = [5, 10, 25, 250]


  fechaDesde: string
  fechaHasta: string

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {


    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    this.fechaDesde = year + '-' + month + '-' + day
    this.fechaHasta = year + '-' + month + '-' + day


    this.obtenerProyecto();


  }

  selectItemProyecto(idProyecto) {
    this.idProyectoSelected = idProyecto
  }


  obtenerProyectos(pageIndex: number) {
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
