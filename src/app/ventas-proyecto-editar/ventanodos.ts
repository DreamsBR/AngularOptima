export class Ventanodos {
  ayudaInicial: number
  canal: {
    enabe: number
    idCanal: number
    nombre: string
  }
  categoria: {
    enable: number
    idCategoria: number
    nombre: string
  }
  cliente: {
    apellidos: string
    asesor: string
    conyuge: string
    direccion: string
    distrito: string
    email: string
    fechaNacimiento: string
    idCliente: number
    idEstadoCivil: number
    idEstadoCivilConyuge: number
    idPais: number
    idTipoDocumento: number
    ingresos: number
    lugarTrabajo: string
    nombres: string
    nroDocConyuge: string
    nroDocumento: string
    ocupacion: string
    ocupacionConyuge: string
    provincia: string
    sexo: string
    telefono: string
    tipoDocConyuge: 0
  }
  descuento: number
  enable: number
  estadoVenta: {
    enable: number
    idEstadoVenta: number
    nombre: string
  }
  fechaCaida: string
  fechaDesembolso: string
  fechaEpp: string
  fechaMinuta: string
  fechaRegistro: string
  fechaSeparacion: string
  financiamiento: {
    afp: number
    ahorro: number
    asesor: string
    bono: number
    enable: number
    fechaFinAhorro: string
    fechaInicioAhorro: string
    banco: {
      idBanco: number,
      enable: number,
      nombre: string
    },
    idEstadoFinanciamiento: number
    idFinanciamiento: number
    tipoCredito: {
      idTipoCredito: number
      enable: number
      nombre: string
    },
    montoCuotaInicial: number
    montoFinanciado: number
    porcCuotaInicial: string
  }
  idProyecto: number
  idVenta: number
  importe: number
  motivo: {
    enable: number
    idMotivo: number
    nombre: string
  }
  total: number
  vendedor: {
    enable: number
    idColaborador: number
    idJefatura: number
    idVendedor: number
    nombre: string
  }
}
