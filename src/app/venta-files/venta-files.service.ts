import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { VentaFilesPost } from '../venta-files/ventafilespost'

@Injectable()
export class VentaFilesService {
  private urlEndPoint: string = URL_BACKEND + 'ventafiles'

  constructor(private http: HttpClient, private router: Router) {}

  postVentaFiles(ventaFile: VentaFilesPost) {
    return this.http.post<VentaFilesPost>(this.urlEndPoint, ventaFile).pipe()
  }
}
