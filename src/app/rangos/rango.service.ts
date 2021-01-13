import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { EstadoVenta } from '../estados-ventas/estadoventa'
import { Clientenodo } from '../clientes/clientenodo'

@Injectable()
export class RangoService {
  private urlEndPoint: string = URL_BACKEND + 'rango'

  constructor(private http: HttpClient, private router: Router) {}

  getRangos(): Observable<EstadoVenta[]> {
    return this.http.get<EstadoVenta[]>(this.urlEndPoint).pipe()
  }
}