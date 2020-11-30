import { Injectable } from '@angular/core'
import { Periodocolaborador } from './periodocolaborador'
import { Periodocolaboradornodos } from './periodocolaboradornodos'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class PeriodocolaboradorService {
  private urlEndPoint: string = URL_BACKEND + 'periodocolaborador/'

  constructor(private http: HttpClient, private router: Router) {}

  getPeriodosPorColaborador(idColaborador: number): Observable<any> {
    return this.http.get(this.urlEndPoint + 'listarperido/' + idColaborador).pipe(
      map((jsonPeriodocolaboradorResponse: any) => {
        ;(jsonPeriodocolaboradorResponse as Periodocolaboradornodos[]).map((periodocolaboradornodos) => {
          return periodocolaboradornodos;
        })
        return jsonPeriodocolaboradorResponse
      })
    )
  }

  agregarPeriodoColaborador(periodocolaborador: Periodocolaborador): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, periodocolaborador).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  editarPeriodoColaborador(periodocolaborador: Periodocolaborador, idPeriodocolaborador: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + '/' + idPeriodocolaborador, periodocolaborador).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  eliminarPeriodoColaborador(idPeriodocolaborador: number): Observable<Periodocolaborador> {
    return this.http.delete<Periodocolaborador>(`${this.urlEndPoint}/${idPeriodocolaborador}`).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

}