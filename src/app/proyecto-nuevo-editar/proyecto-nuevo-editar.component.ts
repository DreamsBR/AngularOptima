import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-nuevo-editar',
  templateUrl: './proyecto-nuevo-editar.component.html'
})
export class ProyectoNuevoEditarComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.status = !this.status;
  }

}
