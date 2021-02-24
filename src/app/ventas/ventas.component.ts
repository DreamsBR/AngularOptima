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
  pageSize: number = 15
  pageSizeOptions: number[] = [5, 10, 25, 250]

  dataBuscarProyecto = []
  kwBuscar = 'nombre'

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit() {
    this.obtenerProyectos(this.pageIndex)
    this.obtenerTodoProyectos()
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
  obtenerTodoProyectos(){
    this.proyectoService.obtenerProyectos().subscribe((data)=>{
      const listaProyectos = []
      data.forEach((elem:any) => {
        listaProyectos.push({
          idProyecto: elem.idProyecto,
          nombre: elem.nombre
        })
      })
      this.dataBuscarProyecto = listaProyectos
    })
  }
  proyectoSelec: any
  seleccionarItemBusquedaProyecto(event){
   
    this.proyectoSelec = event
    this.proyectoService.getProyectosById(this.proyectoSelec.idProyecto).subscribe((
      jsonProyecto) =>{
        console.log(jsonProyecto.proyecto)
        this.proyectoLista = new MatTableDataSource<Proyecto>([jsonProyecto.proyecto])
        this.pageIndex = 0
        this.totalData = 1
    })
  }
  Cancelar(){
    this.obtenerProyectos(this.pageIndex)
  }
}
