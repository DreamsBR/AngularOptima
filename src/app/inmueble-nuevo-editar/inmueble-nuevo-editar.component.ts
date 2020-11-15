import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmueble-nuevo-editar',
  templateUrl: './inmueble-nuevo-editar.component.html'
})
export class InmuebleNuevoEditarComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.status = !this.status;
  }

}
