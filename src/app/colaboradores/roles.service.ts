import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_BACKEND_SEG } from '../config/config';
import { Roles } from './roles';


@Injectable()
export class RolesServices {

  private urlEndPoint: string = URL_BACKEND_SEG + 'auth/' + 'roles'

  constructor(
    private http:HttpClient){}



getRoles(): Observable<any> {
  return this.http.get(this.urlEndPoint).pipe(
    map((data : any) => {
      (data as Roles[]).map((roles) => {
        return roles
      })
      return data
    })
  )}
}
