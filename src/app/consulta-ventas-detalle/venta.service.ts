import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { Venta } from './venta'





@Injectable()
export class ConsultaVentaService {
  private urlEndPoint : string = URL_BACKEND + 'venta/'

  constructor(
    private http:HttpClient,
    private route:Route
  ){}

  getVenta(): Observable<any>{
    return this.http.get(this.urlEndPoint).pipe(
      map((data:any) => {
        ;(data as Venta[]).map((Venta) => {
          return Venta
        })
        return data
      })
    )

  }

}
