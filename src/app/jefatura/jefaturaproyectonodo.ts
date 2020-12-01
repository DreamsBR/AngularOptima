export class Jefaturaproyectonodo {
    enable: number
    idJefaturaProyecto: number
    jefatura: {
        colaborador: {
            apellidos: string
            enable: number
            idColaborador: number
            nombres: string
            numeroDocumento: string
            sexo: string
            tipoDocumento: {
                enable: number
                idTipoDocumento: number
                nombre: string
            }
        }
        enable: number
        fechaIngreso: string
        fechaTermino: string
        idGerencia: number
        idJefatura: number
        nombre: string
    }
    proyecto: {
        codigo: string
        direccion: string
        enable: number
        idProyecto: number
        nombre: string
    }
}