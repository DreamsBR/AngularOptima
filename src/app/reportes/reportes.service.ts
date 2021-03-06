import { Injectable } from '@angular/core'
import { Observable, of, throwError, forkJoin } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config'
import { Cliente } from '../clientes/cliente'
import { VentaNodos } from '../ventas/ventanodos'
import { Financiamiento } from '../financiamientos/financiamiento'

@Injectable()
export class ReportesService {
  private urlEndPoint: string = URL_BACKEND + 'reporte'

  constructor(private http: HttpClient, private router: Router) {}

  getConsolidadoVentas(idGerencia: number, idPeriodo: number): Observable<any> {
    return this.http
      .get(this.urlEndPoint + '/consolidadoventas/' + idGerencia + '/' + idPeriodo)
      .pipe()
  }

  getConsolidadoGerencia(idGerencia: number, idPeriodo: number): Observable<any> {
    return this.http
      .get(this.urlEndPoint + '/consolidadogerencia/' + idGerencia + '/' + idPeriodo)
      .pipe()
  }

  getConsolidadoProyecto(idGerencia: number, idPeriodo: number): Observable<any> {
    return this.http
      .get(this.urlEndPoint + '/consolidadoproyecto/' + idGerencia + '/' + idPeriodo)
      .pipe()
  }

  getConsolidadoVendedor(idColaborador: number, idPeriodo: number): Observable<any> {
    return this.http
      .get(this.urlEndPoint + '/consolidadovendedor/' + idColaborador + '/' + idPeriodo)
      .pipe()
  }

  getConsolidadoGeneral(idPeriodo: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/consolidadogerenciaventa/' + idPeriodo).pipe()
  }

  // Para forecast
  getConsolidadoColaboradorPeriodo(idColaborador: number, idPeriodo: number): Observable<any> {
    return this.http
      .get(this.urlEndPoint + '/consolidadocolaboradorperiodo/' + idColaborador + '/' + idPeriodo)
      .pipe()
  }

  getConsolidadoProyectoPeriodo(idProyecto: number, idPeriodo: number): Observable<any> {
    return this.http
      .get(this.urlEndPoint + '/consolidadoproyectoperiodo/' + idProyecto + '/' + idPeriodo)
      .pipe()
  }

  getAllVendedores(): Observable<any> {
    return this.http.get(URL_BACKEND + 'vendedor/').pipe()
  }

  getPeriodoColaboradorByIdColaborador(idColaborador: number): Observable<any> {
    return this.http.get(URL_BACKEND + 'periodocolaborador/' + idColaborador).pipe()
  }

  getConsolidadoGerenciaPorCategoria(idPeriodo: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/consolidadoGerenciaVentaByCategoria/' + idPeriodo).pipe()
  }
}
