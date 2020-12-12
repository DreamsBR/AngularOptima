import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { Cliente } from './cliente'




@Injectable()
export class ClienteDetalleService{

  private urlEndPoin: string = URL_BACKEND + 'cliente/'

  constructor(
    private http:HttpClient,
    private router:Router
  ){}



  getCliente(): Observable<any>{
    return this.http.get(this.urlEndPoin).pipe(
      map((data : any)=> {
        ;(data as Cliente[]).map((Cliente) =>{
          return Cliente
        })
        return data
      })
    )

  }
}
