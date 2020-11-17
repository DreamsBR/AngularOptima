import { Component, OnInit, ViewChild } from '@angular/core'
import { Proyecto } from './proyecto'
import { ProyectoService } from './proyectos.service'
// import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
// import { hardCode } from './data'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  status = false
  displayedColumns: string[] = ['nombre']
  proyectoLista = new MatTableDataSource<Proyecto>()

  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  pageSizeOptions: number[] = [5, 10, 25, 250]

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(
    private proyectoService: ProyectoService,
    // private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchData(0)
  }

  fetchData(pageIndex: number) {
    this.proyectoService.getProyectos(pageIndex).subscribe((proyectosJsonResponse) => {
      this.proyectoLista = new MatTableDataSource<Proyecto>(proyectosJsonResponse.content)
      this.pageIndex = proyectosJsonResponse.pageable.pageNumber
      this.totalData = proyectosJsonResponse.totalElements
    })
  }

  onPageChange(event: any) {
    this.fetchData(event.pageIndex)
  }

  menuToggle() {
    this.status = !this.status
  }
}
