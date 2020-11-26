import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { formatDate } from '@angular/common'
import { AuthService } from '../usuarios/auth.service'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class PeriodoGerenciaService {
  private urlEndPoint: string = URL_BACKEND + 'periodogerencia'

  constructor(private http: HttpClient, private router: Router) {}

  getPeriodoByIdGerencia(idGerencia: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/listarperiodos/' + idGerencia).pipe()
  }
}
