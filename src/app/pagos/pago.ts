export class Pago {
  idPago: number
  enable: number
  fecha: string
  idVenta: number
  monto: number
  numeroOperacion: number
  pagado: number
  porcentaje: string

  constructor() {
    this.idPago = 0
    this.enable = 1
    this.fecha = ''
    this.idVenta = 0
    this.monto = 0
    this.numeroOperacion = 0
    this.pagado = 1
    this.porcentaje = ''
  }
}
