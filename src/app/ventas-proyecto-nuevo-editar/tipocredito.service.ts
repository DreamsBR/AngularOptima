import { Injectable } from '@angular/core'
import { Tipocredito } from './tipocredito'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipocreditoService {
  private urlEndPoint: string = URL_BACKEND + 'tipocredito/'

  constructor(private http: HttpClient, private router: Router) {}

  getTipoCredito(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as Tipocredito[]).map((Tipocredito) => {
          return Tipocredito
        })
        return data
      })
    )
  }
}