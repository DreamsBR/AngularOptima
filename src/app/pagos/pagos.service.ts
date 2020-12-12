import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Pago } from '../pagos/pago'
@Injectable()
export class PagosService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  postGuardarPago(pago: Pago): Observable<Pago> {
    return this.http
      .post<Pago>(this.urlEndPoint + 'pago/', pago)
      .pipe(map((jsonReponse: any) => jsonReponse as Pago))
  }

  updatePago(pago: Pago): Observable<Pago> {
    return this.http
      .put<Pago>(this.urlEndPoint + 'pago/' + pago.idPago, pago)
      .pipe(map((jsonReponse: any) => jsonReponse as Pago))
  }

  deletePago(pago: Pago): Observable<Pago> {
    return this.http
      .delete<Pago>(this.urlEndPoint + 'pago/' + pago.idPago)
      .pipe(map((jsonReponse: any) => jsonReponse as Pago))
  }

  getPagosByIdVenta(idVenta: number): Observable<Pago[]> {
    return this.http
      .get<Pago>(this.urlEndPoint + 'pago/venta/' + idVenta)
      .pipe(map((jsonReponse: any) => jsonReponse as Pago[]))
  }
}
