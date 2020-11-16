import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerencia-nuevo-editar',
  templateUrl: './gerencia-nuevo-editar.component.html'
})
export class GerenciaNuevoEditarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
