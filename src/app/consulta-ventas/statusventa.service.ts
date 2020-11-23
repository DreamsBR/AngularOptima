import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { URL_BACKEND } from '../config/config'
import { estadoventa } from './estadoventa'
import { map } from 'rxjs/operators'


@Injectable()
export class statusVentaservice {

  private urlEndPoint: string = URL_BACKEND + 'estadoventa/'

  constructor(private http: HttpClient, private router: Router) {}


  getEstadoVenta(): Observable<any>{
    return this.http.get(this.urlEndPoint).pipe(
      map((data: any)=>{
        ;(data as estadoventa[]).map((estadoventa)=>{
          return estadoventa
        })
        return data
      })
    )
  }
}

