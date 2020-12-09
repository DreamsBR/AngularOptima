import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Venta } from './../ventas-proyecto-nuevo-editar/venta'
import {VentaNodos} from './ventanodos'
@Injectable()
export class VentaService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  fetchingTipoVista(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'tipovista/').pipe()
  }


  fetchingTipoDocumento(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'tipodocumento/').pipe()
  }


  getVentas(page): Observable<any> {
    return this.http.get(this.urlEndPoint + 'page/' + page).pipe(
      map((jsonVentasResponse: any) => {
        ;(jsonVentasResponse.content as Venta[]).map((venta) => {
          return venta
        })
        return jsonVentasResponse
      })
    )
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


  editarVenta(venta: Venta, idVenta: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + 'venta/' + idVenta, venta).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  getVentasByProyecto(idProyecto, page): Observable<any> {
    return this.http.get(this.urlEndPoint + 'venta/byproyecto/' + idProyecto + '/' + page).pipe(
      map((jsonVentasResponse: any) => {
        ;(jsonVentasResponse.content as VentaNodos[]).map((VentaNodos) => {
          return VentaNodos
        })
        return jsonVentasResponse
      })
    )
  }

  getVentasByProyectoEstadoFeciniFecfin(idProyecto, idEstadoVenta, fechaini, fechafin): Observable<any> {
    return this.http.get(this.urlEndPoint + 'venta/byproyectoandestadorange/' + idProyecto + '/' + idEstadoVenta + '/' + fechaini + '/' + fechafin).pipe(
      map((jsonVentasResponse: any) => {
        ;(jsonVentasResponse as VentaNodos[]).map((VentaNodos) => {
          return VentaNodos
        })
        return jsonVentasResponse
      })
    )
  }


  getVentasPorDni(cocli, page, count){
      return this.http.get(this.urlEndPoint + 'venta/bycliente/' + cocli +'/'+ page +'/'+ count).pipe(
        map((jsonVentasResponse: any) => {
          ;(jsonVentasResponse.content as VentaNodos[]).map((VentaNodos) => {
            return VentaNodos
          })
          return jsonVentasResponse
        })
      )
  }



  getVentasProyectoPorFecha(idProyecto, fechaini, fechafin):Observable<any>{
    return this.http.get(this.urlEndPoint + 'venta/byrange/'+ idProyecto + '/'+ fechaini+'/' +fechafin) .pipe(
      map((jsonResponse: any) =>{
        ;(jsonResponse as VentaNodos[]).map((VentaNodos) => {
          return VentaNodos
        })
        return jsonResponse
      })
      )}




  getVentasById(idVenta): Observable<any> {
    return this.http.get(this.urlEndPoint + 'venta/' + idVenta).pipe()
  }

}
