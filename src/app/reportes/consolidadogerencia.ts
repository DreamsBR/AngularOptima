import { Periodo } from '../periodos/periodo'
export class ConsolidadoVentas {
  periodoGerencia: {
    idPeriodoGerencia: number
    enable: number
    idGerencia: number
    periodo: Periodo
    meta: number
  }
  venta: number
}
