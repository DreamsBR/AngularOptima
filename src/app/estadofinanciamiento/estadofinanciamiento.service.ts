import { Injectable } from '@angular/core'
import { Estadofinanciamiento } from './estadofinanciamiento'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class Estadofinanciamiento2Service {
  private urlEndPoint: string = URL_BACKEND + 'estadofinanciamiento/'

  constructor(private http: HttpClient, private router: Router) {}

    obtenerEstadofinanciamientos(): Observable<any> {
        return this.http.get(this.urlEndPoint).pipe(
        map((response: any) => {(response as Estadofinanciamiento[]).map((Estadofinanciamiento) => {
            return Estadofinanciamiento;
            })
            return response
        })
    )}

    obtenerEstadofinanciamientoPorId(idEstadofinanciamiento): Observable<Estadofinanciamiento> {
        return this.http.get<Estadofinanciamiento>(this.urlEndPoint + '/' + idEstadofinanciamiento)
    }

    agregar(Estadofinanciamiento: Estadofinanciamiento): Observable<any> {
        return this.http.post<any>(this.urlEndPoint, Estadofinanciamiento).pipe(
            catchError((e) => {
                if (e.status === 400) {
                return throwError(e)
                }
            })
        )
    }

    actualizar(Estadofinanciamiento: Estadofinanciamiento, idEstadofinanciamiento: number): Observable<any> {
        return this.http.put<any>(this.urlEndPoint + '/' + idEstadofinanciamiento, Estadofinanciamiento).pipe(
          catchError((e) => {
            if (e.status === 400) {
              return throwError(e)
            }
          })
        )
      }

    eliminar(id: number): Observable<Estadofinanciamiento> {
        return this.http.delete<Estadofinanciamiento>(this.urlEndPoint + id).pipe(
            catchError((e) => {
                return throwError(e)
            })
        )
    }

}