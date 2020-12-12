import { Injectable } from '@angular/core'
import { TipoInmuebleCategoria } from './tipoInmuebleCategoria'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipoInmuebleCategoriaService {
  private urlEndPoint: string = URL_BACKEND + 'tipoinmueblecategoria/'

  constructor(private http: HttpClient, private router: Router) {}

  getTipoInmuebleCategoria(id: number): Observable<any> {
    return this.http.get(`${this.urlEndPoint}tipoInmueble/${id}`).pipe(
      map((data: any) => {
        ;(data as TipoInmuebleCategoria[]).map((TipoVTipoInmuebleCategoriasta) => {
          return TipoInmuebleCategoria
        })

        return data
      })
    )
  }

  getTodosTipoInmuebleCategoria(): Observable<any> {
    return this.http.get(`${this.urlEndPoint}`).pipe(
      map((data: any) => {
        ;(data as TipoInmuebleCategoria[]).map((TipoVTipoInmuebleCategoriasta) => {
          return TipoInmuebleCategoria
        })

        return data
      })
    )
  }

  obtenerTipoInmuebleCategoriaPorId(idTipoInmuebleCategoria): Observable<TipoInmuebleCategoria> {
    return this.http.get<TipoInmuebleCategoria>(this.urlEndPoint + idTipoInmuebleCategoria)
  }

  agregar(tipoInmuebleCategoria: TipoInmuebleCategoria): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, tipoInmuebleCategoria).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  actualizar(tipoInmuebleCategoria: TipoInmuebleCategoria, idTipoInmuebleCategoria: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + idTipoInmuebleCategoria, tipoInmuebleCategoria).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }
}
