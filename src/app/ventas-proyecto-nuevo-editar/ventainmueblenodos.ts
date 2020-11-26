export class Ventainmueblenodos {
    idVentaInmueble: number
    areaLibre: number
    areaTechada: number
    areaTotal: number
    ayudainicial: number
    descuento: number
    dormitorios: number
    enable: number
    inmueble: {
        idInmueble: number
        areaLibre: number
        areaTechada: number
        areaTotal: number
        cantidadDormitorio: number
        enable: number
        idProyecto: number
        tipoInmueble: {
        idTipoInmueble: number
        enable: number
        nombre: string
        }
        tipoInmuebleCategoria: {
        idTipoInmuebleCategoria: number
        enable: number
        idTipoInmueble: number
        nombre: string
        }
        tipoVista: {
        idTipoVista: number
        enable: number
        nombre: string
        }
        numero: number
        precio: number
    }
    idVenta: number
    importe: number
    precio: number
    vista: string
}