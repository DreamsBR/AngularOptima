export class VentaFilesPost {
  idVentaFies: number
  idVenta: number
  idEstadoVenta: number
  fileRuta: string

  constructor() {
    this.idVentaFies = 0
    this.idVenta = 0
    this.idEstadoVenta = 0
    this.fileRuta = ''
  }
}
