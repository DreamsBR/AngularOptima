import { Injectable } from '@angular/core';
import { Cliente } from './Cliente'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { URL_BACKEND } from '../config/config';
import { URL_BACKEND_DEMO } from '../config/config';


@Injectable()
export class ClienteService {

    constructor(private http: HttpClient, private router: Router) { }

    getClientes(): Observable<any> {

        // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
        //     map((jsonColaboradorResponse: any) => {
        //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
        //             colaborador.nombre = colaborador.nombre.toUpperCase();
        //             return colaborador;
        //         });
        //         return jsonColaboradorResponse;
        //     })
        // );

        return this.http.get(URL_BACKEND_DEMO + 'clientes.json').pipe(
            map((jsonClienteResponse: any) => {
                (jsonClienteResponse as Cliente[]).map(cliente => {
                    cliente.nombre = cliente.nombre.toUpperCase();
                    cliente.apepaterno = cliente.apepaterno.toUpperCase();
                    cliente.apematerno = cliente.apematerno.toUpperCase();
                    return cliente;
                });
                return jsonClienteResponse;
            })
        );

    }
}