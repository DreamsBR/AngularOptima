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
import { ClienteService } from '../clientes/clientes.service';

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
  dni=''


  filterPost = ""
  base:string
  paginador:any
  id: number
  paramIdProyecto: number

  @ViewChild('dpfechaDesde', { static: true }) dpfechaDesde: DatepickerRoundedComponent
  @ViewChild('dpfechaHasta', { static: true }) dpfechaHasta: DatepickerRoundedComponent

  @ViewChild('clienteAutocomplete',null) clienteAutocomplete: any;


  estadoventaSeleccionado: number
  fechaDesde: string
  fechaHasta: string
  dataBuscarCliente = []



  kwBuscar = 'nombre'

  constructor(
    private estadoventa : statusVentaservice,
    private activatedRoute: ActivatedRoute,
    private ventaService : VentaService,
    public authService: AuthService,
    public router: Router,
    public clienteService : ClienteService
  ){}

  ngOnInit() {
    this.obtenerEstadoVentas()
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('idproyecto'))
      this.estadoventaSeleccionado = parseInt(params.get('idestadoventa'))
      this.estadoventaSeleccionado = 0

      this.fechaDesde = "2020-01-01"
      this.fechaHasta = "2020-12-31"

      this.dpfechaDesde.setValue(this.fechaDesde)
      this.dpfechaHasta.setValue(this.fechaHasta)

      this.obtenerVentasProyecto()
      this.obtenerTodoClientes()

    })
  }


  clienteSeleccionado: any
  seleccionarItemBusquedaCliente(event){
    this.clienteSeleccionado = event
    //this.clienteAutocomplete.searchInput.nativeElement.value = this.clienteSeleccionado.nroDocumento
    this.dni = this.clienteSeleccionado.nroDocumento
    console.log(this.clienteSeleccionado)
  }


  obtenerTodoClientes(){
    this.clienteService.obtenerCliente().subscribe((data)=>{
      const listaCliente = []
      data.forEach((elem:any) => {
        listaCliente.push({
          idCliente: elem.idCliente,
          nroDocumento : elem.nroDocumento,
          nombre: elem.nombres + " "+elem.apellidos
        })
      })
      this.dataBuscarCliente = listaCliente
    })

  }


  filtrar(){

    this.ventaService.getVentasPorDni(this.clienteSeleccionado.idCliente, 1, 1).subscribe((
      jsonVentas) => {
        console.log(jsonVentas)
        this.ventasLista = []
        this.ventasLista = jsonVentas.content
      })
    }

  nombre:string
  Cancelar(){
    this.dni = ''
    this.nombre = ""
    this.clienteSeleccionado = null
    this.obtenerVentasProyecto()
  }



  onfechaDesde(newdate: string) {
    this.fechaDesde = newdate
    this.obtenerSoloFecha()
  }

  onfechaHasta(newdate: string) {
    this.fechaHasta = newdate
    this.obtenerSoloFecha()
  }

  onChangetEstadoVenta(){
    this.obtenerVentasProyecto()
  }


  obtenerVentasProyecto(){
    if(this.clienteSeleccionado == null)
    {
    this.ventaService.getVentasByProyectoEstadoFeciniFecfin(this.paramIdProyecto, this.estadoventaSeleccionado, this.fechaDesde, this.fechaHasta).subscribe((
      ventasJsonResponse) => {
        console.info(ventasJsonResponse)
        this.ventasLista = ventasJsonResponse
      })
    }else {
      this.filtrar()
    }
}


  obtenerSoloFecha(){
    this.ventaService.getVentasProyectoPorFecha(this.paramIdProyecto, this.fechaDesde, this.fechaHasta).subscribe((
      ventasJsonRe) =>{
        this.ventasLista = ventasJsonRe
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
