import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'paginator2',
  templateUrl: './paginator2.component.html'
})
export class Paginator2Component implements OnInit, OnChanges {

  @Input() paginador: any;
  @Input() base: string;
  @Input() id: string;

  paginas: number[];
  desde: number;
  hasta: number;

  constructor() { }

  ngOnInit() {
    try {
      this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
      this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);
      if (this.paginador.totalPages > 5) {
        this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((valor, indice) => indice + this.desde);
      } else {
        this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor, indice) => indice + 1);
      }
    } catch (error) {}
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    try {
    this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
    this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);
    if (this.paginador.totalPages > 5) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((valor, indice) => indice + this.desde);
    } else {
      this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor, indice) => indice + 1);
    }
    } catch (error) {}
  }

}
