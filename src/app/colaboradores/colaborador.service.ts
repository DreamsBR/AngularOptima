import { Injectable } from '@angular/core';
import { Colaborador } from './Colaborador'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { URL_BACKEND } from '../config/config';
import { URL_BACKEND_DEMO } from '../config/config';


@Injectable()
export class ColaboradorService {

    constructor(private http: HttpClient, private router: Router) { }

    getColaboradores(): Observable<any> {

        // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
        //     map((jsonColaboradorResponse: any) => {
        //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
        //             colaborador.nombre = colaborador.nombre.toUpperCase();
        //             return colaborador;
        //         });
        //         return jsonColaboradorResponse;
        //     })
        // );

        return this.http.get(URL_BACKEND_DEMO + 'colaboradores.json').pipe(
            map((jsonColaboradorResponse: any) => {
                (jsonColaboradorResponse as Colaborador[]).forEach(colaborador => {
                    colaborador.nombre = colaborador.nombre.toUpperCase();
                    colaborador.apepaterno = colaborador.apepaterno.toUpperCase();
                    colaborador.apematerno = colaborador.apematerno.toUpperCase();
                    return colaborador;
                });
                return jsonColaboradorResponse;
            })
        );

    }
}