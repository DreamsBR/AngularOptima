import { CategoriaGerencia } from '../categoria-gerencia/categoria-gerencia'
export class Gerencia{
  categoriaGerencia: CategoriaGerencia
  idGerencia: number
  enable: number
  fechaIngreso: string
  fechaTermino: string
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