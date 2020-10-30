import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores-nuevo-editar',
  templateUrl: './colaboradores-nuevo-editar.component.html'
})
export class ColaboradoresNuevoEditarComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle(){
    this.status = !this.status;
  }

}