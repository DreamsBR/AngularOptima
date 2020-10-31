import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas-proyecto-nuevo-editar',
  templateUrl: './ventas-proyecto-nuevo-editar.component.html'
})
export class VentasProyectoNuevoEditarComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.status = !this.status;
  }

}
