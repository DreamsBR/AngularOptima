import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_BACKEND, URL_BACKEND_SEG } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario: Usuario;
  private _token: string;

  constructor(private http: HttpClient) { }

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }


  public logIn(usuario: Usuario): Observable<any> {

    const urlEndPoint = URL_BACKEND_SEG + 'auth/signin';

    // const credenciales = btoa('angularapp' + ':' + '12345');

    // const httpHeaders = new HttpHeaders(
    //   {
    //     'Content-type': 'application/x-www-form-urlencoded',
    //     'Authorization': 'Basic ' + credenciales
    //   });

    // const params = new URLSearchParams();
    // params.set('grant_type', 'password');
    // params.set('username', usuario.userName);
    // params.set('password', usuario.password);

    let params = {
      "password": usuario.password,
      "username": usuario.userName
    }

    // { headers: httpHeaders }

    return this.http.post<any>(urlEndPoint, params);
  }

  public guardarUsuario(accessToken: string): void {
    const payLoad = this.obtenerDatosToken(accessToken);
    console.info(payLoad)
    this._usuario = new Usuario();
    this._usuario.userName = payLoad.sub;
    this._usuario.roles = payLoad.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  public guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  public obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  public isAuthenticated(): boolean {
    const payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.sub && payload.sub.length > 0) {
      return true;
    }
    return false;
  }


  logOut() {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

  tienePermisos(rol: string): boolean {
    return this.usuario.roles.includes(rol);
  }

}
