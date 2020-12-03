import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND } from '../config/config';



@Injectable()
export class ColaboradorService {



  httpOptions = {
    headers: new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlZXJhem96YW11ZGlvQGdtYWlsLmNvbSIsImlkQ29sYWJvcmFkb3IiOjMsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNjA3MDE5MTcwLCJleHAiOjE2MDcxMDU1NzB9.-86uGdHEEoXXayFeDOVTZxvDWlZQcS0MxHfkpthYf8ruqdcMcQWFFpFnaKo11efEoH_E1wCEOmrLMqQ-upUo9w'})
  };


    private urlEndPoint: string = URL_BACKEND + 'colaborador';

    constructor(private http: HttpClient, private router: Router) { }

    getColaboradores(page): Observable<any> {
        return this.http.get(this.urlEndPoint + '/page/' + page   ).pipe(
            map((jsonColaboradorResponse: any) => {
                (jsonColaboradorResponse.content as Colaborador[]).map(
                  colaborador => {
                    colaborador.nombres = colaborador.nombres.toUpperCase();
                    colaborador.apellidos = colaborador.apellidos.toUpperCase();
                    return colaborador;
                });
                return jsonColaboradorResponse;
            })
        );
    }

    getTodosColaboradores(): Observable<any> {
        return this.http.get(this.urlEndPoint + '/').pipe(
            map((jsonColaboradorResponse: any) => {
                (jsonColaboradorResponse as Colaborador[]).map(
                  colaborador => {
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





    obtenerColaboradorDni(nrdoc):Observable<Colaborador>{
      return this.http.get<Colaborador>(this.urlEndPoint + '/findByNumeroDocumento/' + nrdoc)
    }


    obtenerColaboradorPorId(idColaborador): Observable<Colaborador> {
        return this.http.get<Colaborador>(this.urlEndPoint + '/' + idColaborador)
    }


    actualizarColaborador(colaborador: Colaborador, idColaborador: number): Observable<any> {
        return this.http.put<any>(this.urlEndPoint + '/' + idColaborador, colaborador).pipe(
            catchError((e) => {
            if (e.status === 400) {
                return throwError(e)
            }
            })
        )
    }

    eliminarColaborador(id: number): Observable<Colaborador> {
        return this.http.delete<Colaborador>(`${this.urlEndPoint}/${id}`).pipe(
            catchError((e) => {
            return throwError(e)
            })
        )
    }

}
