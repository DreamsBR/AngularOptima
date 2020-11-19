import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Cliente } from './../clientes/cliente'
import { ClienteService } from './../clientes/clientes.service'
import swal from 'sweetalert2'
import { Tipoinmueblecategoria } from './Tipoinmueblecategoria'
import { TipoinmueblecategoriaService } from './tipoinmueblecategoria.service'
import { Inmueble } from './../inmuebles/inmueble'
import { InmuebleService } from './../inmuebles/inmueble.service'

@Component({
  selector: 'app-ventas-proyecto-nuevo-editar',
  templateUrl: './ventas-proyecto-nuevo-editar.component.html'
})
export class VentasProyectoNuevoEditarComponent implements OnInit {
  public clienteSeleccionado: Cliente = new Cliente()
  public nrodoc: string
  tipoinmueblecategoria: Tipoinmueblecategoria[]
  tipoinmueblecategoriaSeleccionado: number
  departamentos: Inmueble[]
  idInmuebleSeleccionado: number
  departamentoSeleccionado: Inmueble
  paramIdProyecto: number
  departamentosAgregados = []

  constructor(
    private clienteService: ClienteService,
    private inmuebleService: InmuebleService,
    private activatedRoute: ActivatedRoute,
    private tipoinmueblecategoriaService: TipoinmueblecategoriaService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
    })

    this.clienteSeleccionado.idCliente = 0
    this.clienteSeleccionado.nombres = ''
    this.clienteSeleccionado.apellidos = ''
    this.clienteSeleccionado.nroDocumento = ''

    this.obtenerTipoInmuebleCategoria()
  }

  public obtenerClienteSeleccionado(nrodoc: string) {
    this.clienteService.obtenerClientesPorDni(nrodoc).subscribe((cliente) => {
      if (Object.keys(cliente).length > 0) {
        this.clienteSeleccionado = cliente[0]
      } else {
        this.clienteSeleccionado.idCliente = 0
        this.clienteSeleccionado.nombres = ''
        this.clienteSeleccionado.apellidos = ''
        this.clienteSeleccionado.nroDocumento = ''
        swal('consultar cliente', 'No se encontro el registro solicitado ', 'warning')
      }
    })
  }

  public obtenerTipoInmuebleCategoria() {
    this.tipoinmueblecategoriaService.getTipoinmueblecategoria().subscribe((response) => {
      this.tipoinmueblecategoria = response
    })
  }

  public obtenerInmueblesPorCategoria(idTipoInmuebleCategoria: number) {
    this.inmuebleService
      .getInmueblesByListarPorCategoria(this.paramIdProyecto, 1, idTipoInmuebleCategoria)
      .subscribe((response) => {
        this.departamentos = response
      })
  }

  public agregarDepartamento() {
    this.inmuebleService
      .getInmueblesByIdInmueble(this.idInmuebleSeleccionado)
      .subscribe((response) => {
        this.departamentosAgregados.push(response)
        console.info(this.departamentosAgregados)
      })
  }

  public quitarDepartamento(i: number) {
    console.info(i)
    this.departamentosAgregados.splice(i, 1)
    console.info(this.departamentosAgregados)
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
