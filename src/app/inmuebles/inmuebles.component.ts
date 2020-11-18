import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core'
import { Inmueble } from './inmueble'
import { InmuebleService } from './inmueble.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {
  status = false
  displayedColumns: string[] = [
    'editar',
    'idTipoInmuebleCategoria',
    'numero',
    'areaTechada',
    'areaLibre',
    'areaTotal',
    'idTipoVista',
    'cantidadDormitorio'
  ]
  inmuebleLista = new MatTableDataSource<Inmueble>()

  idProyecto: number = 0

  //totalData: number = 0
  //pageIndex: number = 0
  //pageSize: number = 5
  //pageSizeOptions: number[] = [5, 10, 25, 250]

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(
    private inmuebleService: InmuebleService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const paramIdProyecto: number = parseInt(params.get('idProyecto'))
      if (paramIdProyecto > 0) {
        this.idProyecto = paramIdProyecto
        this.fetchDataByIdProyecto(this.idProyecto)
      }
    })
  }

  fetchDataByIdProyecto(idProyecto: number) {
    this.inmuebleService.getInmueblesByIdProyecto(idProyecto).subscribe((inmueblesJsonResponse) => {
      this.inmuebleLista = new MatTableDataSource<Inmueble>(inmueblesJsonResponse)
      //this.pageIndex = inmueblesJsonResponse.pageable.pageNumber
      //this.totalData = inmueblesJsonResponse.totalElements
    })
  }

  menuToggle() {
    this.status = !this.status
  }

  regresar() {
    window.location.href = '/proyectos'
  }

  goToAgregar() {
    window.location.href = '/inmueble-nuevo-editar/0?idProyecto=' + this.idProyecto
  }
}
