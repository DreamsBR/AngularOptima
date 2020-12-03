import { Injectable } from '@angular/core'
import { Estadoventa } from './estadoventa'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class Estadoventa2Service {
  private urlEndPoint: string = URL_BACKEND + 'estadoventa/'

  constructor(private http: HttpClient, private router: Router) {}

    obtenerEstadoventas(): Observable<any> {
        return this.http.get(this.urlEndPoint).pipe(
        map((response: any) => {(response as Estadoventa[]).map((Estadoventa) => {
            return Estadoventa;
            })
            return response
        })
    )}

    obtenerEstadoventaPorId(idEstadoventa): Observable<Estadoventa> {
        return this.http.get<Estadoventa>(this.urlEndPoint + idEstadoventa)
    }

    agregar(Estadoventa: Estadoventa): Observable<any> {
        return this.http.post<any>(this.urlEndPoint, Estadoventa).pipe(
            catchError((e) => {
                if (e.status === 400) {
                return throwError(e)
                }
            })
        )
    }

    actualizar(Estadoventa: Estadoventa, idEstadoventa: number): Observable<any> {
        return this.http.put<any>(this.urlEndPoint + idEstadoventa, Estadoventa).pipe(
          catchError((e) => {
            if (e.status === 400) {
              return throwError(e)
            }
          })
        )
      }

    eliminar(id: number): Observable<Estadoventa> {
        return this.http.delete<Estadoventa>(this.urlEndPoint + id).pipe(
            catchError((e) => {
                return throwError(e)
            })
        )
    }

}