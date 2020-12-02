import { Injectable } from '@angular/core'
import { Banco } from './banco'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class BancoService {
  private urlEndPoint: string = URL_BACKEND + 'banco/'

  constructor(private http: HttpClient, private router: Router) {}

    getBancos(): Observable<any> {
        return this.http.get(this.urlEndPoint).pipe(
        map((response: any) => {(response as Banco[]).map((banco) => {
            return banco;
            })
            return response
        })
    )}

    obtenerBancoPorId(idBanco): Observable<Banco> {
        return this.http.get<Banco>(this.urlEndPoint + '/' + idBanco)
    }

    agregar(banco: Banco): Observable<any> {
        return this.http.post<any>(this.urlEndPoint, banco).pipe(
            catchError((e) => {
                if (e.status === 400) {
                return throwError(e)
                }
            })
        )
    }

    actualizar(banco: Banco, idBanco: number): Observable<any> {
        return this.http.put<any>(this.urlEndPoint + '/' + idBanco, banco).pipe(
          catchError((e) => {
            if (e.status === 400) {
              return throwError(e)
            }
          })
        )
      }

    eliminar(id: number): Observable<Banco> {
        return this.http.delete<Banco>(this.urlEndPoint + id).pipe(
            catchError((e) => {
                return throwError(e)
            })
        )
    }

}