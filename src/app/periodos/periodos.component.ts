import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html'
})
export class PeriodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
