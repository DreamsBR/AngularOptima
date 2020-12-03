import { Injectable } from '@angular/core'
import { Canal } from './canal'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class CanalesService {
  private urlEndPoint: string = URL_BACKEND + 'canal/'

  constructor(private http: HttpClient, private router: Router) {}

    obtenerCanales(): Observable<any> {
        return this.http.get(this.urlEndPoint).pipe(
        map((response: any) => {(response as Canal[]).map((canal) => {
            return canal;
            })
            return response
        })
    )}

    obtenerCanalPorId(idcanal): Observable<Canal> {
        return this.http.get<Canal>(this.urlEndPoint + idcanal)
    }

    agregar(canal: Canal): Observable<any> {
        return this.http.post<any>(this.urlEndPoint, canal).pipe(
            catchError((e) => {
                if (e.status === 400) {
                return throwError(e)
                }
            })
        )
    }

    actualizar(canal: Canal, idcanal: number): Observable<any> {
        return this.http.put<any>(this.urlEndPoint + idcanal, canal).pipe(
          catchError((e) => {
            if (e.status === 400) {
              return throwError(e)
            }
          })
        )
      }

    eliminar(id: number): Observable<Canal> {
        return this.http.delete<Canal>(this.urlEndPoint + id).pipe(
            catchError((e) => {
                return throwError(e)
            })
        )
    }

}