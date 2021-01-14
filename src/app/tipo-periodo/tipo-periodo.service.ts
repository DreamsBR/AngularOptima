import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { TipoPeriodo } from './tipo-periodo'
import { Clientenodo } from '../clientes/clientenodo'

@Injectable()
export class TipoPeriodoService {
  private urlEndPoint: string = URL_BACKEND + 'tipoperiodo'

  constructor(private http: HttpClient, private router: Router) {}

  getTiposPeriodo(): Observable<TipoPeriodo[]> {
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
  }
}
