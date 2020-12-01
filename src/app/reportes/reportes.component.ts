import { Component, OnInit, ViewChild } from '@angular/core'
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
import { ReportesService } from '../reportes/reportes.service'
import { ConsolidadoVentas } from './consolidadoventas'
import { ExporterService } from '../helpers/exporter.service'

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexStates
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
  labels: any
  colors: string[]
  states: ApexStates
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  @ViewChild('mychart', { static: true }) chartObj: ChartComponent
  @ViewChild('mychartFunnel', { static: true }) chartObjFunnel: ChartComponent
  @ViewChild('mychartForecast', { static: true }) chartObjForecast: ChartComponent

  @ViewChild('autocompleteSearch1', { static: true }) autocompleteSearch1: any
  @ViewChild('autocompleteSearch2', { static: true }) autocompleteSearch2: any

  loading = false
  status = false

  itemsTable = new MatTableDataSource<ConsolidadoVentas>()
  fieldsTable: string[] = [
    'numero',
    'proyecto',
    'meta',
    'avance',
    'minuta',
    'ci',
    'preca',
    'ev',
    'sp',
    'caida'
  ]

  sumaMetas: number = 0
  sumaAvances: number = 0

  public chartOptions: Partial<ChartOptions>
  public chartOptionsFunnel: Partial<ChartOptions>
  public chartOptionsForecast: Partial<ChartOptions>

  // Variables para buscadores
  keywordSearch1 = 'nombreColaborador'
  dataSearch1 = []

  keywordSearch2 = 'nombrePeriodo'
  dataSearch2 = []

  // sumaEtapaSep

  /** Gets the total cost of all transactions. */
  get getTotalMeta() {
    return this.itemsTable.data.map((t) => t.meta).reduce((acc, value) => acc + value, 0)
  }
  get getTotalAvance() {
    return this.itemsTable.data.map((t) => t.avance).reduce((acc, value) => acc + value, 0)
  }

  totalMinuta = 0
  totalCI = 0
  totalPreca = 0
  totalEV = 0
  totalSP = 0
  totalCaida = 0

  filterIdGerencia: number = null
  filterIdPeriodo: number = null

  constructor(
    private proyectoService: ProyectoService,
    private periodoService: PeriodoService,
    private gerenciaService: GerenciaService,
    private periodoGerenciaService: PeriodoGerenciaService,
    private reportesService: ReportesService,
    private exporterService: ExporterService
  ) {
    this.chartOptions = {
      colors: ['#579DD3', '#EE7B37'],
      series: [],
      chart: {
        toolbar: {
          show: false
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%'
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
        categories: []
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
      },
      labels: []
    }

    this.chartOptionsFunnel = {
      xaxis: {
        max: 20,
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      colors: ['#579DD3', '#579DD3'],
      labels: [],
      series: [],
      legend: {
        show: false
      },
      chart: {
        toolbar: {
          show: false
        },
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          }
        }
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        offsetX: -5,
        formatter: function (val, opts) {
          //console.log(opts)
          return val
        },
        //textAnchor: "start",
        style: {
          fontSize: '12px',
          colors: ['#fff']
        },
        background: {
          enabled: true,
          foreColor: '#579DD3',
          padding: 4,
          borderRadius: 2,
          opacity: 0.9,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        }
      }
    }

    this.chartOptionsForecast = {
      colors: ['#579DD3', '#EE7B37'],
      series: [],
      chart: {
        toolbar: {
          show: false
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%'
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
        categories: []
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val}`
          }
        }
      },
      labels: []
    }
  }

  ngOnInit() {
    this.loading = true
    this.gerenciaService.getAllGerencias().subscribe((data) => {
      const listaGerentes = []
      data.forEach((elem: any) => {
        if (elem.colaborador) {
          listaGerentes.push({
            ...elem,
            idColaborador: elem.colaborador.idColaborador,
            nombreColaborador: elem.colaborador.nombres + ' ' + elem.colaborador.apellidos
          })
        }
      })
      this.dataSearch1 = listaGerentes
      this.loading = false
    })
  }

  ////////////////////////////////////////////

  clearedSearch1() {
    this.filterIdGerencia = null
    // Cuando se limpia el primer buscador, limpiamos el segundo
    this.filterIdPeriodo = null
    this.dataSearch2 = []
    this.autocompleteSearch2.changeOnlyText(null)
  }

  clearedSearch2() {
    this.filterIdPeriodo = null
  }

  selectEventSearch1(item: any) {
    this.filterIdGerencia = item.idGerencia

    this.loading = true
    this.dataSearch2 = []
    this.periodoGerenciaService.getPeriodoByIdGerencia(item.idGerencia).subscribe(
      (resp) => {
        const customDataSearch = []
        resp.forEach((elem: any) => {
          customDataSearch.push({
            ...elem,
            idPeriodo: elem.periodo.idPeriodo,
            nombrePeriodo: elem.periodo.nombre
          })
        })
        this.dataSearch2 = customDataSearch
        this.loading = false
      },
      (error) => {
        this.loading = false
        console.error(error)
      }
    )
  }

  selectEventSearch2(item: any) {
    this.filterIdPeriodo = item.idPeriodo
  }

  menuToggle() {
    this.status = !this.status
  }

  buscar() {
    if (!this.filterIdGerencia || !this.filterIdPeriodo) {
      alert('Debe seleccionar un gerente y un periodo')
      return
    }

    this.loading = true

    this.reportesService
      .getConsolidadoVentas(this.filterIdGerencia, this.filterIdPeriodo)
      .subscribe(
        (resp) => {
          this.itemsTable = new MatTableDataSource<ConsolidadoVentas>(resp)
          this.totalMinuta = this.itemsTable.data
            .map((t) => t.minuta)
            .reduce((acc, value) => acc + value, 0)
          this.totalCI = this.itemsTable.data
            .map((t) => t.ci)
            .reduce((acc, value) => acc + value, 0)
          this.totalPreca = this.itemsTable.data
            .map((t) => t.preca)
            .reduce((acc, value) => acc + value, 0)
          this.totalEV = this.itemsTable.data
            .map((t) => t.ev)
            .reduce((acc, value) => acc + value, 0)
          this.totalSP = this.itemsTable.data
            .map((t) => t.sp)
            .reduce((acc, value) => acc + value, 0)
          this.totalCaida = this.itemsTable.data
            .map((t) => t.caida)
            .reduce((acc, value) => acc + value, 0)

          this.loading = false

          this.setDataChart()
          this.drawFunnelChart()
          this.drawForecastChart()
        },
        (error) => {
          this.loading = false
          console.log(error)
        }
      )
  }

  setDataChart() {
    const tmpSeries = [
      {
        name: 'Meta',
        data: []
      },
      {
        name: 'Avance',
        data: []
      }
    ]
    this.itemsTable.data.forEach((elem) => {
      // Add to meta array
      tmpSeries[0].data.push(elem.meta)
      // Add to avance array
      tmpSeries[1].data.push(elem.avance)
    })

    const tmpXaxis = {
      categories: []
    }
    this.itemsTable.data.forEach((elem) => {
      tmpXaxis.categories.push(elem.proyecto.nombre)
    })
    this.chartOptions.labels = ['opa']
    this.chartOptions.series = tmpSeries
    this.chartOptions.xaxis = tmpXaxis
    this.chartObj.updateOptions(this.chartOptions)
  }

  drawFunnelChart() {
    const itemsvalues = [
      this.totalSP,
      this.totalEV,
      this.totalPreca,
      this.totalCI,
      this.totalMinuta
    ]

    const maxValue = typeof itemsvalues[0] !== 'undefined' ? itemsvalues[0] : 0

    const staticData = [
      {
        name: 'Resultados',
        data: itemsvalues
      }
    ]
    const reflexData = {
      name: 'ReflexData',
      data: []
    }
    staticData[0].data.forEach((val) => {
      reflexData.data.push(val * -1)
    })
    staticData.push(reflexData)
    this.chartOptionsFunnel.series = staticData
    this.chartOptionsFunnel.xaxis = {
      max: maxValue,
      labels: {
        show: false
      }
    }
    this.chartOptionsFunnel.yaxis = {
      labels: {
        show: true
      }
    }
    this.chartOptionsFunnel.labels = [
      'Separación',
      'Evaluación',
      'Precalificación',
      'Cuota Inicial',
      'Minuta'
    ]
    this.chartObjFunnel.updateSeries(staticData)
    this.chartObjFunnel.updateOptions(this.chartOptionsFunnel)
  }

  drawForecastChart() {
    this.reportesService
      .getConsolidadoGerencia(this.filterIdGerencia, this.filterIdPeriodo)
      .subscribe((resp) => {
        const tmpSeries = [
          {
            name: 'Meta',
            data: []
          },
          {
            name: 'Monto de venta alcanzada',
            data: []
          }
        ]
        const tmpXaxis = {
          categories: []
        }

        resp.forEach((elem) => {
          tmpSeries[0].data.push(elem.periodoGerencia.meta)
          tmpSeries[1].data.push(elem.venta)
          tmpXaxis.categories.push(elem.periodoGerencia.periodo.nombre)
        })
        this.chartOptionsForecast.series = tmpSeries
        this.chartOptionsForecast.xaxis = tmpXaxis
        this.chartObjForecast.updateOptions(this.chartOptionsForecast)
      })
  }

  goDetails(row) {
    const idProyecto = row.proyecto.idProyecto
    window.location.href = '/reportes-por-proyecto/' + idProyecto
  }

  exportar() {
    this.exporterService.exportToExcel(
      [
        {
          id: '1',
          nombre: 'sdfafa'
        }
      ],
      'reporte'
    )
  }
}
