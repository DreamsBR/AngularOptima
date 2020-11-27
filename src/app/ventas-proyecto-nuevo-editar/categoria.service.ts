import { Injectable } from '@angular/core'
import { Categoria } from './categoria'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class CategoriaService {
  private urlEndPoint: string = URL_BACKEND + 'categoria'

  constructor(private http: HttpClient, private router: Router) {}


  getCategoriaMantenimiento(page): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((data: any) => {
        ;(data as Categoria[]).map((categoria) => {
          return categoria
        })
        return data
      })
    )
  }





  getCategoria(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/').pipe(
      map((data: any) => {
        ;(data as Categoria[]).map((categoria) => {
          return categoria
        })
        return data
      })
    )
  }
}
