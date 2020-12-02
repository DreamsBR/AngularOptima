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
import { ConsolidadoVendedor } from './consolidadovendedor'
import { ActivatedRoute } from '@angular/router'
import { ColaboradorService } from '../colaboradores/colaborador.service'

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
  selector: 'app-reportes-vendedor',
  templateUrl: './reportes-vendedor.component.html',
  styleUrls: ['./reportes-vendedor.component.css']
})
export class ReportesVendedorComponent implements OnInit {
  @ViewChild('mychart', { static: true }) chartObj: ChartComponent
  @ViewChild('mychartFunnel', { static: true }) chartObjFunnel: ChartComponent
  @ViewChild('mychartForecast', { static: true }) chartObjForecast: ChartComponent

  @ViewChild('autocompleteSearch1', { static: true }) autocompleteSearch1: any
  @ViewChild('autocompleteSearch2', { static: true }) autocompleteSearch2: any

  loading = false
  status = false

  itemsTable = new MatTableDataSource<ConsolidadoVendedor>()
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
  keywordSearch1 = 'nombres'
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

  filterIdColaborador: number = null
  filterIdPeriodo: number = null

  constructor(
    private proyectoService: ProyectoService,
    private periodoService: PeriodoService,
    private gerenciaService: GerenciaService,
    private periodoGerenciaService: PeriodoGerenciaService,
    private reportesService: ReportesService,
    private activatedRoute: ActivatedRoute,
    private colaboradorService: ColaboradorService
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
    this.activatedRoute.paramMap.subscribe((params) => {
      const paramIdColaborador: number = parseInt(params.get('idcolaborador')) // Id del Proyecto
      const paramIdPeriodo: number = parseInt(params.get('idperiodo')) // Id del Proyecto

      this.loading = true
      this.colaboradorService.getTodosColaboradores().subscribe(
        (data) => {
          this.dataSearch1 = data
          this.loading = false

          // Si los parámetros existen hace una búsqueda inicial
          if (params.get('idcolaborador') && params.get('idperiodo')) {
            this.loading = true
            this.periodoService.getPeriodoColaboradorByIdColaborador(paramIdColaborador).subscribe(
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

                // Seteando los valores de la Url
                for (const elem of data) {
                  if (elem.idColaborador === paramIdColaborador) {
                    this.autocompleteSearch1.changeOnlyText(elem.nombres)
                    break
                  }
                }

                for (const elem of customDataSearch) {
                  if (elem.idPeriodo === paramIdPeriodo) {
                    this.autocompleteSearch2.changeOnlyText(elem.nombrePeriodo)
                    break
                  }
                }

                this.filterIdColaborador = paramIdColaborador
                this.filterIdPeriodo = paramIdPeriodo

                this.buscar()

                this.loading = false
              },
              (error) => {
                this.loading = false
                console.error(error)
              }
            )
          }
        },
        (error) => {
          this.loading = false
          console.error(error)
        }
      )
    })
  }

  clearedSearch1() {
    this.filterIdColaborador = null
    // Cuando se limpia el primer buscador, limpiamos el segundo
    this.filterIdPeriodo = null
    this.dataSearch2 = []
    this.autocompleteSearch2.changeOnlyText(null)
  }

  clearedSearch2() {
    this.filterIdPeriodo = null
  }

  selectEventSearch1(item: any) {
    this.filterIdColaborador = item.idColaborador

    this.loading = true
    this.dataSearch2 = []
    this.periodoService.getPeriodoColaboradorByIdColaborador(item.idColaborador).subscribe(
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
    if (!this.filterIdColaborador || !this.filterIdPeriodo) {
      alert('Debe seleccionar un vendedor y un periodo')
      return
    }

    this.loading = true

    // TODO: QUITAR LA DATA HARCODEADA
    this.reportesService
      .getConsolidadoVendedor(this.filterIdColaborador, this.filterIdPeriodo)
      .subscribe(
        (resp) => {
          // TODO: inicio QUITAR LA DATA HARCODEADA
          resp.push({
            avance: 464125.98,
            caida: 0,
            ci: 1,
            ev: 1,
            meta: 765412.45,
            minuta: 2,
            preca: 2,
            proyecto: {
              codigo: 'string',
              direccion: 'string',
              enable: 0,
              idProyecto: 1,
              nombre: 'Nessssstaaaa'
            },
            sp: 5
          })
          resp.push({
            avance: 211125.98,
            caida: 0,
            ci: 1,
            ev: 1,
            meta: 541927.29,
            minuta: 2,
            preca: 2,
            proyecto: {
              codigo: 'string',
              direccion: 'string',
              enable: 0,
              idProyecto: 2,
              nombre: 'Groño'
            },
            sp: 5
          })
          // TODO: fin QUITAR LA DATA HARCODEADA

          this.itemsTable = new MatTableDataSource<ConsolidadoVendedor>(resp)
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
          //this.drawForecastChart()
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
    /* this.reportesService
      .getConsolidadoGerencia(this.filterIdGerencia, this.filterIdPeriodo)
      .subscribe((resp) => {
        //this.reportesService.getConsolidadoGerencia(1, 1).subscribe((resp) => {
        // TODO: inicio QUITAR DATA HARDCODEADA
        //resp.push({
        //  periodoGerencia: {
        //    idPeriodoGerencia: 1,
        //    enable: 1,
        //    idGerencia: 1,
        //    periodo: {
        //      idPeriodo: 1,
        //      enable: 1,
        //      fechaFin: '2020-11-30T00:00:00.000+0000',
        //      fechaInicio: '2020-11-01T00:00:00.000+0000',
        //      nombre: 'DICIEMBRE - 2020'
        //    },
        //    meta: 80564.45
        //  },
        //  venta: 50456.03
        //})
        // TODO: fin QUITAR DATA HARDCODEADA
        //console.log(resp)

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
      }) */
  }

  goDetails(row) {
    console.log(row)
  }
}
