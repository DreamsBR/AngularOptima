import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND } from '../config/config';


@Injectable()
export class ColaboradorService {

    private urlEndPoint: string = URL_BACKEND + 'colaborador';

    constructor(private http: HttpClient, private router: Router) { }

    getColaboradores(page): Observable<any> {
        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
            map((jsonColaboradorResponse: any) => {
                (jsonColaboradorResponse.content as Colaborador[]).map(colaborador => {
                    colaborador.nombres = colaborador.nombres.toUpperCase();
                    colaborador.apellidos = colaborador.apellidos.toUpperCase();
                    return colaborador;
                });
                return jsonColaboradorResponse;
            })
        );

    }
}
