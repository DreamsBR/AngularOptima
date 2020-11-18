import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND_DEMO } from '../config/config';


@Injectable()
export class ProyectoService2 {

    constructor(private http: HttpClient, private router: Router) { }

    getProyectos(): Observable<any> {

        return this.http.get(URL_BACKEND_DEMO + 'proyectos.json').pipe(
            map((jsonProyectoResponse: any) => {
                (jsonProyectoResponse as Proyecto[]).forEach(proyecto => {
                    proyecto.nombre = proyecto.nombre.toUpperCase();
                    return proyecto;
                });
                return jsonProyectoResponse;
            })
        );

    }
}
