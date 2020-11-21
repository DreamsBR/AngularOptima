import { Injectable } from '@angular/core';
import { Ventasproyecto } from './Ventasproyecto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND, URL_BACKEND_DEMO } from '../config/config';
import { Proyecto } from '../proyectos/proyecto';

@Injectable()
export class VentasproyectoService {

    constructor(private http: HttpClient, private router: Router) { }
    private urlEndPoint: string = URL_BACKEND + 'proyecto/'


    getVentasProyectos(page): Observable<any> {

        return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
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
