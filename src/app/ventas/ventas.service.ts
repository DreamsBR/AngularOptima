import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Venta } from './../ventas-proyecto-nuevo-editar/venta'

@Injectable()
export class VentaService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  fetchingTipoVista(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/tipovista/').pipe()
  }

  fetchingTipoDocumento(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/tipodocumento/').pipe()
    //return this.http.get('http://localhost:4000/usuarios/temp').pipe()
  }

  agregarVenta(venta: Venta): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + 'venta', venta).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

}
