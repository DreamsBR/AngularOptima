import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
import { URL_BACKEND, URL_BACKEND_SEG } from '../config/config';
import { UsuarioLogin } from './usuarioLogin';



@Injectable()
export class ColaboradorService {

    private urlEndPoint: string = URL_BACKEND + 'colaborador';

    constructor(private http: HttpClient, private router: Router) { }

    getColaboradores(page): Observable<any> {
        return this.http.get(this.urlEndPoint + '/page/' + page + '/10'  ).pipe(
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

    private urlEndPoint2 : string = URL_BACKEND_SEG + 'auth/' + 'signup'
    agregarUsuario(usuarioLogin: UsuarioLogin) : Observable<any>{
        let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };
        return this.http.post<any>(this.urlEndPoint2, usuarioLogin, httpOptions)
    }

    private urlEndPoint3 : string = URL_BACKEND_SEG + 'auth/' + 'changepasswordadmin'
    editarUsuario( usuario:string, contrasenia:string, role:string ) : Observable<any>{
        
        let param = {
            "password": contrasenia,
            "role": [
                role
            ],
            "userName": usuario
        }
        let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };
        return this.http.post<any>(this.urlEndPoint3, param, httpOptions)
    }

    private urlEndPoint4 : string = URL_BACKEND_SEG + 'auth/' + 'changeroleadmin'
    editarUsuarioRoleUser( usuario:string, role:string ) : Observable<any>{
        
        let param = {
            "role": [
                role
            ],
            "userName": usuario
        }
        let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };
        return this.http.post<any>(this.urlEndPoint4, param, httpOptions)
    }

    obtenerUsuarioPorIdColaborador(idColaborador: number):Observable<any>{
        return this.http.get<any>(this.urlEndPoint + '/findUser/' + idColaborador)
      }

    obtenerColaboradorDni(nrdoc):Observable<Colaborador>{
      return this.http.get<Colaborador>(this.urlEndPoint +'/findByNumeroDocumento/' + nrdoc)
    }

    obtenerColaboradorFiltro(nrdoc):Observable<any>{
      return this.http.get(this.urlEndPoint + '/findByNumeroDocumento/' + nrdoc).pipe(
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
