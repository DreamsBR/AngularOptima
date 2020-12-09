export class VentaFilesPost {
  idVentaFiles: number
  idVenta: number
  idEstadoVenta: number
  fileRuta: string

  constructor() {
    this.idVentaFiles = 0
    this.idVenta = 0
    this.idEstadoVenta = 0
    this.fileRuta = ''
  }
}
