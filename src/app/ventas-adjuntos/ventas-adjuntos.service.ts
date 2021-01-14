import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { TipoPeriodo } from '../tipo-periodo/tipo-periodo'
import { Clientenodo } from '../clientes/clientenodo'
import { VentaAttached } from './venta-attached'

@Injectable()
export class VentasAdjuntosService {
  private urlEndPoint: string = URL_BACKEND + 'ventaattached'

  constructor(private http: HttpClient, private router: Router) {}

  getAttachedByVenta(idVenta: number): Observable<VentaAttached[]> {
    return this.http.get<VentaAttached[]>(`${this.urlEndPoint}/byidventa/${idVenta}`).pipe()
  }

  postAttached(ventaAttached: VentaAttached): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, ventaAttached).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  deleteAttached(ventaAttached: VentaAttached): Observable<any> {
    return this.http.delete(this.urlEndPoint + '/' + ventaAttached.idVentaAttached).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  /* getTiposPeriodo(): Observable<TipoPeriodo[]> {
    return this.http.get<TipoPeriodo[]>(`${this.urlEndPoint}/`).pipe()
  }

  agregarTipoPeriodo(tipoperiodo: TipoPeriodo): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, tipoperiodo).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  actualizarTipoPeriodo(tipoperiodo: TipoPeriodo): Observable<any> {
    return this.http.put(this.urlEndPoint + '/' + tipoperiodo.idTipoPeriodo, tipoperiodo).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  eliminarPeriodo(tipoperiodo: TipoPeriodo): Observable<any> {
    return this.http.delete(this.urlEndPoint + '/' + tipoperiodo.idTipoPeriodo).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  } */
}
