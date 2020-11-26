import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { URL_BACKEND } from '../config/config'
import { Gerencia } from "./../gerencias/gerencia";

@Injectable()
export class GerenciaService{

  private urlEndPoint : string = URL_BACKEND + 'gerencia/'
  constructor( private http:HttpClient ){}

  getGerentes(page):Observable<any>{
  return this.http.get(this.urlEndPoint + 'page/' + page).pipe(
    map((jsonGerenteResponse:any) => {
      ;(jsonGerenteResponse.content as Gerencia[]).map((gerencia) => {
        gerencia.nombre = gerencia.nombre.toUpperCase()
        return gerencia;
      })
      return jsonGerenteResponse
    })
  )}

  eliminarGerencia(id:number): Observable<Gerencia>{
    return this.http.delete<Gerencia>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }
  agregarGerencia(gerencia:Gerencia): Observable<any>{
    return this.http.post<any>(this.urlEndPoint, gerencia).pipe(
    catchError((e) => {
        return throwError(e)
    })
  )}

}
