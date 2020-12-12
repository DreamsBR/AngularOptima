import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Gerenciaproyecto } from './gerenciaproyecto'

@Injectable()
export class GerenciaproyectoService {
  private urlEndPoint: string = URL_BACKEND + 'gerenciaproyecto'

  constructor(private http: HttpClient, private router: Router) {}

  getProyectosByIdGerencia(idGerencia: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/' + idGerencia).pipe()
  }

  getProyectosByIdGerencia2(idGerencia: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/listarproyectos/' + idGerencia ).pipe()
  }

  agregarProyectosGerencia(gerenciaproyecto:Gerenciaproyecto): Observable<Gerenciaproyecto>{
    return this.http.post<Gerenciaproyecto>(this.urlEndPoint, gerenciaproyecto).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

  editarProyectosGerencia(gerenciaproyecto:Gerenciaproyecto, idProyectogerencia: number): Observable<Gerenciaproyecto>{
    return this.http.put<Gerenciaproyecto>(this.urlEndPoint + '/' + idProyectogerencia, gerenciaproyecto).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

  eliminarProyectosGerencia(idProyectogerencia: number): Observable<Gerenciaproyecto>{
    return this.http.delete<Gerenciaproyecto>(this.urlEndPoint + '/' + idProyectogerencia).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

}
