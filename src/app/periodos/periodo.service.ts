import { Injectable } from '@angular/core'
import { Periodo } from './periodo'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { AuthService } from '../usuarios/auth.service'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class PeriodoService {
  private urlEndPoint: string = URL_BACKEND + 'periodo'

  constructor(private http: HttpClient, private router: Router) {}

  /*  private agregarAutorizathionHeader() {
     let token = this.authService.token;
     if (token != null) {
       return this.httpHeaders.append('Authorization', 'Bearer ' + token);
     }
     return this.httpHeaders;
   }
  */

  getPeriodos(page): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((data: any) => {
        ;(data.content as Periodo[]).map((periodo) => {
          periodo.fechaInicio = formatDate(periodo.fechaInicio, 'dd/MM/yyyy', 'en-US')
          periodo.fechaFin = formatDate(periodo.fechaFin, 'dd/MM/yyyy', 'en-US')
          return periodo
        })
        return data
      })
    )
  }

  getTodoPeriodos(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/').pipe(
      map((data: any) => {
        ;(data as Periodo[]).map((periodo) => {
          return periodo
        })
        return data
      })
    )
  }

  agregarPeriodo(periodo: Periodo): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, periodo).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  getAllPeriodos(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/').pipe()
  }
}

/*
  agregarCliente(cliente: Cliente): Observable<any> {

    return this.http.post<any>(this.urlEndPoint, cliente).pipe(
      catchError(e => {

        if (e.status === 400) {
          return throwError(e);
        }
      })
    );
  }

  getCliente(id: number): Observable<Cliente> {

    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401) {
          this.router.navigate(['/clientes']);
        }
        return throwError(e);
      })
    );
  }

  editarCliente(cliente: Cliente): Observable<Cliente> {

    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.idCliente}`, cliente).pipe(
      catchError(e => {
        if (e.status === 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    )
  }

  eliminarCliente(id: number): Observable<Cliente> {

    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        return throwError(e);
      }
      )
    );

  }

  subirFoto(archivo: File, idCliente): Observable<Cliente> {
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", idCliente);


    return this.http.post(`${this.urlEndPoint}/upload`, formData).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {
        return throwError(e);
      })
    );
  }

  getRegiones(): Observable<Region[]> {

    return this.http.get<Region[]>(this.urlEndPoint + '/regiones');



    //pipe(
    // catchError(e => {
    //   this.isAutorizado(e);
    //   return throwError(e);
    // })
    //;

  }

*/
