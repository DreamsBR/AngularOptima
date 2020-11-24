import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  status = true

  itemsTable = new MatTableDataSource<any>()
  fieldsTable: string[] = ['numero', 'proyecto', 'meta', 'avance', 'minuta']

  sumaMetas: number = 0
  sumaAvances: number = 0

  constructor() {}

  ngOnInit() {
    this.fetchData()
  }

  menuToggle() {
    this.status = !this.status
  }

  fetchData() {
    const data = [
      {
        proyecto: 'Nesta',
        meta: 3545951.72,
        avance: 1345951.54,
        minuta: 8
      },
      {
        proyecto: 'Town',
        meta: 1000000.35,
        avance: 854621.29,
        minuta: 4
      },
      {
        proyecto: 'Sente 1',
        meta: 5000000.58,
        avance: 84621.97,
        minuta: 2
      }
    ]

    let tmpSumaMetas = 0
    let tmpSumaAvances = 0
    data.forEach((item) => {
      tmpSumaMetas += item.meta
      tmpSumaAvances += item.avance
    })
    this.sumaMetas = tmpSumaMetas
    this.sumaAvances = tmpSumaAvances

    this.itemsTable = new MatTableDataSource<any>(data)
  }
}
