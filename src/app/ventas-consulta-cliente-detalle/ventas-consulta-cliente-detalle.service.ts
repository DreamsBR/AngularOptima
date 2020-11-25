import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Cliente } from '../clientes/cliente'
import { VentaNodos } from '../ventas/ventanodos'
import { Financiamiento } from '../financiamientos/financiamiento'

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
    const paramVenta = JSON.parse(JSON.stringify(venta))
    const upventa = {
      ayudaInicial: paramVenta.ayudaInicial,
      descuento: paramVenta.descuento,
      enable: paramVenta.enable,
      fechaCaida: paramVenta.fechaCaida,
      fechaDesembolso: paramVenta.fechaDesembolso,
      fechaEpp: paramVenta.fechaEpp,
      fechaMinuta: paramVenta.fechaMinuta,
      fechaSeparacion: paramVenta.fechaSeparacion,
      idCanal: paramVenta.canal.idCanal,
      idCategoria: paramVenta.categoria.idCategoria,
      idCliente: paramVenta.cliente.idCliente,
      idEstadoVenta: paramVenta.estadoVenta.idEstadoVenta,
      idFinanciamiento: paramVenta.financiamiento.idFinanciamiento,
      idMotivo: paramVenta.motivo.idMotivo,
      idProyecto: paramVenta.idProyecto,
      idVendedor: paramVenta.vendedor.idVendedor,
      idVenta: paramVenta.idVenta,
      importe: paramVenta.importe,
      total: paramVenta.total
    }
    //console.log('Objeto upventa')
    //console.log(upventa)
    //return
    return this.http
      .put(this.urlEndPoint + 'venta/' + venta.idVenta, upventa)
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
