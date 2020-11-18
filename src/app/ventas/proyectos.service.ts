import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND } from '../config/config';


@Injectable()
export class ProyectoService2 {
  private urlEndPoint: string = URL_BACKEND + 'proyecto/';

    constructor(private http: HttpClient, private router: Router) { }

    getProyectos(page): Observable<any> {
        return this.http.get(this.urlEndPoint + 'page/' + page).pipe(
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
