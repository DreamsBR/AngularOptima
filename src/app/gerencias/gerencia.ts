export class Gerencia{
  idGerencia: number
  enable: number
  fechaIngreso: string
  fechaTermino: null
  colaborador: {
    idColaborador: number
    apellidos: string
    enable: number
    nombres: string
    numeroDocumento: string
    sexo: string
    idTipoDocumento: number
  }
  nombre: string
  [key: string]: any
}