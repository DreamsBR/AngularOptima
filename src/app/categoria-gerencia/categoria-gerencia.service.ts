import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { CategoriaGerencia } from './categoria-gerencia'

@Injectable()
export class CategoriaGerenciaService {
  private urlEndPoint: string = URL_BACKEND + 'categoriagerencia'

  constructor(private http: HttpClient, private router: Router) {}

  getCategoriasGerencia(): Observable<CategoriaGerencia[]> {
    return this.http
      .get(this.urlEndPoint + '/')
      .pipe(map((response: any) => response as CategoriaGerencia[]))
  }

  obtenerCategoriaGerenciaPorId(idCategoriaGerencia): Observable<CategoriaGerencia> {
    return this.http.get<CategoriaGerencia>(this.urlEndPoint + '/' + idCategoriaGerencia)
  }

  agregar(categoriagerencia: CategoriaGerencia): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + '/', categoriagerencia).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  actualizar(categoriagerencia: CategoriaGerencia, idCategoriaGerencia: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + '/' + idCategoriaGerencia, categoriagerencia).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  eliminar(id: number): Observable<CategoriaGerencia> {
    return this.http.delete<any>(this.urlEndPoint + '/' + id).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }
}
