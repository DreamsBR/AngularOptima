import { Injectable } from '@angular/core'
import { Motivo } from './motivo'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class MotivoService {
  private urlEndPoint: string = URL_BACKEND + 'motivo/'

  constructor(private http: HttpClient, private router: Router) {}

  getMotivos(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as Motivo[]).map((Motivo) => {
          return Motivo
        })
        return data
      })
    )
  }
}