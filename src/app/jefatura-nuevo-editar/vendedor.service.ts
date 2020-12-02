import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { Vendedor } from "./vendedor";
// import { Vendedornodo } from "./vendedornodo";

@Injectable()
export class VendedorService {

  private urlEndPoint : string = URL_BACKEND + 'vendedor/';

  constructor(
    private http:HttpClient
  ){}

    agregarVendedor(vendedor:Vendedor): Observable<Vendedor>{
    return this.http.post<Vendedor>(this.urlEndPoint, vendedor).pipe(
        catchError((e) => {
        if(e.status === 400){
            return throwError(e)}
        })
    )}

    editarVendedor(vendedor:Vendedor, idVendedor:number): Observable<Vendedor>{
    return this.http.put<Vendedor>(this.urlEndPoint + '/' + idVendedor, vendedor).pipe(
        catchError((e) => {
        if(e.status === 400){
            return throwError(e)}
        })
    )}

    eliminarVendedor(idVendedor:number): Observable<Vendedor>{
    return this.http.delete<Vendedor>(this.urlEndPoint + idVendedor).pipe(
        catchError((e) => {
        return throwError(e)
        })
    )}

    getVendedoresPorJefatura(idJefatura: number): Observable<any> {
        return this.http.get(this.urlEndPoint + 'listaporjefatura/' + idJefatura).pipe(
            map((vendedor: any) => {
                ;(vendedor as Vendedor[]).map((vendedor) => {
                    return vendedor;
                })
                return vendedor
            })
        )
    }

}