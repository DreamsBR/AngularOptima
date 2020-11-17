import { Injectable } from '@angular/core'
import { Proyecto } from './proyecto'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class ProyectoService {
  private urlEndPoint: string = URL_BACKEND + 'proyecto/'

  constructor(private http: HttpClient, private router: Router) {}

  getProyectos(page): Observable<any> {
    console.log('sdfsdfsdfs')
    return this.http.get(this.urlEndPoint + 'page/' + '0').pipe(
      map((jsonProyectosResponse: any) => {
        (jsonProyectosResponse.content as Proyecto[]).map((proyecto) => {
          return proyecto
        })
        return jsonProyectosResponse
      })
    )
  }
}
