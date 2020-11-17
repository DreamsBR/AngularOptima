import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador'
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
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
    agregarColaborador(colaborador: Colaborador): Observable<any> {

        return this.http.post<any>(this.urlEndPoint, colaborador).pipe(
            catchError(e => {
    
            if (e.status === 400) {
                return throwError(e);
            }
            })
        );
        }
    

}
