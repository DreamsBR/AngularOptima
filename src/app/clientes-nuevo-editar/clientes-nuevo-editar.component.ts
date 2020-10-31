import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-nuevo-editar',
  templateUrl: './clientes-nuevo-editar.component.html'
})
export class ClientesNuevoEditarComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.status = !this.status;
  }

}
