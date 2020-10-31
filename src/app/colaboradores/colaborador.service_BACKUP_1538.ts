import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Colaborador } from './colaborador'
=======
import { Colaborador } from './Colaborador';
>>>>>>> 2b914f533dbebc9a82fcc54571b4502b1bcdc139
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
