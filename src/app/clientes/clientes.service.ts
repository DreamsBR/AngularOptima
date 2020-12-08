import { Injectable } from '@angular/core'
import { Cliente } from './cliente'
import { Clientenodo } from './../clientes/clientenodo'
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class ClienteService {
  private urlEndPoint: string = URL_BACKEND + 'cliente/'

  constructor(private http: HttpClient, private router: Router) {}

  getClientes(page): Observable<any> {
    return this.http.get(this.urlEndPoint + 'page/' + page + '/10').pipe(
      map((jsonClientesResponse: any) => {
        ;(jsonClientesResponse.content as Cliente[]).map((cliente) => {
          cliente.nombres = cliente.nombres.toUpperCase()
          cliente.apellidos = cliente.apellidos.toUpperCase()
          return cliente;
        })
        return jsonClientesResponse
      })
    )
  }

  obtenerClientesPorId(idCliente): Observable<Clientenodo> {
    return this.http.get<Clientenodo>(this.urlEndPoint + idCliente)
  }

  eliminarCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  agregarCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, cliente).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  obtenerClientesPorDni(nrodoc): Observable<any> {
    return this.http.get(this.urlEndPoint + 'nroDocumento/' + nrodoc).pipe(
      map((jsonClientesResponse: any) => {
        ;(jsonClientesResponse as Cliente[]).map((cliente) => {
          cliente.nombres = cliente.nombres.toUpperCase()
          cliente.apellidos = cliente.apellidos.toUpperCase()
          return cliente;
        })
        return jsonClientesResponse
      })
    )
  }

  actualizarCliente(cliente: Cliente, idCliente: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + idCliente, cliente).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e)
        }
      })
    )
  }

  findClienteByNombreApellido(nombre, apellidos){
    return this.http.get<Clientenodo>(this.urlEndPoint + 'bynombresandapellidos/' + nombre + apellidos)
  }


}
