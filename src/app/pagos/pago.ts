export class Pago {
  idPago: number
  enable: number
  fecha: string
  idVenta: number
  monto: number
  numeroOperacion: string
  pagado: number
  porcentaje: string

  constructor() {
    this.idPago = 0
    this.enable = 1
    this.fecha = ''
    this.idVenta = 0
    this.monto = 0
    this.numeroOperacion = ''
    this.pagado = 1
    this.porcentaje = ''
  }
}
