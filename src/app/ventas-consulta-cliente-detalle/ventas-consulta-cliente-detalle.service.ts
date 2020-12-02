import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Cliente } from '../clientes/cliente'
import { VentaNodos } from '../ventas/ventanodos'
import { Financiamiento } from '../financiamientos/financiamiento'
import { Venta } from '../ventas/venta'
@Injectable()
export class VentaConsultaClienteDetalleService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  fetchingInfoVenta(idVenta: number): Observable<any> {
    return this.http
      .get(this.urlEndPoint + 'venta/' + idVenta)
      .pipe(map((jsonReponse: any) => jsonReponse))
  }

  updateVenta(venta: VentaNodos): Observable<VentaNodos> {
    // const paramVenta = JSON.parse(JSON.stringify(venta))
    const ventaCRUD = new Venta()

    ventaCRUD.ayudaInicial = venta.ayudaInicial,
    ventaCRUD.descuento = venta.descuento,
    ventaCRUD.enable = venta.enable,
    ventaCRUD.fechaCaida = venta.fechaCaida,
    ventaCRUD.fechaDesembolso = venta.fechaDesembolso,
    ventaCRUD.fechaEpp = venta.fechaEpp,
    ventaCRUD.fechaMinuta = venta.fechaMinuta,
    ventaCRUD.fechaRegistro = venta.fechaRegistro,
    ventaCRUD.fechaSeparacion = venta.fechaSeparacion,
    ventaCRUD.idCanal = venta.canal.idCanal,
    ventaCRUD.idCategoria = venta.categoria.idCategoria,
    ventaCRUD.idCliente = venta.cliente.idCliente,
    ventaCRUD.idEstadoVenta = venta.estadoVenta.idEstadoVenta,
    ventaCRUD.idFinanciamiento = venta.financiamiento.idFinanciamiento,
    ventaCRUD.idMotivo = venta.motivo.idMotivo,
    ventaCRUD.idProyecto = venta.idProyecto,
    ventaCRUD.idVendedor = venta.vendedor.idVendedor,
    ventaCRUD.idVenta = venta.idVenta,
    ventaCRUD.importe = venta.importe,
    ventaCRUD.total = venta.total

    //console.log('Objeto upventa')
    //console.log(ventaCRUD)
    //return
    return this.http
      .put(this.urlEndPoint + 'venta/' + venta.idVenta, ventaCRUD)
      .pipe(map((jsonReponse: any) => jsonReponse as VentaNodos))
  }

  fetchingTipoVista(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'tipovista/').pipe()
  }

  fetchingTipoDocumento(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'tipodocumento/').pipe()
  }

  getClienteById(idCliente: number): Observable<Cliente> {
    return this.http
      .get(this.urlEndPoint + 'cliente/' + idCliente)
      .pipe(map((jsonReponse: any) => jsonReponse as Cliente))
  }

  getFinanciamientoById(idFinanciamiento: number): Observable<Financiamiento> {
    return this.http
      .get(this.urlEndPoint + 'financiamiento/' + idFinanciamiento)
      .pipe(map((jsonReponse: any) => jsonReponse as Financiamiento))
  }

  getListaEstadosVenta(): Observable<any> {
    return this.http
      .get(this.urlEndPoint + 'estadoventa/')
      .pipe(map((jsonReponse: any) => jsonReponse))
  }

  getInmueblesByIdVenta(idVenta: number): Observable<any> {
    return this.http.get(this.urlEndPoint + 'ventainmueble/venta/' + idVenta).pipe(
      map((jsonResponse: any) => {
        return jsonResponse
      })
    )
  }

  getListaTipoInmuebles(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'tipoinmueble/').pipe(
      map((jsonResponse: any) => {
        return jsonResponse
      })
    )
  }
}
