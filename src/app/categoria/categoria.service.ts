import { Injectable } from '@angular/core'
import { Categoria } from './categoria'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class Categoria2Service {
  private urlEndPoint: string = URL_BACKEND + 'categoria/'

  constructor(private http: HttpClient, private router: Router) {}

    obtenerCategorias(): Observable<any> {
        return this.http.get(this.urlEndPoint).pipe(
        map((response: any) => {(response as Categoria[]).map((Categoria) => {
            return Categoria;
            })
            return response
        })
    )}

    obtenerCategoriaPorId(idCategoria): Observable<Categoria> {
        return this.http.get<Categoria>(this.urlEndPoint + idCategoria)
    }

    agregar(Categoria: Categoria): Observable<any> {
        return this.http.post<any>(this.urlEndPoint, Categoria).pipe(
            catchError((e) => {
                if (e.status === 400) {
                return throwError(e)
                }
            })
        )
    }

    actualizar(Categoria: Categoria, idCategoria: number): Observable<any> {
        return this.http.put<any>(this.urlEndPoint + idCategoria, Categoria).pipe(
          catchError((e) => {
            if (e.status === 400) {
              return throwError(e)
            }
          })
        )
      }

    eliminar(id: number): Observable<Categoria> {
        return this.http.delete<Categoria>(this.urlEndPoint + id).pipe(
            catchError((e) => {
                return throwError(e)
            })
        )
    }

}