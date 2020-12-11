import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { VentaFiles } from '../venta-files/ventafiles'
import { VentaFilesPost } from '../venta-files/ventafilespost'
@Injectable()
export class VentaFilesService {
  private urlEndPoint: string = URL_BACKEND + 'ventafiles'

  constructor(private http: HttpClient, private router: Router) {}

  postVentaFiles(ventaFile: VentaFilesPost): Observable<VentaFiles> {
    return this.http.post<VentaFiles>(this.urlEndPoint, ventaFile).pipe()
  }

  updateVentaFiles(ventaFile: VentaFilesPost): Observable<VentaFiles> {
    return this.http.put<VentaFiles>(this.urlEndPoint + '/' + ventaFile.idVentaFiles, ventaFile).pipe()
  }

  deleteVentaFiles(idVentaFile: number): Observable<any> {
    return this.http.delete(this.urlEndPoint + '/' + idVentaFile).pipe()
  }

  getVentaFilesByIdVenta(idVenta: number): Observable<VentaFiles[]> {
    return this.http.get<VentaFiles[]>(this.urlEndPoint + '/venta/' + idVenta).pipe()
  }
}
