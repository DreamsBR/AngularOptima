import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND_DEMO } from '../config/config';


@Injectable()
export class ColaboradorService {

    constructor(private http: HttpClient, private router: Router) { }

    getColaboradores(): Observable<any> {

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