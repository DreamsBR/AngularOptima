import { Injectable } from '@angular/core';
import { Proyecto } from './Proyecto'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { URL_BACKEND } from '../config/config';
import { URL_BACKEND_DEMO } from '../config/config';


@Injectable()
export class ProyectoService {

    constructor(private http: HttpClient, private router: Router) { }

    getProyectos(): Observable<any> {

        // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
        //     map((jsonColaboradorResponse: any) => {
        //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
        //             colaborador.nombre = colaborador.nombre.toUpperCase();
        //             return colaborador;
        //         });
        //         return jsonColaboradorResponse;
        //     })
        // );

        return this.http.get(URL_BACKEND_DEMO + 'proyectos.json').pipe(
            map((jsonProyectoResponse: any) => {
                (jsonProyectoResponse as Proyecto[]).map(proyecto => {
                    proyecto.nombre = proyecto.nombre.toUpperCase();
                    return proyecto;
                });
                return jsonProyectoResponse;
            })
        );

    }
}