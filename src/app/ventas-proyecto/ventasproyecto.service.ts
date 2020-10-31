import { Injectable } from '@angular/core';
import { Ventasproyecto } from './Ventasproyecto'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND_DEMO } from '../config/config';

@Injectable()
export class VentasproyectoService {

    constructor(private http: HttpClient, private router: Router) { }

    getVentasProyectos(): Observable<any> {

        return this.http.get(URL_BACKEND_DEMO + 'ventas-proyecto.json').pipe(
            map((jsonVentasProyectoResponse: any) => {
                (jsonVentasProyectoResponse as Ventasproyecto[]).forEach(proyecto => {
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