import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Cliente } from '../clientes/cliente'

@Injectable()
export class VentaConsultaClienteDetalleService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  fetchingTipoVista(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/tipovista/').pipe()
  }

  fetchingTipoDocumento(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/tipodocumento/').pipe()
  }

  getClienteById(idCliente: number): Observable<Cliente> {
    return this.http
      .get(this.urlEndPoint + '/cliente/' + idCliente)
      .pipe(map((jsonReponse: any) => jsonReponse as Cliente))
  }
}
