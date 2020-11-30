import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { AuthService } from '../usuarios/auth.service'
import { URL_BACKEND } from '../config/config'
import { PeriodoGerencia2 } from './periodogerencia2'

@Injectable()
export class PeriodoGerenciaService {
  private urlEndPoint: string = URL_BACKEND + 'periodogerencia'

  constructor(private http: HttpClient, private router: Router) {}

  getPeriodoByIdGerencia(idGerencia: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/listarperiodos/' + idGerencia).pipe()
  }

  agregarPeriodoGerencia(periodoGerencia:PeriodoGerencia2): Observable<PeriodoGerencia2>{
    return this.http.post<PeriodoGerencia2>(this.urlEndPoint, periodoGerencia).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}
  
  editarPeriodoGerencia(periodoGerencia:PeriodoGerencia2, idPeriodogerencia: number): Observable<PeriodoGerencia2>{
    return this.http.put<PeriodoGerencia2>(this.urlEndPoint + '/' + idPeriodogerencia, periodoGerencia).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

  eliminarPeriodoGerencia(idPeriodogerencia: number): Observable<PeriodoGerencia2>{
    return this.http.delete<PeriodoGerencia2>(this.urlEndPoint + '/' + idPeriodogerencia).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

}
