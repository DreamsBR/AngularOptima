import { Injectable } from '@angular/core'
import { TipoVista } from './tipoVista'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipoVistaService{

    private urlEndPoint: string = URL_BACKEND + 'tipovista/'

    constructor(private http: HttpClient, private router: Router) {}

    getTipoVista(): Observable<any> {
        return this.http.get(this.urlEndPoint).pipe(
          map((data: any) => {
            ;(data as TipoVista[]).map((TipoVista) => {
              return TipoVista
            })
            return data
          })
        )
      }
     
}