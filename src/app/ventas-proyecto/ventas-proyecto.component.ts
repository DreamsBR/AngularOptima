import { Component, OnInit } from '@angular/core'
import { Ventasproyecto } from './Ventasproyecto'
import { Venta } from './../ventas/venta'
import { VentaService } from './../ventas/ventas.service'
import { VentasproyectoService } from './ventasproyecto.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-ventas-proyecto',
  templateUrl: './ventas-proyecto.component.html'
})
export class VentasProyectoComponent implements OnInit {
  
  ventasProyectoLista: Ventasproyecto[]
  idProyectoSeleted: number = 0

  paramIdProyecto: number

  constructor(
    private ventasproyectoService: VentasproyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
    public VentaService: VentaService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
    })
    this.obtenerVentas(this.paramIdProyecto)
  }

  ventasLista: Venta[]
  paginador: any
  base: string
  id: number

  obtenerVentas(id: number) {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number =+ params.get('page')
      if (!page) {
        page = 0
      }
      this.VentaService.getVentasByProyecto(id, page).subscribe((
        ventasJsonResponse) => {
        this.ventasLista = ventasJsonResponse.content
        this.paginador = ventasJsonResponse
        this.base = 'ventas-proyecto'
        this.id = this.paramIdProyecto
      })
    })
  }

  status: boolean = false
  menuToggle() {
    this.status = !this.status
  }

  selectItemProyecto(idProyecto) {
    this.idProyectoSeleted = idProyecto
  }
}
