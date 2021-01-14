import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { EstadoVenta } from '../estados-ventas/estadoventa'
import { Clientenodo } from '../clientes/clientenodo'

@Injectable()
export class ModuloBuscadorVentasService {
  private urlEndPoint: string = URL_BACKEND + 'venta'

  constructor(private http: HttpClient, private router: Router) {}

  getListaMaestraEstados(): Observable<EstadoVenta[]> {
    return this.http.get<EstadoVenta[]>(URL_BACKEND + 'estadoventa/').pipe()
  }

  getVentaByRange(idProyecto: number, fechaini: string, fechafin: string): Observable<any> {
    return this.http.get(this.urlEndPoint + `/byrange/${idProyecto}/${fechaini}/${fechafin}`).pipe()
  }

  getVentaByProyectoAndEstado(idProyecto: number, idEstadoVenta: number): Observable<any> {
    return this.http.get(this.urlEndPoint + `/byproyectoandestado/${idProyecto}/${idEstadoVenta}`).pipe()
  }

  getVentaByCliente(idCliente: number): Observable<any> {
    const page = 1
    const pageCount = 99999
    return this.http.get(this.urlEndPoint + `/bycliente/${idCliente}/${page}/${pageCount}`).pipe()
  }

  getVentaByProyectoAndEstadoRange(idProyecto: number, idEstadoVenta: number, fechaini: string, fechafin: string): Observable<any> {
    return this.http.get(this.urlEndPoint + `/byproyectoandestadorange/${idProyecto}/${idEstadoVenta}/${fechaini}/${fechafin}`).pipe()
  }

  // Otros métodos para buscar
  buscarClientesPorDni(nrodoc: string): Observable<Clientenodo[]> {
    return this.http.get<Clientenodo[]>(URL_BACKEND + 'cliente/nroDocumento/' + nrodoc).pipe()
  }

  buscarVentasSearch(
    fechaFin: string,
    fechaIni: string,
    idCliente: number,
    idEstadoVenta: number,
    idProyecto: number
  ): Observable<any> {
    let data = {
      "fechaFin": fechaFin,
      "fechaIni": fechaIni,
      "idCliente": idCliente,
      "idEstadoVenta": idEstadoVenta,
      "idProyecto": idProyecto
    }
    return this.http.post(this.urlEndPoint + `/search/`, data).pipe()
  }

}
