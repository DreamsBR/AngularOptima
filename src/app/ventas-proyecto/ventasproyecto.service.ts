import { Injectable } from '@angular/core';
import { Ventasproyecto } from './Ventasproyecto'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { URL_BACKEND } from '../config/config';
import { URL_BACKEND_DEMO } from '../config/config';

@Injectable()
export class VentasproyectoService {

    constructor(private http: HttpClient, private router: Router) { }

    getVentasProyectos(): Observable<any> {

        // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
        //     map((jsonColaboradorResponse: any) => {
        //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
        //             colaborador.nombre = colaborador.nombre.toUpperCase();
        //             return colaborador;
        //         });
        //         return jsonColaboradorResponse;
        //     })
        // );

        return this.http.get(URL_BACKEND_DEMO + 'ventas-proyecto.json').pipe(
            map((jsonVentasProyectoResponse: any) => {
                (jsonVentasProyectoResponse as Ventasproyecto[]).map(proyecto => {
                    proyecto.nombre = proyecto.nombre.toUpperCase();
                    proyecto.apepaterno = proyecto.apepaterno.toUpperCase();
                    proyecto.apematerno = proyecto.apematerno.toUpperCase();
                    return proyecto;
                });
                return jsonVentasProyectoResponse;
            })
        );

    }
}