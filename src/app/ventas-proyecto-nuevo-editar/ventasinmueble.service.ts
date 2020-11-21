import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Ventainmueble } from './../ventas-proyecto-nuevo-editar/ventainmueble'

@Injectable()
export class VentainmuebleService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  agregarVentainmueble(ventainmueble: Ventainmueble): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + 'ventainmueble', ventainmueble).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

}