import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Cliente } from './../clientes/cliente'
import { ClienteService } from './../clientes/clientes.service'
import swal from 'sweetalert2'

import { Tipoinmueblecategoria } from './Tipoinmueblecategoria'
import { TipoinmueblecategoriaService } from './tipoinmueblecategoria.service'

import { Tipocredito } from './Tipocredito'
import { TipocreditoService } from './tipocredito.service'

import { Bancos } from './Bancos'
import { BancosService } from './bancos.service'


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

  tipocredito: Tipocredito[]
  tipocreditoSeleccionado: number

  bancos: Bancos[]
  bancoSeleccionado: number

  departamentos: Inmueble[]
  idInmuebleSeleccionado: number
  departamentoSeleccionado: Inmueble
  paramIdProyecto: number
  departamentosAgregados = []

  adicionales: Inmueble[]
  idAdicionalSeleccionado: number
  adicionalAgregados = []

  constructor(
    private clienteService: ClienteService,
    private inmuebleService: InmuebleService,
    private activatedRoute: ActivatedRoute,
    private tipoinmueblecategoriaService: TipoinmueblecategoriaService,
    private tipocreditoService: TipocreditoService,
    private bancosService: BancosService
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
    this.obtenerTipoCredito()
    this.obtenerBancos()
    this.obteneradicionalesPorCategoria(1)
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

  public obtenerTipoCredito() {
    this.tipocreditoService.getTipoCredito().subscribe((response) => {
      this.tipocredito = response
    })
  }

  public obtenerBancos() {
    this.bancosService.getBancos().subscribe((response) => {
      this.bancos = response
    })
  }

  public obtenerInmueblesPorCategoria(idTipoInmuebleCategoria: number) {
    this.inmuebleService
      .getInmueblesByListarPorCategoria(this.paramIdProyecto, 1, idTipoInmuebleCategoria)
      .subscribe((response) => {
        this.departamentos = response
      })
  }

  public obteneradicionalesPorCategoria(idTipoInmuebleCategoria: number) {
    this.inmuebleService
      .getInmueblesByListarPorCategoria(this.paramIdProyecto, 2, idTipoInmuebleCategoria)
      .subscribe((response) => {
        this.adicionales = response
      })
  }

  public agregarDepartamento() {
    this.inmuebleService
      .getInmueblesByIdInmueble(this.idInmuebleSeleccionado)
      .subscribe((response) => {
        let tInmueble = new Inmueble()
        tInmueble = response
        tInmueble.descuento = 0
        tInmueble.ayudainicial = 0
        tInmueble.total = tInmueble.precio - tInmueble.descuento - tInmueble.ayudainicial
        this.departamentosAgregados.push(tInmueble)
      })
  }

  public agregarAdicional() {
    this.inmuebleService
      .getInmueblesByIdInmueble(this.idAdicionalSeleccionado)
      .subscribe((response) => {
        let tInmueble = new Inmueble()
        tInmueble = response
        tInmueble.descuento = 0
        tInmueble.ayudainicial = 0
        tInmueble.total = tInmueble.precio - tInmueble.descuento - tInmueble.ayudainicial
        this.adicionalAgregados.push(tInmueble)
      })
  }

  public quitarDepartamento(i: number) {
    this.departamentosAgregados.splice(i, 1)
  }

  public quitarAdicional(i: number) {
    this.adicionalAgregados.splice(i, 1)
  }

  getTotalVenta() {
    let totalDepartamentos = 0;
    let totalAdicional = 0;
    for (var i = 0; i < this.departamentosAgregados.length; i++) {
      totalDepartamentos += this.departamentosAgregados[i].precio - this.departamentosAgregados[i].descuento - this.departamentosAgregados[i].ayudainicial;
    }
    for (var i = 0; i < this.adicionalAgregados.length; i++) {
      totalAdicional += this.adicionalAgregados[i].precio - this.adicionalAgregados[i].descuento - this.adicionalAgregados[i].ayudainicial;
    }
    return totalDepartamentos + totalAdicional;
  }

  siguientePagina(){
    document.getElementById('v-pills-profile-tab').click()
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}
