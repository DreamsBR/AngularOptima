import { Component, OnInit, ViewChild } from '@angular/core'
import { Proyecto } from './../proyectos/proyecto'
import { ProyectoService } from './../proyectos/proyectos.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})

export class VentasComponent implements OnInit {
  proyectoLista = new MatTableDataSource<Proyecto>()
  displayedColumns: string[] = ['nombre']
  idProyectoSelected: number = 0

  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  pageSizeOptions: number[] = [5, 10, 25, 250]

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit() {
    this.obtenerProyectos(this.pageIndex)
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

  selectItemProyecto(idProyecto) {
    this.idProyectoSelected = idProyecto
  }

  status: boolean = false
  menuToggle() {
    this.status = !this.status
  }
}
