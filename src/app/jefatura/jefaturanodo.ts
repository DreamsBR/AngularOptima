export class Jefaturanodo {
    idJefatura: number
    enable: number
    fechaIngreso: string
    fechaTermino: string
    idGerencia: number
    colaborador: {
      idColaborador: number
      apellidos: string
      enable: number
      nombres: string
      numeroDocumento: string
      sexo: string,
      tipoDocumento: {
        idTipoDocumento: number
        enable: number
        nombre: string
      }
    }
    nombre: string
  }