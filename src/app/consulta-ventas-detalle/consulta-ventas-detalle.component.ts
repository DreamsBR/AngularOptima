import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Ventasproyecto } from './../ventas-proyecto/Ventasproyecto';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { Proyecto } from '../proyectos/proyecto';
import { estadoventa } from '../consulta-ventas/estadoventa';
import { statusVentaservice } from '../consulta-ventas/statusventa.service';
import { VentaService } from '../ventas/ventas.service';
import { Ventanodos } from '../ventas-proyecto-editar/ventanodos';
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component';

@Component({
  selector: 'app-consulta-ventas-detalle',
  templateUrl: './consulta-ventas-detalle.component.html'
})
export class ConsultaVentasDetalleComponent implements OnInit {

  @Input()
  nombreProyecto:string

  proyectoLista: Proyecto[]
  ventasProyectoLista: Ventasproyecto[];
  sortDesde: string = ''
  sortHasta: string = ''
  tipoestado : estadoventa[]
  ventasLista: Ventanodos[]
  fechaSeparacion : string

  filterPost = ""
  base:string
  paginador:any
  id: number
  paramIdProyecto: number

  @ViewChild('dpfechaDesde', { static: true }) dpfechaDesde: DatepickerRoundedComponent
  @ViewChild('dpfechaHasta', { static: true }) dpfechaHasta: DatepickerRoundedComponent

  fechaDesde: string
  fechaHasta: string

  constructor(
    private estadoventa : statusVentaservice,
    private activatedRoute: ActivatedRoute,
    private ventaService : VentaService,
    public authService: AuthService,
    public router: Router
  ){}

  ngOnInit() {
    this.obtenerEstadoVentas()
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
    })

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    this.fechaDesde = year + '-' + month + '-' + day
    this.fechaHasta = year + '-' + month + '-' + day
    this.dpfechaDesde.setValue(this.fechaDesde)
    this.dpfechaHasta.setValue(this.fechaHasta)

    this.obtenerVentasProyecto(this.paramIdProyecto)
  }

  onfechaDesde(newdate: string) {
    this.fechaDesde = newdate
  }

  onfechaHasta(newdate: string) {
    this.fechaHasta = newdate
  }

  obtenerVentasProyecto(id:number){
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number =+ params.get('page')
      if(!page){
        page = 0
      }
      this.ventaService.getVentasByProyecto(id, page).subscribe((
        ventasJsonResponse) => {
          console.info(ventasJsonResponse)
          this.ventasLista = ventasJsonResponse.content
          this.paginador = ventasJsonResponse
          this.base = 'consulta-ventas-detalle'
          this.id = this.paramIdProyecto
        })
    })
  }

  public obtenerEstadoVentas(){
    this.estadoventa.getEstadoVenta().subscribe((response)=> {
      this.tipoestado = response
      console.info(this.estadoventa)
    })
  }

  status: boolean = false;
  menuToggle(){
    this.status = !this.status;
  }

}