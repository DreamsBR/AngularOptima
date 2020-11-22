import { Injectable } from '@angular/core'
import { Financiamiento } from './financiamiento'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class FinanciamientoService {
  private urlEndPoint: string = URL_BACKEND + 'financiamiento/'

  constructor(private http: HttpClient, private router: Router) {}

  agregarFinanciamiento(financiamiento: Financiamiento): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, financiamiento).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

}