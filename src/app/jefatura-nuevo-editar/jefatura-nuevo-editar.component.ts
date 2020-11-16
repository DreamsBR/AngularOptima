import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jefatura-nuevo-editar',
  templateUrl: './jefatura-nuevo-editar.component.html'
})
export class JefaturaNuevoEditarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
