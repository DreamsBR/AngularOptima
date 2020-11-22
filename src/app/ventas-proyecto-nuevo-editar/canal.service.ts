import { Injectable } from '@angular/core'
import { Canal } from './canal'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class CanalService {
  private urlEndPoint: string = URL_BACKEND + 'canal/'

  constructor(private http: HttpClient, private router: Router) {}

  getCanal(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as Canal[]).map((Canal) => {
          return Canal
        })
        return data
      })
    )
  }
}