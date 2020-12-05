import { Component, OnInit, ViewChild } from '@angular/core'
import { Ventasproyecto } from './Ventasproyecto'
import { VentaNodos } from './../ventas/ventanodos'
import { VentaService } from './../ventas/ventas.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { estadoventa } from '../consulta-ventas/estadoventa'
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component'
import { statusVentaservice } from '../consulta-ventas/statusventa.service'

@Component({
  selector: 'app-ventas-proyecto',
  templateUrl: './ventas-proyecto.component.html'
})
export class VentasProyectoComponent implements OnInit {

  ventasProyectoLista: Ventasproyecto[] = []
  idProyectoSeleted: number = 0
  tipoestado : estadoventa[]
  paramIdProyecto: number

  @ViewChild('dpfechaDesde', { static: true }) dpfechaDesde: DatepickerRoundedComponent
  @ViewChild('dpfechaHasta', { static: true }) dpfechaHasta: DatepickerRoundedComponent

  constructor(
    private estadoventa : statusVentaservice,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public VentaService: VentaService
  ){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
      if(params.get('idestadoventa')){
        this.estadoventaSeleccionado = parseInt(params.get('idestadoventa'))
      }else{
        this.estadoventaSeleccionado = 15
      }
      this.fechaDesde = "2020-01-01"
      this.fechaHasta = "2020-12-31"
      this.dpfechaDesde.setValue(this.fechaDesde)
      this.dpfechaHasta.setValue(this.fechaHasta)

      this.obtenerEstadoVentas()
      // this.obtenerVentas(this.paramIdProyecto)
    })
  }

  ventasLista: VentaNodos[]
  // paginador: any
  // base: string
  // id: number

  // obtenerVentas(id: number) {
  //   this.activatedRoute.paramMap.subscribe((params) => {
  //     let page: number =+ params.get('page')
  //     if (!page) {
  //       page = 0
  //     }
  //     this.VentaService.getVentasByProyecto(id, page).subscribe((
  //       ventasJsonResponse) => {
  //       this.ventasLista = ventasJsonResponse.content
  //       this.paginador = ventasJsonResponse
  //       this.base = 'ventas-proyecto'
  //       this.id = this.paramIdProyecto
  //     })
  //   })
  //   this.obtenerEstadoVentas()
  // }

  status: boolean = false
  menuToggle() {
    this.status = !this.status
  }

  selectItemProyecto(idProyecto) {
    this.idProyectoSeleted = idProyecto
  }

  estadoventaSeleccionado: number
  fechaDesde: string
  fechaHasta: string

  onfechaDesde(newdate: string) {
    this.fechaDesde = newdate
    this.obtenerVentasProyecto()
  }

  onfechaHasta(newdate: string) {
    this.fechaHasta = newdate
    this.obtenerVentasProyecto()
  }

  onChangetEstadoVenta(){
    this.obtenerVentasProyecto()
  }

  obtenerVentasProyecto(){
    this.VentaService.getVentasByProyectoEstadoFeciniFecfin(this.paramIdProyecto, this.estadoventaSeleccionado, this.fechaDesde, this.fechaHasta).subscribe((
      ventasJsonResponse) => {
        this.ventasLista = ventasJsonResponse
      })
  }

  public obtenerEstadoVentas(){
    this.estadoventa.getEstadoVenta().subscribe((response)=> {
      this.tipoestado = response
    })
  }














}
