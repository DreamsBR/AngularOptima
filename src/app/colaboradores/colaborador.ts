import { TipoDocumento } from "./tipoDocumento"

export class Colaborador{
    idColaborador: number;
    nombres: string;
    apellidos: string;
    numeroDocumento:string;
    sexo:string;
    tipoDocumento : TipoDocumento
    enable: number;
}
