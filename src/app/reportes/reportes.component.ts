import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { ProyectoService } from '../proyectos/proyectos.service'
import { Proyecto } from '../proyectos/proyecto'
import { PeriodoService } from '../periodos/periodo.service'
import { GerenciaService } from '../gerencias/gerencia.service'
import { PeriodoGerencia } from '../periodo-gerencia/periodogerencia'
import { PeriodoGerenciaService } from '../periodo-gerencia/periodo-gerencia.service'

import {
  ApexAxisChartSeries,
  ApexChart,
  // ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  dataLabels: ApexDataLabels
  plotOptions: ApexPlotOptions
  yaxis: ApexYAxis
  xaxis: ApexXAxis
  fill: ApexFill
  tooltip: ApexTooltip
  stroke: ApexStroke
  legend: ApexLegend
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  loading = false
  status = false

  itemsTable = new MatTableDataSource<any>()
  fieldsTable: string[] = ['numero', 'proyecto', 'meta', 'avance', 'minuta']

  sumaMetas: number = 0
  sumaAvances: number = 0

  optionsListaProyectos: Proyecto[] = []
  proyectoSelected: number = null

  public chartOptions: Partial<ChartOptions>

  // Variables para buscadores
  keywordSearch1 = 'nombres'
  dataSearch1 = []

  keywordSearch2 = 'nombrePeriodo'
  dataSearch2 = []

  constructor(
    private proyectoService: ProyectoService,
    private periodoService: PeriodoService,
    private gerenciaService: GerenciaService,
    private periodoGerenciaService: PeriodoGerenciaService
  ) {
    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands'
          }
        }
      }
    }
  }

  selectEventSearch1(item) {
    this.periodoGerenciaService
      .getPeriodoByIdGerencia(item.gerencia.idGerencia)
      .subscribe((resp) => {
        const listaCustomPeriodo = []
        resp.forEach((element) => {
          listaCustomPeriodo.push({
            ...element,
            idPeriodo: element.periodo.idPeriodo,
            nombrePeriodo: element.periodo.nombre
          })
        })
        this.dataSearch2 = listaCustomPeriodo
      })
  }

  selectEventSearch2(item) {
    console.log(item)
  }

  ngOnInit() {
    this.loading = true
    this.gerenciaService.getAllGerencias().subscribe((data) => {
      const listaGerentes = []
      data.forEach((elem: any) => {
        if (elem.colaborador) {
          listaGerentes.push({
            ...elem.colaborador,
            gerencia: {
              idGerencia: elem.idGerencia,
              nombre: elem.nombre
            }
          })
        }
      })
      this.dataSearch1 = listaGerentes
      this.loading = false
    })
  }

  menuToggle() {
    this.status = !this.status
  }
}
