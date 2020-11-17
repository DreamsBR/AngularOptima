import { Component, OnInit, ViewChild } from '@angular/core'
import { Proyecto } from './proyecto'
import { ProyectoService } from './proyectos.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { hardCode } from './data'
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
  proyectoLista = new MatTableDataSource<Proyecto>(hardCode)

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.proyectoLista.paginator = this.paginator

    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number = +params.get('page')
      if (!page) {
        page = 0
      }
      this.proyectoService.getProyectos(0).subscribe((proyectosJsonResponse) => {
        this.proyectoLista = new MatTableDataSource<Proyecto>(proyectosJsonResponse.content)
        this.proyectoLista.paginator = this.paginator
        //this.base = 'cliente'
      })
    })
  }

  menuToggle() {
    this.status = !this.status
  }
}
