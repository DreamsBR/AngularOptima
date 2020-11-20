import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { VentaConsultaClienteDetalleService } from './ventas-consulta-cliente-detalle.service'
import { Router } from '@angular/router'
import { Venta } from '../ventas/venta'
import sleep from 'await-sleep'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { Cliente } from '../clientes/cliente'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import * as moment from 'moment'
@Component({
  selector: 'app-ventas-consulta-cliente-detalle',
  templateUrl: './ventas-consulta-cliente-detalle.component.html',
  styleUrls: ['./ventas-consulta-cliente-detalle.component.css']
})
export class VentasConsultaClienteDetalleComponent implements OnInit {
  status: boolean = false
  loading: boolean = false
  errors: string[] = []
  objVentaDetalle: Venta = new Venta()

  cliente: Cliente = new Cliente()

  // Sort Datos
  svFechaCaida: NgbDateStruct

  constructor(
    private activatedRoute: ActivatedRoute,
    private vccdService: VentaConsultaClienteDetalleService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.initFunctions()
  }

  initFunctions() {
    const paramIdVenta = parseInt(this.activatedRoute.snapshot.params.id)
    // console.log(paramIdVenta)

    this.getInfo().subscribe(
      (resp) => {
        this.cliente = resp[0]
        // console.log(this.cliente)
      },
      (error) => {
        this.errors = ['Hubo un problema recuperando la información de la API.']
        console.log(error)
      }
    )
  }

  onFechaCaidaChanged(newdate: string) {
    console.log(newdate)
  }

  getInfo(): Observable<any[]> {
    // let listaTipoVista = this.vccdService.fetchingTipoVista()
    // let listaTipoDocumento = this.vccdService.fetchingTipoDocumento()
    //return this.http.get(this.urlEndPoint + '/tipodocumento/').pipe(catchError(this.errorHandler))
    let infoCliente = this.vccdService.getClienteById(22)
    return forkJoin([infoCliente])
  }

  get formatNacimientoEdad(): string {
    if (typeof this.cliente.fechaNacimiento !== 'undefined') {
      const fNac = this.cliente.fechaNacimiento.substring(0, 10) // Formato YYYY-MM-DD
      const edad = moment().diff(fNac, 'years', false)
      return `${fNac.split('-').reverse().join('-')} (${edad} años)`
    } else {
      return '--'
    }
  }

  menuToggle() {
    this.status = !this.status
  }
}
