import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Venta } from './../ventas-proyecto-nuevo-editar/venta'
import {VentaNodos} from './ventanodos'
@Injectable()
export class VentaService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  fetchingTipoVista(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/tipovista/').pipe()
  }

  fetchingTipoDocumento(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/tipodocumento/').pipe()
  }

  getVentas(page): Observable<any> {
    return this.http.get(this.urlEndPoint + 'page/' + page).pipe(
      map((jsonVentasResponse: any) => {
        ;(jsonVentasResponse.content as Venta[]).map((venta) => {


          return venta
        })
        return jsonVentasResponse
      })
    )
  }

  agregarVenta(venta: Venta): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + 'venta', venta).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  editarVenta(venta: Venta, idVenta: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + 'venta/' + idVenta, venta).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  getVentasByProyecto(idProyecto, page): Observable<any> {
    return this.http.get(this.urlEndPoint + 'venta/byproyecto/' + idProyecto + '/' + page).pipe(
      map((jsonVentasResponse: any) => {
        ;(jsonVentasResponse.content as VentaNodos[]).map((VentaNodos) => {
          console.log(jsonVentasResponse)
/*
          VentaNodos.ayudaInicial = jsonVentasResponse.ayudaInicial
          VentaNodos.descuento = jsonVentasResponse.descuento
          VentaNodos.enable = jsonVentasResponse.enable
          VentaNodos.fechaCaida = jsonVentasResponse.fechaCaida
          VentaNodos.fechaDesembolso = jsonVentasResponse.fechaDesembolso
          VentaNodos.fechaMinuta = jsonVentasResponse.fechaMinuta
          VentaNodos.fechaSeparacion = jsonVentasResponse.fechaSeparacion
          VentaNodos.fechaEpp = jsonVentasResponse.fechaEpp
          VentaNodos.canal.idCanal = jsonVentasResponse.idCanal
          VentaNodos.categoria.idCategoria = jsonVentasResponse.idCategoria
          VentaNodos.cliente.idCliente = jsonVentasResponse.idCliente
          VentaNodos.estadoVenta.idEstadoVenta = jsonVentasResponse.idEstadoVenta
          VentaNodos.financiamiento.idFinanciamiento = jsonVentasResponse.idFinanciamiento
          VentaNodos.motivo.idMotivo = jsonVentasResponse.idMotivo
          VentaNodos.vendedor.idVendedor = jsonVentasResponse.idVendedor
          VentaNodos.idVenta = jsonVentasResponse.idVenta
          VentaNodos.importe = jsonVentasResponse.importe
          VentaNodos.total = jsonVentasResponse.total
*/
          return VentaNodos
        })
        return jsonVentasResponse
      })
    )
  }

  getVentasById(idVenta): Observable<any> {
    return this.http.get(this.urlEndPoint + 'venta/' + idVenta).pipe()
  }

}
