export class Clientenodo {
  apellidos: string
  asesor: string
  conyuge: string
  direccion: string
  distrito: string
  email: string
  estadoCivil: {
    enable: number
    idEstadoCivil: number
    nombre: string
  }
  estadoCivilConyuge: {
    enable: number
    idEstadoCivil: number
    nombre: string
  }
  fechaNacimiento: string
  idCliente: number
  ingresos: number
  lugarTrabajo: string
  nombres: string
  nroDocConyuge: string
  nroDocumento: string
  ocupacion: string
  ocupacionConyuge: string
  pais: {
    enable: true
    idPais: number
    nombre: string
  }
  provincia: string
  sexo: string
  telefono: string
  tipoDocumento: {
    enable: number
    idTipoDocumento: number
    nombre: string
  }
  tipoDocumentoConyuge: {
    enable: number
    idTipoDocumento: number
    nombre: string
  }
  fotoDni: string
  fotoDniConyuge: string
}
