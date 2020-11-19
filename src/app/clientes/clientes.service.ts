import { Injectable } from '@angular/core';
import { Cliente } from './cliente'
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND } from '../config/config';

@Injectable()
export class ClienteService {

    private urlEndPoint: string = URL_BACKEND + 'cliente/';

    constructor(private http: HttpClient, private router: Router) { }

    getClientes(page): Observable<any> {
        return this.http.get(this.urlEndPoint + 'page/' + page).pipe(
            map((jsonClientesResponse: any) => {
            (jsonClientesResponse.content as Cliente[]).map(cliente => {
                cliente.nombres = cliente.nombres.toUpperCase();
                return cliente;
            });
            return jsonClientesResponse;
            })
        );
    }

    eliminarCliente(id: number): Observable<Cliente> {
        return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
            catchError(e => {
                return throwError(e);
            }
            )
        );
    }

    agregarCliente(cliente: Cliente): Observable<any> {
        return this.http.post<any>(this.urlEndPoint, cliente).pipe(
          catchError(e => {

            if (e.status === 400) {
              return throwError(e);
            }
          })
        );
      }

}
