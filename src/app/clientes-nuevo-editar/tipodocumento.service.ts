import { Injectable } from '@angular/core'
import { Tipodocumento } from './tipodocumento'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipodocumentoService {
  private urlEndPoint: string = URL_BACKEND + 'tipodocumento/'

  constructor(private http: HttpClient, private router: Router) {}

  getTipodocumento(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as Tipodocumento[]).map((Tipodocumento) => {
          return Tipodocumento
        })
        return data
      })
    )
  }
}
