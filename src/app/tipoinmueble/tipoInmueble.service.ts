import { Injectable } from '@angular/core'
import { TipoInmueble } from './tipoInmueble'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipoInmuebleService {
  private urlEndPoint: string = URL_BACKEND + 'tipoinmueble/'

  constructor(private http: HttpClient, private router: Router) {}

  getTipoInmueble(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as TipoInmueble[]).map((TipoInmueble) => {
          return TipoInmueble
        })
        return data
      })
    )
  }

  obtenerTipoInmueblePorId(idTipoInmueble): Observable<TipoInmueble> {
    return this.http.get<TipoInmueble>(this.urlEndPoint + idTipoInmueble)
  }

  agregar(tipoInmueble: TipoInmueble): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, tipoInmueble).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  actualizar(tipoInmueble: TipoInmueble, idTipoInmueble: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + idTipoInmueble, tipoInmueble).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }
}
