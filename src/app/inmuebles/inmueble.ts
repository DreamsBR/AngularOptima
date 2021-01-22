export class Inmueble {
  idInmueble: number
  idProyecto: number
  idTipoInmueble: number
  idTipoInmuebleCategoria: number
  numero: string
  areaTechada: number
  areaLibre: number
  areaTotal: number
  idTipoVista: number
  cantidadDormitorio: number
  moneda : string
  tipoCambio: number
  precio: number

  // Esta faltando Otros
  enable: number;
  [key: string]: any

  constructor () {
    this.idInmueble = 0
    this.idProyecto = 0
    this.idTipoInmueble = 0
    this.idTipoInmuebleCategoria = 0
    this.numero = ""
    this.areaTechada = 0
    this.areaLibre = 0
    this.areaTotal = 0
    this.idTipoVista = 0
    this.cantidadDormitorio = 0
    this.precio = 0
    this.enable = 0
    this.tipoCambio= 0
    this.moneda = ""
  }
}
