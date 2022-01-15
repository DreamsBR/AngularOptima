import { Component, OnInit, ɵConsole } from '@angular/core'
import { PruebaService } from './prueba.service'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {


  porcentaje : number =0 ;
  monto : number = 0;
  totalFinal : number;
  montoTot : number = 20000;
  constructor(private pruebaService: PruebaService) {}

  ngOnInit(

  ) {}

  procentajeDescuento(){

    this.porcentaje = (this.montoTot * this.monto)/100

  }

  montoDescuento(){
      this.monto = (this.porcentaje * this.montoTot)/100
    }




  calcularPorcentaje(){
    return this.monto = -(this.monto - this.montoTot) ;
  }
}
