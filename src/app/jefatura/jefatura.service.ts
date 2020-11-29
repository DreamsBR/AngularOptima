import { Injectable } from '@angular/core'
import { Jefatura } from './jefatura'
import { Jefaturanodo } from './jefaturanodo'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class JefaturaService {
  private urlEndPoint: string = URL_BACKEND + 'jefatura/'

  constructor(private http: HttpClient, private router: Router) {}

  getJefaturaPorId(idJefatura:number): Observable<Jefaturanodo>{
    return this.http.get<Jefaturanodo>(this.urlEndPoint + '/' + idJefatura).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )}

  getJefaturas(page: number, idProyecto: number): Observable<any> {
    return this.http.get(this.urlEndPoint + 'page/' + page).pipe(
      map((jsonJefaturasResponse: any) => {
        ;(jsonJefaturasResponse.content as Jefatura[]).map((jefatura) => {
          return jefatura;
        })
        return jsonJefaturasResponse
      })
    )
  }

  eliminarJefatura(id: number): Observable<Jefatura> {
    return this.http.delete<Jefatura>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  agregarJefatura(jefatura: Jefatura): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, jefatura).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  editarJefatura(jefatura:Jefatura, idJefatura:number): Observable<Jefatura>{
    return this.http.put<Jefatura>(this.urlEndPoint + '/' + idJefatura, jefatura).pipe(
      catchError((e) => {
        if(e.status === 400){
          return throwError(e)}
      })
    )}

//   obtenerClientesPorDni(nrodoc): Observable<Cliente> {
//     return this.http.get<Cliente>(this.urlEndPoint + 'nroDocumento/' + nrodoc)
//   }

//   obtenerClientesPorId(idCliente): Observable<Cliente> {
//     return this.http.get<Cliente>(this.urlEndPoint + '/' + idCliente)
//   }



//   actualizarCliente(cliente: Cliente, idCliente: number): Observable<any> {
//     return this.http.put<any>(this.urlEndPoint + '/' + idCliente, cliente).pipe(
//       catchError((e) => {
//         if (e.status === 400) {
//           return throwError(e)
//         }
//       })
//     )
//   }

}