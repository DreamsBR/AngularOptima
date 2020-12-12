import { Injectable } from '@angular/core'
import { Jefatura } from './jefatura'
import { Jefaturaproyecto } from './jefaturaproyecto'
import { Jefaturaproyectonodo } from './jefaturaproyectonodo'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class JefaturaproyectoService {
    private urlEndPoint: string = URL_BACKEND + 'jefaturaproyecto/'

    constructor(private http: HttpClient, private router: Router) {}

    getJefaturasPorProyecto(idProyecto: number): Observable<any> {
        return this.http.get(this.urlEndPoint + 'porProyecto/' + idProyecto).pipe(
            map((jefaturaproyectonodo: any) => {
                ;(jefaturaproyectonodo as Jefaturaproyectonodo[]).map((jefatura) => {
                    return jefatura;
                })
                return jefaturaproyectonodo
            })
        )
    }

    getProyectoPorJefatura(idJefatura: number): Observable<any> {
        return this.http.get(this.urlEndPoint + 'porJefatura/' + idJefatura).pipe(
            map((jefaturaproyectonodo: any) => {
                ;(jefaturaproyectonodo as Jefaturaproyectonodo[]).map((jefatura) => {
                    return jefatura;
                })
                return jefaturaproyectonodo
            })
        )
    }

    agregarJefaturaproyecto(jefaturaproyecto: Jefaturaproyecto): Observable<any> {
        return this.http.post<any>(this.urlEndPoint, jefaturaproyecto).pipe(
            catchError((e) => {
                if (e.status === 400) {
                    return throwError(e)
                }
            })
        )
    }

    editarJefaturaproyecto(jefaturaproyecto:Jefaturaproyecto, idJefaturaproyecto:number): Observable<Jefatura>{
        return this.http.put<Jefatura>(this.urlEndPoint + idJefaturaproyecto, jefaturaproyecto).pipe(
          catchError((e) => {
            if(e.status === 400){
                return throwError(e)}
            })
        )
    }

    eliminarJefaturaproyecto(id: number): Observable<Jefatura> {
        return this.http.delete<Jefatura>(`${this.urlEndPoint}${id}`).pipe(
          catchError((e) => {
            return throwError(e)
          })
        )
      }

}