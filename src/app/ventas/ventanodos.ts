import { Canal } from '../ventas-proyecto-nuevo-editar/canal'
import { Categoria } from '../ventas-proyecto-nuevo-editar/categoria'
import { Cliente } from '../clientes/cliente'
import { Financiamiento } from '../financiamientos/financiamiento'
import { EstadoVenta } from '../estados-ventas/estadoventa'

export class VentaNodos{
  ayudaInicial: number
  canal: Canal
  categoria: Categoria
  cliente: Cliente
  descuento: number
  enable: number
  estadoVenta: EstadoVenta
  fechaCaida: string
  fechaDesembolso: string
  fechaEpp: string
  fechaMinuta: string
  fechaRegistro: string
  fechaSeparacion: string
  financiamiento: Financiamiento
  idProyecto: number
  idVenta: number
  importe:number
  motivo: any
  total: number
  vendedor: any
}