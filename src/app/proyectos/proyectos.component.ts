import { Component, OnInit, ViewChild } from '@angular/core'
import { Proyecto } from './proyecto'
import { ProyectoService } from './proyectos.service'
import { Router } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import swal from 'sweetalert2'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  status = false
  displayedColumns: string[] = ['nombre']
  proyectoLista = new MatTableDataSource<Proyecto>()
  proyectoSeleccionado:Proyecto
  idProyectoSelected: number = 0

  totalData: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  pageSizeOptions: number[] = [5, 10, 25, 250]

  proyectoToDelete:Proyecto = new Proyecto()

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchData(this.pageIndex)
  }

  fetchData(pageIndex: number) {
    this.proyectoService.getProyectos(pageIndex).subscribe((proyectosJsonResponse) => {
      this.proyectoLista = new MatTableDataSource<Proyecto>(proyectosJsonResponse.content)
      this.pageIndex = proyectosJsonResponse.pageable.pageNumber
      this.totalData = proyectosJsonResponse.totalElements
    })
  }

  onPageChange(event: any) {
    this.idProyectoSelected = 0
    this.fetchData(event.pageIndex)
  }

  menuToggle() {
    this.status = !this.status
  }

  selectItemProyecto(idProyecto) {
    this.idProyectoSelected = idProyecto
  }

  verInmuebles() {
    if (this.idProyectoSelected === 0) {
      swal('Seleccione un proyecto', '', 'warning')
    } else {
      this.router.navigate(['/inmuebles/' + this.idProyectoSelected])
    }
  }

  public obtenerProyectoSeleccionado(proyecto:Proyecto){

    this.proyectoSeleccionado = proyecto
  }

  selectProyectoEliminar(proyecto: Proyecto) {
    this.proyectoToDelete = new Proyecto()
    this.proyectoToDelete = proyecto
  }

  eliminarProyectoSeleccionado () {
    this.proyectoService.deleteProyecto(this.proyectoToDelete).subscribe(
      (_) => {
        document.getElementById('cerrarModalEliminar').click()
        this.fetchData(0)
      }
    )
  }

}