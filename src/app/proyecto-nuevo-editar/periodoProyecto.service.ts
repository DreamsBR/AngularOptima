import { HttpClient } from '@angular/common/http';
import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { PeriodoGerencia } from '../periodo-gerencia/periodogerencia';
import { PeriodoProyecto } from '../proyectos/periodoproyecto';

@Injectable()
export class PeridoProyectoService{
  private urlEndPoint: string= URL_BACKEND + 'periodoproyecto'
  constructor (private http: HttpClient, private router: Router){}

  getPeriodoByIdProyecto(idProyecto: number ):Observable<any>{
    return this.http.get(this.urlEndPoint + '/periodoproyecto/' + idProyecto)
  }


  agregarPeriodoProyecto(periodoProyecto:PeriodoProyecto) : Observable<PeriodoProyecto>{
    return this.http.post<PeriodoProyecto>(this.urlEndPoint, periodoProyecto).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)
        }
      })
    )
  }

  eliminarPeriodoGerencia(idPeriodoProyecto: number): Observable<PeriodoProyecto>{
    return this.http.delete<PeriodoProyecto>(this.urlEndPoint + '/' + idPeriodoProyecto).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}


    editarPeriodoGerencia(periodoGerencia:PeriodoProyecto, idPeriodogerencia: number): Observable<PeriodoProyecto>{
      return this.http.put<PeriodoProyecto>(this.urlEndPoint + '/' + idPeriodogerencia, periodoGerencia).pipe(
        catchError((e) => {
          if(e.status === 400){
            return throwError(e)}
        })
      )}

}
