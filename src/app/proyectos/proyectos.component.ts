import { Component, OnInit, ViewChild } from '@angular/core'
import { Proyecto } from './proyecto'
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

  ngOnInit() {
    this.proyectoLista.paginator = this.paginator
  }

  menuToggle() {
    this.status = !this.status
  }
}
