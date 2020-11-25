import { Component, OnInit, Input } from '@angular/core';
import { Ventasproyecto } from './../ventas-proyecto/Ventasproyecto';
import { VentasproyectoService } from './../ventas-proyecto/ventasproyecto.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { Proyecto } from '../proyectos/proyecto';
import { VentaConsultaClienteDetalleService } from './../ventas-consulta-cliente-detalle/ventas-consulta-cliente-detalle.service';
import { forkJoin, Observable } from 'rxjs';
import { estadoventa } from '../consulta-ventas/estadoventa';
import { statusVentaservice } from '../consulta-ventas/statusventa.service';
import { VentaService } from '../ventas/ventas.service';
import { Venta } from '../ventas/venta';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-consulta-ventas-detalle',
  templateUrl: './consulta-ventas-detalle.component.html'
})
export class ConsultaVentasDetalleComponent implements OnInit {

  @Input()
  nombreProyecto:string

  proyectoLista: Proyecto[]
  status: boolean = false;
  ventasProyectoLista: Ventasproyecto[];
  sortDesde: string = ''
  sortHasta: string = ''
  tipoestado : estadoventa[]
  ventasLista: Venta[]

  filterPost = ""
  base:string
  paginador:any
  id: number
  paramIdProyecto: number

  constructor(
    private estadoventa : statusVentaservice,
    private ventasproyectoService: VentasproyectoService,
    private activatedRoute: ActivatedRoute,
    private ventaServi : VentaService,
    public authService: AuthService,
    public router: Router,

  ) { }




  ngOnInit() {

    this.obtenerEstadoVentas()
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
    })
    this.obtenerVentasProyecto(this.paramIdProyecto)

  }
  /*
  public model: any;

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

*/




  obtenerVentasProyecto(id:number){
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number =+ params.get('page')
      if(!page){
        page = 0
      }
      this.ventaServi.getVentasByProyecto(id, page).subscribe((
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


  menuToggle(){
    this.status = !this.status;
  }


 }

