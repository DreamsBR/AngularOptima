export class Usuario {

    id: number;
    idColaborador: number;
    userName: string;
    password: string;
    enabled: boolean;
    roles: string[] = [];
    email: string;
}
