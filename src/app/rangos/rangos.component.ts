import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { Rango } from './rango'
import { TipoPeriodo } from '../tipo-periodo/tipo-periodo'
import { TipoPeriodoService } from '../tipo-periodo/tipo-periodo.service'

@Component({
  selector: 'app-rangos',
  templateUrl: './rangos.component.html',
  styleUrls: ['./rangos.component.css']
})
export class RangosComponent implements OnInit {
  loading: boolean = false
  status: boolean = false

  itemsLista = new MatTableDataSource<Rango>()

  optionsTipoPeriodo: TipoPeriodo[]

  idTipoPeriodoSelected: number

  newRango: Rango

  constructor(private tipoPeriodoService: TipoPeriodoService) {}

  ngOnInit() {
    this.getData()
  }

  openAgrerarModalMode() {}

  getData() {
    this.loading = true
    this.tipoPeriodoService.getTiposPeriodo().subscribe(
      (resp) => {
        this.loading = false
        this.optionsTipoPeriodo = resp
        console.log(resp)
      },
      (error) => {
        this.loading = false
        console.log(error)
      }
    )
  }

  buscar() {
    console.log(this.idTipoPeriodoSelected)
    var itemSelected = this.optionsTipoPeriodo.filter((obj) => {
      return obj.idTipoPeriodo == this.idTipoPeriodoSelected
    })
    console.log(itemSelected)

    var otro = this.optionsTipoPeriodo.find((x) => x.idTipoPeriodo == this.idTipoPeriodoSelected)
    console.log('otro')
    console.log(otro)
  }

  menuToggle() {
    this.status = !this.status
  }
}
