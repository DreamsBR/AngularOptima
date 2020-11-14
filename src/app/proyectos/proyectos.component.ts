import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.status = !this.status;
  }

}
