import { Injectable } from '@angular/core'
import { Tipoinmueblecategoria } from './Tipoinmueblecategoria'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipoinmueblecategoriaService {
  private urlEndPoint: string = URL_BACKEND + 'tipoinmueblecategoria/'

  constructor(private http: HttpClient, private router: Router) {}

  getTipoinmueblecategoria(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as Tipoinmueblecategoria[]).map((tipoinmueblecategoria) => {
          return tipoinmueblecategoria
        })
        return data
      })
    )
  }
}
