import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerencias',
  templateUrl: './gerencias.component.html'
})
export class GerenciasComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }
  
  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
