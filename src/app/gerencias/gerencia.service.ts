import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { PeriodoGerencia } from '../periodo-gerencia/periodogerencia';
import { Gerencia } from "./gerencia";
import { Gerencia2 } from "./gerencia2";

@Injectable()
export class GerenciaService {

  private urlEndPoint : string = URL_BACKEND + 'gerencia/';

  constructor(
    private http:HttpClient
  ){}

  geGerenciasPorPagina(page):Observable<any>{
    return this.http.get(this.urlEndPoint + 'page/' + page + '/16').pipe(
      map((jsonGerenteResponse:any) => {
        ;(jsonGerenteResponse.content as Gerencia[]).map((gerencia) => {
          let ininom = gerencia.colaborador.nombres.substr(0,1)
          let iniape = gerencia.colaborador.apellidos.substr(0,1)
          gerencia.iniciales = ininom.toUpperCase() + iniape.toUpperCase()
          return gerencia;
        })
        return jsonGerenteResponse
      })
    )}

  geGerenciasPorId(idGerencia:number): Observable<Gerencia>{
    return this.http.get<Gerencia>(this.urlEndPoint + idGerencia).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )}

  eliminarGerencia(id:number): Observable<Gerencia>{
    return this.http.delete<Gerencia>(this.urlEndPoint + id).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )}

  agregarGerencia(gerencia:Gerencia2): Observable<Gerencia>{
    return this.http.post<Gerencia>(this.urlEndPoint, gerencia).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

  editarGerencia(gerencia:Gerencia2, idGerencia:number): Observable<Gerencia>{
    return this.http.put<Gerencia>(this.urlEndPoint + idGerencia, gerencia).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

  agregarPeriodoMeta(gerenciaPerio:PeriodoGerencia){
    return this.http.post<PeriodoGerencia>(this.urlEndPoint, PeriodoGerencia).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)
        }
      })
    )}

  getAllGerencias(): Observable<any> {
  return this.http
    .get(this.urlEndPoint)
    .pipe(map((jsonGerenteResponse: any) => jsonGerenteResponse as Gerencia[]))
  }

}
