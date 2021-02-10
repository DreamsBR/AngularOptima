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
import { ConsolidadoGeneral } from '../reportes-general/consolidadogeneral'
import { ActivatedRoute } from '@angular/router'
import { ColaboradorService } from '../colaboradores/colaborador.service'
import { ExporterService } from '../helpers/exporter.service'
import { TipoPeriodoService } from '../tipo-periodo/tipo-periodo.service'

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
  selector: 'app-reportes-por-categoria',
  templateUrl: './reportes-por-categoria.component.html',
  styleUrls: ['./reportes-por-categoria.component.css']
})
export class ReportesPorCategoriaComponent implements OnInit {
  @ViewChild('mychart', { static: true }) chartObj: ChartComponent
  @ViewChild('mychartFunnel', { static: true }) chartObjFunnel: ChartComponent
  @ViewChild('mychartForecast', { static: true }) chartObjForecast: ChartComponent

  @ViewChild('autocompleteSearch1', { static: true }) autocompleteSearch1: any
  @ViewChild('autocompleteSearch2', { static: true }) autocompleteSearch2: any

  loading = false
  status = false

  groupItemsTable = []
  subTotales: SubTotalItem[] = []

  itemsTable = new MatTableDataSource<ConsolidadoGeneral>()
  fieldsTable: string[] = [
    'numero',
    'gerente',
    'meta',
    'avance',
    'minuta',
    'ci',
    'preca',
    'ev',
    'sp',
    'caida'
  ]

  public chartOptions: Partial<ChartOptions>
  public chartOptionsFunnel: Partial<ChartOptions>
  public chartOptionsForecast: Partial<ChartOptions>

  // Variables para buscadores
  keywordSearch1 = 'nombre'
  dataSearch1 = []

  keywordSearch2 = 'nombre'
  dataSearch2 = []

  // sumaEtapaSep

  totalMeta = 0
  totalAvance = 0
  totalMinuta = 0
  totalCI = 0
  totalPreca = 0
  totalEV = 0
  totalSP = 0
  totalCaida = 0

  filterIdTipoPeriodo: number = null
  filterIdPeriodo: number = null

  constructor(
    private proyectoService: ProyectoService,
    private periodoService: PeriodoService,
    private gerenciaService: GerenciaService,
    private periodoGerenciaService: PeriodoGerenciaService,
    private reportesService: ReportesService,
    private activatedRoute: ActivatedRoute,
    private colaboradorService: ColaboradorService,
    private exporterService: ExporterService,
    private tipoPeriodoService: TipoPeriodoService
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
    this.tipoPeriodoService.getTiposPeriodo().subscribe((resp) => {
      this.loading = false
      this.dataSearch1 = resp
    })
  }

  clearedSearch1() {
    this.filterIdTipoPeriodo = null
    // Cuando se limpia el primer buscador, limpiamos el segundo
    this.filterIdPeriodo = null
    this.dataSearch2 = []
    this.autocompleteSearch2.changeOnlyText(null)
  }

  clearedSearch2() {
    this.filterIdPeriodo = null
  }

  selectEventSearch1(item: any) {
    this.filterIdTipoPeriodo = item.idTipoPeriodo

    this.loading = true
    this.dataSearch2 = []
    this.periodoService.getPeriodoByTipoPeriodo(this.filterIdTipoPeriodo).subscribe(
      (resp) => {
        const customDataSearch = []
        resp.forEach((elem: any) => {
          customDataSearch.push(elem)
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
    if (!this.filterIdTipoPeriodo || !this.filterIdPeriodo) {
      alert('Debe seleccionar un tipo y un periodo')
      return
    }

    this.loading = true
    this.reportesService.getConsolidadoGerenciaPorCategoria(this.filterIdPeriodo).subscribe(
      (resp) => {
        this.loading = false

        resp.forEach((element) => {
          this.groupItemsTable.push(element)

          const grupo: SubTotalItem = {
            meta: 0,
            avance: 0,
            minuta: 0,
            ci: 0,
            preca: 0,
            ev: 0,
            sp: 0,
            caida: 0
          }

          element.list.forEach((row) => {
            grupo.meta += row.meta
            grupo.avance += row.avance
            grupo.minuta += row.minuta
            grupo.ci += row.ci
            grupo.preca += row.preca
            grupo.ev += row.ev
            grupo.sp += row.sp
            grupo.caida += row.caida

            // Sumando los totales generales
            this.totalMeta += row.meta
            this.totalAvance += row.avance
            this.totalMinuta += row.minuta
            this.totalCI += row.ci
            this.totalPreca += row.preca
            this.totalEV += row.ev
            this.totalSP += row.sp
            this.totalCaida += row.caida
          })
          this.subTotales.push(grupo)
        })

        this.loading = false

        this.setDataChart()
        this.drawFunnelChart()
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

    this.groupItemsTable.forEach((grupo) => {
      grupo.list.forEach((item) => {
        console.log(item)
        tmpSeries[0].data.push(item.meta)
        tmpSeries[1].data.push(item.avance)
      })
    })

    const tmpXaxis = {
      categories: []
    }

    this.groupItemsTable.forEach((grupo) => {
      grupo.list.forEach((item) => {
        tmpXaxis.categories.push(item.gerencia.colaborador.nombres)
      })
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

  exportar() {
    const itemsExportFormat: ExportItemExcel[] = []
    this.itemsTable.data.forEach((element) => {
      const tmpItem: ExportItemExcel = {
        gerente:
          element.gerencia.colaborador.nombres + ' ' + element.gerencia.colaborador.apellidos,
        meta: element.meta,
        avance: element.avance,
        minuta: element.minuta,
        ci: element.ci,
        preca: element.preca,
        ev: element.ev,
        sp: element.sp,
        caida: element.caida
      }
      itemsExportFormat.push(tmpItem)
    })
    // const timeStamp = new Date().getTime()
    this.exporterService.exportToExcel(itemsExportFormat, 'reporte_general')
  }
}

interface ExportItemExcel {
  gerente: string
  meta: number
  avance: number
  minuta: number
  ci: number
  preca: number
  ev: number
  sp: number
  caida: number
}

interface SubTotalItem {
  meta: number
  avance: number
  minuta: number
  ci: number
  preca: number
  ev: number
  sp: number
  caida: number
}
