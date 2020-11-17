import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html'
})
export class PeriodosComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor() { }

  ngOnInit() {
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
