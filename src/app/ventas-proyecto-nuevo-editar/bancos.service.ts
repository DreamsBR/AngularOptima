import { Injectable } from '@angular/core'
import { Bancos } from './bancos'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class BancosService {
  private urlEndPoint: string = URL_BACKEND + 'banco/'

  constructor(private http: HttpClient, private router: Router) {}

  getBancos(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as Bancos[]).map((Bancos) => {
          return Bancos
        })
        return data
      })
    )
  }
}