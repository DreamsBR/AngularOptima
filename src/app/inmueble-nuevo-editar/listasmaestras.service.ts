import { Injectable } from '@angular/core'
import { TipoInmueble } from './tipoinmueble'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class ListasmaestrasService {
  private urlEndPoint: string = URL_BACKEND

  constructor(private http: HttpClient, private router: Router) {}

  getListaInmuebles(page): Observable<any> {
    return this.http.get(this.urlEndPoint + '/tipoinmueble/').pipe(
      map((jsonListaResponse: any) => {
        return jsonListaResponse
      })
    )
  }

}
