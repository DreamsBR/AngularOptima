import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-periodos-proyectos',
  templateUrl: './periodos-proyectos.component.html',
  styleUrls: ['./periodos-proyectos.component.css']
})
export class PeriodosProyectosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.searchPeriodoByName()
  }

  searchPeriodoByName() {
    console.log('buscando...')
  }
}
