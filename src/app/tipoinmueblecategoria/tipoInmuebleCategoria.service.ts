import { Injectable } from '@angular/core'
import { TipoInmuebleCategoria } from './tipoInmuebleCategoria'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipoInmuebleCategoriaService{

    private urlEndPoint: string = URL_BACKEND + 'tipoinmueblecategoria/tipoInmueble/'

    constructor(private http: HttpClient, private router: Router) {}

    getTipoInmuebleCategoria(id:number): Observable<any> {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(
          map((data: any) => {
            ;(data as TipoInmuebleCategoria[]).map((TipoVTipoInmuebleCategoriasta) => {
              return TipoInmuebleCategoria
            })

            return data
          })
        )
      }
     
}