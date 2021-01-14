import { TipoCredito } from '../tipocredito/tipocredito'
import { Banco } from '../bancos/banco'
import { Estadofinanciamiento } from '../estadofinanciamiento/estadofinanciamiento'
export class Financiamiento {
  idFinanciamiento: number
  afp: number
  ahorro: number
  asesor: string
  bono: number
  enable: number
  fechaFinAhorro: string
  fechaInicioAhorro: string
  idBanco: number
  idEstadoFinanciamiento: number
  idTipoCredito: number
  nomtoCuotaInicial: string
  montoFinanciado: string
  porcCuotaInicial: string
}

export class FinanciamientoNodos {
  idFinanciamiento: number
  afp: number
  ahorro: number
  asesor: string
  banco: Banco
  bono: number
  enable: number
  estadoFinanciamiento: Estadofinanciamiento
  fechaFinAhorro: string
  fechaInicioAhorro: string
  montoCuotaInicial: number
  montoFinanciado: number
  porcCuotaInicial: string
  tipoCredito: TipoCredito
}
