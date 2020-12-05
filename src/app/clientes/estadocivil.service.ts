import { Injectable } from '@angular/core'
import { Estadocivil } from './estadocivil'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { URL_BACKEND } from '../config/config'
import { Router } from '@angular/router'

@Injectable()
export class EstadocivilService {
  private urlEndPoint: string = URL_BACKEND + 'estadocivil/'

  constructor(private http: HttpClient, private router: Router) {}

  getEstadocivil(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any) => {
        ;(data as Estadocivil[]).map((Estadocivil) => {
          return Estadocivil
        })
        return data
      })
    )
  }
}
