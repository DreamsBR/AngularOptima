import { Injectable } from '@angular/core'
import { Proyecto } from './proyecto'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class ProyectoService {
  private urlEndPoint: string = URL_BACKEND + 'proyecto'

  constructor(private http: HttpClient, private router: Router) {}

  getProyectos(page): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((jsonProyectosResponse: any) => {
        /*const customList = (jsonProyectosResponse.content as Proyecto[]).map((proyecto) => {
          return proyecto
        })*/
        return jsonProyectosResponse
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

  getProyectosById(proyecto: Proyecto): Observable<any> {
    return this.http.get(this.urlEndPoint + '/' + proyecto.idProyecto).pipe(
      map((jsonProyectosResponse: any) => {
        console.log('respondiendo')
        return jsonProyectosResponse
      })
    )
  }
}
