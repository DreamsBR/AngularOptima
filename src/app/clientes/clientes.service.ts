import { Injectable } from '@angular/core';
import { Cliente } from './cliente'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND_DEMO } from '../config/config';

@Injectable()
export class ClienteService {

    constructor(private http: HttpClient, private router: Router) { }

    getClientes(): Observable<any> {

        return this.http.get(URL_BACKEND_DEMO + 'clientes.json').pipe(
            map((jsonClienteResponse: any) => {
                (jsonClienteResponse as Cliente[]).forEach(cliente => {
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