import { Injectable } from '@angular/core'
import { Proyecto } from './proyecto'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class ProyectoService {
  private urlEndPoint: string = URL_BACKEND + 'proyecto'
  constructor(private http: HttpClient, private router: Router) {}


  getProyectos(page): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((jsonProyectosResponse: any) => {
         (jsonProyectosResponse.content as Proyecto[]).map((
             proyecto) => {
               proyecto.nombre = proyecto.nombre.toUpperCase();
          return proyecto;
        })
        return jsonProyectosResponse;
      })
    )
  }


  newProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<Proyecto>(this.urlEndPoint, proyecto).pipe(
      map((resp: any) => {
        console.log(resp)
        return resp
      })
    )
  }

<<<<<<< HEAD
=======
  deleteProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.delete<Proyecto>(this.urlEndPoint + '/' + proyecto.idProyecto).pipe()
  }
>>>>>>> 2ef74529641582e9530113ebfaa5d88f828667e7

  getProyectosById(proyecto: Proyecto): Observable<any> {
    return this.http.get(this.urlEndPoint + '/' + proyecto.idProyecto).pipe(
      map((jsonProyectosResponse: any) => {
        console.log('respondiendo')
        return jsonProyectosResponse
      })
    )}


    eliminarProyecto(id:number):Observable<Proyecto>{
      return this.http.delete<Proyecto>(`${this.urlEndPoint}/${id}`).pipe(
        catchError((e) => {
          return throwError(e)
        })
      )}
}
