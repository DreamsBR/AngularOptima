import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-proyecto-nuevo-editar',
  templateUrl: './proyecto-nuevo-editar.component.html'
})
export class ProyectoNuevoEditarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  status = false
  menuToggle() {
    this.status = !this.status
  }

  regresar() {
    window.location.href = '/proyectos'
  }
}
