import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Cliente } from '../clientes/cliente'
import { VentaNodos } from '../ventas/ventanodos'
import { Financiamiento } from '../financiamientos/financiamiento'

@Injectable()
export class UtilService {
  private urlEndPoint: string = URL_BACKEND + 'reporte'

  constructor(private http: HttpClient, private router: Router) {}

  /*getConsolidadoVentas(idGerencia: number, idPeriodo: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/consolidadoventas/' + idGerencia + '/' + idPeriodo).pipe()
  }*/

  postUploadFile(base64fileUgly: string, fileName: string) {
    const base64Clean = base64fileUgly.split(',')[1]
    return this.http
      .post<any>(URL_BACKEND + 'util/upload', {
        base64: base64Clean,
        fileName: fileName
      })
      .pipe()
  }

  postDownloadBase64File(fileName: string) {
    return this.http
      .post<any>(URL_BACKEND + 'util/download', {
        fileName: fileName
      })
      .pipe()
  }
}
