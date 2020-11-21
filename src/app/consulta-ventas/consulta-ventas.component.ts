import { Component, OnInit, ViewChild } from '@angular/core'
import { Proyecto } from './../ventas/proyecto'
import { ProyectoService } from './../proyectos/proyectos.service';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-consulta-ventas',
  templateUrl: './consulta-ventas.component.html'
})
export class ConsultaVentasComponent implements OnInit {

  proyectoLista = new MatTableDataSource<Proyecto>()
  displayedColumns: string[] = ['nombre']
  idProyectoSelected: number = 0

  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  pageSizeOptions: number[] = [5, 10, 25, 250]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator


  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.obtenerProyectos(this.pageIndex);
  }

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
  menuToggle() {
    this.status = !this.status
  }
}
