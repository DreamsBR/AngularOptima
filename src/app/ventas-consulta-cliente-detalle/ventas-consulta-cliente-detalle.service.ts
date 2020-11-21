import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Cliente } from '../clientes/cliente'
import { Venta } from '../ventas/venta'
import { Financiamiento } from '../financiamientos/financiamiento'

@Injectable()
export class VentaConsultaClienteDetalleService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  fetchingInfoVenta(idVenta: number): Observable<Venta> {
    return this.http
      .get(this.urlEndPoint + 'venta/' + idVenta)
      .pipe(map((jsonReponse: any) => jsonReponse as Venta))
  }

  fetchingTipoVista(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'tipovista/').pipe()
  }

  fetchingTipoDocumento(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'tipodocumento/').pipe()
  }

  getClienteById(idCliente: number): Observable<Cliente> {
    return this.http
      .get(this.urlEndPoint + 'cliente/' + idCliente)
      .pipe(map((jsonReponse: any) => jsonReponse as Cliente))
  }

  getFinanciamientoById(idFinanciamiento: number): Observable<Financiamiento> {
    return this.http
      .get(this.urlEndPoint + 'financiamiento/' + idFinanciamiento)
      .pipe(map((jsonReponse: any) => jsonReponse as Financiamiento))
  }
}
