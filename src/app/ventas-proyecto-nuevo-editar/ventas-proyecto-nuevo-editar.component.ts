import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Cliente } from './../clientes/cliente'
import { ClienteService } from './../clientes/clientes.service'
import swal from 'sweetalert2'

import { Tipoinmueble } from './tipoinmueble'
import { TipoinmuebleService } from './tipoinmueble.service'

import { Tipoinmueblecategoria } from './tipoinmueblecategoria'
import { TipoinmueblecategoriaService } from './tipoinmueblecategoria.service'

import { Tipocredito } from './tipocredito'
import { TipocreditoService } from './tipocredito.service'

import { Bancos } from './bancos'
import { BancosService } from './bancos.service'

import { Motivo } from './motivo'
import { MotivoService } from './motivo.service'

import { Canal } from './canal'
import { CanalService } from './canal.service'

import { Categoria } from './categoria'
import { CategoriaService } from './categoria.service'

import { Inmueble } from './../inmuebles/inmueble'
import { InmuebleService } from './../inmuebles/inmueble.service'

import { Financiamiento } from './financiamiento'
import { FinanciamientoService } from './financiamiento.service'

import { Venta } from './venta'
import { VentaService } from './../ventas/ventas.service'

import { Ventainmueble } from './ventainmueble'
import { VentainmuebleService } from './ventasinmueble.service'
import { isNull } from 'util'

import { ColaboradorService } from '../colaboradores/colaborador.service'
import { VendedorService } from '../jefatura-nuevo-editar/vendedor.service'

@Component({
  selector: 'app-ventas-proyecto-nuevo-editar',
  templateUrl: './ventas-proyecto-nuevo-editar.component.html'
})
export class VentasProyectoNuevoEditarComponent implements OnInit {
  public errores: string[]

  public clienteSeleccionado: Cliente = new Cliente()
  public nrodoc: string

  tipoinmueble: Tipoinmueble[]
  tipoinmuebleSeleccionado: number

  tipoinmueblecategoria: Tipoinmueblecategoria[]
  tipoinmueblecategoriaSeleccionadoTipoInmueble: number

  tipocredito: Tipocredito[]
  tipocreditoSeleccionado: number

  bancos: Bancos[]
  bancoSeleccionado: number

  motivo: Motivo[]
  motivoSeleccionado: number

  canal: Canal[]
  canalSeleccionado: number

  categoria: Categoria[]
  categoriaSeleccionado: number

  financiamiento: Financiamiento = new Financiamiento()

  venta: Venta = new Venta()

  departamentos: Inmueble[]
  idInmuebleSeleccionado: number
  departamentoSeleccionado: Inmueble
  paramIdProyecto: number
  departamentosAgregados = []

  adicionales: Inmueble[]
  idAdicionalSeleccionado: number
  adicionalAgregados = []

  fechaInicioAhorro: string
  fechaFinAhorro: string

  ventainmueble: Ventainmueble = new Ventainmueble()

  keywordSearchVendedor = 'nombre'
  dataSearchVendedor = []
  vendedorSelected: number = 0

  itemTipoinmueble: number
  itemTipoinmueblecategoria: number

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private inmuebleService: InmuebleService,
    private financiamientoService: FinanciamientoService,
    private ventaService: VentaService,
    private activatedRoute: ActivatedRoute,
    private tipoinmueblecategoriaService: TipoinmueblecategoriaService,
    private tipocreditoService: TipocreditoService,
    private bancosService: BancosService,
    private motivoService: MotivoService,
    private canalService: CanalService,
    private categoriaService: CategoriaService,
    private ventainmuebleService: VentainmuebleService,
    private colaboradorService: ColaboradorService,
    private vendedorService: VendedorService,
    private tipoinmuebleService: TipoinmuebleService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
      if (!isNull(params.get('dni'))) {
        this.nrodoc = params.get('dni')
        this.obtenerClienteSeleccionado(params.get('dni'))
      }
    })

    this.clienteSeleccionado.idCliente = 0
    this.clienteSeleccionado.nombres = ''
    this.clienteSeleccionado.apellidos = ''
    this.clienteSeleccionado.nroDocumento = ''

    this.obtenerTipoInmueble()
    //this.obtenerTipoInmuebleCategoria()
    this.obtenerTipoCredito()
    this.obtenerBancos()
    this.obteneradicionalesPorCategoria(1)
    this.obtenerCanal()
    this.obtenerMotivo()
    this.obtenerCategoria()
    this.obtenerVendedores()
  }

  agregarCliente(nrodoc: string) {
    if (nrodoc == '' || nrodoc == undefined) {
      swal('No hizo una busqueda de cliente', '', 'warning')
      return
    }

    this.router.navigate(['/cliente-nuevo-editar/0/' + nrodoc + '/' + this.paramIdProyecto])
  }

  onFechaInicioAhorro(newdate: string) {
    this.fechaInicioAhorro = newdate
  }

  onFechaFinAhorro(newdate: string) {
    this.fechaFinAhorro = newdate
  }

  selectEventSearchVendedor(item: any) {
    this.vendedorSelected = item.idVendedor
  }

  clearedSearchVendedor() {
    this.vendedorSelected = null
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

  public obtenerVendedores() {
    this.vendedorService.getTodosVendedores().subscribe((response) => {
      this.dataSearchVendedor = response
    })
  }

  public obtenerTipoInmueble() {
    this.tipoinmuebleService.getTipoinmueble().subscribe((response) => {
      this.tipoinmueble = response
    })
  }

  public seleccionarTipoInmueble(tipoinmueble: number) {
    this.tipoinmuebleSeleccionado = tipoinmueble
    this.tipoinmueblecategoriaService.getCategoriaPorTipoInmueble(tipoinmueble).subscribe((response) => {
      this.tipoinmueblecategoria = response
    })
  }

  // public obtenerTipoInmuebleCategoria() {
  //   this.tipoinmueblecategoriaService.getTipoinmueblecategoria().subscribe((response) => {
  //     this.tipoinmueblecategoria = response
  //   })
  // }

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

  public obtenerCanal() {
    this.canalService.getCanal().subscribe((response) => {
      this.canal = response
    })
  }

  public obtenerMotivo() {
    this.motivoService.getMotivos().subscribe((response) => {
      this.motivo = response
    })
  }

  public obtenerCategoria() {
    this.categoriaService.getCategoria().subscribe((response) => {
      this.categoria = response
    })
  }

  public obtenerInmueblesPorCategoria(idTipoInmuebleCategoria: number) {
    this.inmuebleService
      .getInmueblesByListarPorCategoria(this.paramIdProyecto, this.tipoinmuebleSeleccionado, idTipoInmuebleCategoria)
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

  totalInmuebles: number

  porcentaje_cuota_inicial: number
  cuota_inicial: number
  total_financiamiento: number

  getTotalVenta() {
    let totalDepartamentos = 0
    let totalAdicional = 0
    for (var i = 0; i < this.departamentosAgregados.length; i++) {
      totalDepartamentos +=
        ((this.departamentosAgregados[i].precio) - (this.departamentosAgregados[i].ayudainicial +  this.departamentosAgregados[i].descuento))

    }
    for (var i = 0; i < this.adicionalAgregados.length; i++) {
      totalAdicional +=

        ((this.adicionalAgregados[i].precio) - ( this.adicionalAgregados[i].ayudainicial + this.adicionalAgregados[i].descuento))

    }
    this.totalInmuebles = totalDepartamentos + totalAdicional
    return this.totalInmuebles
  }

  siguientePagina() {
    document.getElementById('v-pills-profile-tab').click()
  }

  afp: number
  asesor: string
  ahorro: number
  bono: number

  guardarFinanciamiento() {
    if (this.clienteSeleccionado.idCliente == 0) {
      swal('No se selecciono ningun cliente', '', 'warning')
      return
    }

    if (this.departamentosAgregados.length == 0) {
      swal('No hay departamentos agregados', '', 'warning')
      return
    }

    if (this.cuota_inicial == 0 || this.cuota_inicial == null) {
      swal('Ingrese la cuota inicial', '', 'warning')
      return
    }

    if (this.motivoSeleccionado == 0 || this.motivoSeleccionado == null) {
      swal('Seleccione un motivo', '', 'warning')
      return
    }

    if (this.canalSeleccionado == 0 || this.canalSeleccionado == null) {
      swal('Seleccione un canal', '', 'warning')
      return
    }

    if (this.categoriaSeleccionado == 0 || this.categoriaSeleccionado == null) {
      swal('Seleccione una categoria', '', 'warning')
      return
    }

    if (this.tipocreditoSeleccionado == 0 || this.tipocreditoSeleccionado == null) {
      swal('Seleccione un tipo de credito', '', 'warning')
      // this.tipocreditoSeleccionado = 0
      return
    }

    if (this.bono == 0 || this.bono == null) {
      // swal('Ingrese un bono', '', 'warning')
      this.bono = 0
      // return
    }

    if (this.afp == 0 || this.afp == null) {
      // swal('Ingrese AFP', '', 'warning')
      this.afp = 0
      // return
    }

    if (this.bancoSeleccionado == 0 || this.bancoSeleccionado == null) {
      swal('Seleccione un banco', '', 'warning')
      // this.bancoSeleccionado = 0
      return
    }

    if (this.asesor == '' || this.asesor == null) {
      // swal('Ingrese el nombre del asesor', '', 'warning')
      this.asesor = ''
      // return
    }

    if (this.ahorro == 0 || this.ahorro == null) {
      // swal('Ingrese un porcentaje de ahorro', '', 'warning')
      this.ahorro = 0
      // return
    }

    if (this.fechaInicioAhorro == '' || this.fechaInicioAhorro == null) {
      // swal('Seleccione una fecha de inicio de ahorro', '', 'warning')
      this.fechaInicioAhorro = ''
      // return
    }

    if (this.fechaFinAhorro == '' || this.fechaFinAhorro == null) {
      // swal('Seleccione una fecha de fin de ahorro', '', 'warning')
      this.fechaFinAhorro = ''
      // return
    }

    this.financiamiento.idFinanciamiento = 0
    this.financiamiento.afp = this.afp
    this.financiamiento.asesor = this.asesor
    this.financiamiento.ahorro = this.ahorro
    this.financiamiento.idBanco = this.bancoSeleccionado
    this.financiamiento.bono = this.bono
    this.financiamiento.idTipoCredito = this.tipocreditoSeleccionado
    this.financiamiento.enable = 1
    this.financiamiento.fechaFinAhorro = this.fechaFinAhorro
    this.financiamiento.fechaInicioAhorro = this.fechaInicioAhorro
    this.financiamiento.idEstadoFinanciamiento = 1
    this.financiamiento.montoCuotaInicial = this.cuota_inicial
    this.financiamiento.porcCuotaInicial = (this.cuota_inicial * 100 / this.getTotalVenta() )
    this.financiamiento.montoFinanciado = this.total_financiamiento

    this.financiamientoService.agregarFinanciamiento(this.financiamiento).subscribe(
      (response) => {
        this.guardarVenta(response.idFinanciamiento)
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )
  }

  guardarVenta(idFinanciamiento: number) {
    this.venta.idVenta = 0

    if (this.vendedorSelected == 0 || this.vendedorSelected == null) {
      swal('Falta selecionar un vendedor', '', 'warning')
      return
    }
    this.venta.idVendedor = this.vendedorSelected

    this.venta.enable = 1
    this.venta.fechaCaida = ''
    this.venta.fechaDesembolso = ''
    this.venta.fechaEpp = ''
    this.venta.fechaMinuta = ''
    this.venta.fechaSeparacion = ''
    this.venta.idCliente = this.clienteSeleccionado.idCliente
    this.venta.idEstadoVenta = 15
    this.venta.idFinanciamiento = idFinanciamiento
    this.venta.idProyecto = this.paramIdProyecto
    this.venta.idMotivo = this.motivoSeleccionado
    this.venta.idCanal = this.canalSeleccionado
    this.venta.idCategoria = this.categoriaSeleccionado

    this.venta.ayudaInicial = this.porcentaje_cuota_inicial
    this.venta.descuento = (this.totalInmuebles * this.porcentaje_cuota_inicial) / 100
    this.venta.importe = this.totalInmuebles
    this.venta.total = this.venta.importe - this.venta.descuento

    this.ventaService.agregarVenta(this.venta).subscribe(
      (response) => {
        this.guardarInmuebles(response.idVenta)
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )
  }

  obtenerFechaActual() {
    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    return year + '-' + month + '-' + day
  }

  guardarInmuebles(idVenta: number) {
    if (this.departamentosAgregados.length > 0) {
      for (var i = 0; i < this.departamentosAgregados.length; i++) {
        this.ventainmueble.idVentaInmueble = 0
        this.ventainmueble.areaLibre = this.departamentosAgregados[i].areaLibre
        this.ventainmueble.areaTechada = this.departamentosAgregados[i].areaTechada
        this.ventainmueble.areaTotal = this.departamentosAgregados[i].areaTotal
        this.ventainmueble.dormitorios = this.departamentosAgregados[i].cantidadDormitorio
        this.ventainmueble.enable = 1
        this.ventainmueble.idInmueble = this.departamentosAgregados[i].idInmueble
        this.ventainmueble.idVenta = idVenta
        this.ventainmueble.precio = this.departamentosAgregados[i].precio
        this.ventainmueble.vista = ''
        this.ventainmueble.ayudainicial = this.departamentosAgregados[i].ayudainicial
        this.ventainmueble.descuento = this.departamentosAgregados[i].descuento
        this.ventainmueble.importe =
          this.departamentosAgregados[i].total -
          (this.departamentosAgregados[i].total * this.departamentosAgregados[i].descuento) / 100 -
          this.departamentosAgregados[i].ayudainicial
        this.ventainmuebleService.agregarVentainmueble(this.ventainmueble).subscribe(
          (response) => {
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
      }
    }
    if (this.adicionalAgregados.length > 0) {
      for (var i = 0; i < this.adicionalAgregados.length; i++) {
        this.ventainmueble.idVentaInmueble = 0
        this.ventainmueble.areaLibre = this.adicionalAgregados[i].areaLibre
        this.ventainmueble.areaTechada = this.adicionalAgregados[i].areaTechada
        this.ventainmueble.areaTotal = this.adicionalAgregados[i].areaTotal
        this.ventainmueble.dormitorios = this.adicionalAgregados[i].cantidadDormitorio
        this.ventainmueble.enable = 1
        this.ventainmueble.idInmueble = this.adicionalAgregados[i].idInmueble
        this.ventainmueble.idVenta = idVenta
        this.ventainmueble.precio = this.adicionalAgregados[i].precio
        this.ventainmueble.vista = ''
        this.ventainmueble.ayudainicial = this.adicionalAgregados[i].ayudainicial
        this.ventainmueble.descuento = this.adicionalAgregados[i].descuento
        this.ventainmueble.importe =
          this.adicionalAgregados[i].total -
          (this.adicionalAgregados[i].total * this.adicionalAgregados[i].descuento) / 100 -
          this.adicionalAgregados[i].ayudainicial
        this.ventainmuebleService.agregarVentainmueble(this.ventainmueble).subscribe(
          (response) => {
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
      }
    }
/*
    this.router.navigate(['/ventas-proyecto/' + this.paramIdProyecto])
    swal('Venta registrada correctamente', '', 'success')*/
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
