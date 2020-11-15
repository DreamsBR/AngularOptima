import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html'
})
export class InmueblesComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.status = !this.status;
  }

}
