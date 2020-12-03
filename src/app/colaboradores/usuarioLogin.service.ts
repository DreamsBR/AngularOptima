import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URL_BACKEND_DEMO, URL_BACKEND_SEG } from '../config/config';
import { UsuarioLogin } from './usuarioLogin';






Injectable()
export class  UsuarioLoginService{

  private urlEndPoint : string = URL_BACKEND_SEG + 'auth/'+ 'singup'

  constructor (
    private http: HttpClient
  ){}


    agregarUsiarioLog(usuarioLogin:UsuarioLogin) : Observable<any>{
      return this.http.post<any>(this.urlEndPoint , usuarioLogin).pipe(
        catchError(e => {
          if(e.status === 400){
            return throwError(e)
          }
        })
      )
    }


}
