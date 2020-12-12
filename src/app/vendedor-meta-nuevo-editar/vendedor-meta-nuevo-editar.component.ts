import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor-meta-nuevo-editar',
  templateUrl: './vendedor-meta-nuevo-editar.component.html'
})
export class VendedorMetaNuevoEditarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;
  menuToggle(){
    this.status = !this.status;
  }

}