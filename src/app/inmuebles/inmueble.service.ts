import { Injectable } from '@angular/core'
import { Inmueble } from './inmueble'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class InmuebleService {
  private urlEndPoint: string = URL_BACKEND + 'inmueble'

  constructor(private http: HttpClient, private router: Router) {}

  getInmuebles(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((jsonInmueblesResponse: any) => {
        return jsonInmueblesResponse
      })
    )
  }

  getInmueblesByIdProyecto(idProyecto: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/listarporproyecto/' + idProyecto).pipe(
      map((jsonInmueblesResponse: any) => {
        return jsonInmueblesResponse
      })
    )
  }

  getInmueblesByIdInmueble(idInmueble: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/' + idInmueble).pipe(
      map((jsonInmueblesResponse: any) => {
        return jsonInmueblesResponse
      })
    )
  }

  crearInmueble(inmueble: Inmueble): Observable<any> {
    return this.http.post<Inmueble>(this.urlEndPoint, inmueble).pipe(
      map((resp: any) => {
        console.log(resp)
        return resp
      })
    )
  }

  getInmueblesByListarPorCategoria(
    idProyecto: number,
    idTipoInmueble: number,
    idTipoInmuebleCategoria: number
  ): Observable<any> {
    return this.http
      .get(
        this.urlEndPoint +
          '/listarporcategoria/' +
          idProyecto +
          '/' +
          idTipoInmueble +
          '/' +
          idTipoInmuebleCategoria
      )
      .pipe(
        map((jsonInmueblesResponse: any) => {
          return jsonInmueblesResponse
        })
      )
  }
}
