import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_BACKEND, URL_BACKENDOUT } from '../config/config';
import { Roles } from './roles';



export class RolesService {

  private urlEndPoint : string = URL_BACKENDOUT + 'roles'

  constructor(private http: HttpClient, private router:Router){}




  getTodoRoles():Observable<any> {
    return this.http.get(this.urlEndPoint + "/").pipe(
      map((data : any ) => {
        (data as Roles[]).map(
          roles =>{
            return roles
          })
          return data;
      })
    )

  }


}
