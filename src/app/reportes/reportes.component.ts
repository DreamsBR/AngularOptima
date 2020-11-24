import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'

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
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  status = false

  itemsTable = new MatTableDataSource<any>()
  fieldsTable: string[] = ['numero', 'proyecto', 'meta', 'avance', 'minuta']

  sumaMetas: number = 0
  sumaAvances: number = 0

  public chartOptions: Partial<ChartOptions>;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };

  }

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
