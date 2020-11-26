import { Component, OnInit, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Cliente } from './../clientes/cliente'
import { ClienteService } from './../clientes/clientes.service'
import swal from 'sweetalert2'

import { Tipoinmueblecategoria } from './../ventas-proyecto-nuevo-editar/tipoinmueblecategoria'
import { TipoinmueblecategoriaService } from './../ventas-proyecto-nuevo-editar/tipoinmueblecategoria.service'

import { Tipocredito } from './../ventas-proyecto-nuevo-editar/tipocredito'
import { TipocreditoService } from './../ventas-proyecto-nuevo-editar/tipocredito.service'

import { Bancos } from './../ventas-proyecto-nuevo-editar/bancos'
import { BancosService } from './../ventas-proyecto-nuevo-editar/bancos.service'

import { Motivo } from './../ventas-proyecto-nuevo-editar/motivo'
import { MotivoService } from './../ventas-proyecto-nuevo-editar/motivo.service'

import { Canal } from './../ventas-proyecto-nuevo-editar/canal'
import { CanalService } from './../ventas-proyecto-nuevo-editar/canal.service'

import { Categoria } from './../ventas-proyecto-nuevo-editar/categoria'
import { CategoriaService } from './../ventas-proyecto-nuevo-editar/categoria.service'

import { Inmueble } from './../inmuebles/inmueble'
import { InmuebleService } from './../inmuebles/inmueble.service'

import { Financiamiento } from './../ventas-proyecto-nuevo-editar/financiamiento'
import { FinanciamientoService } from './../ventas-proyecto-nuevo-editar/financiamiento.service'

import { Venta } from './../ventas-proyecto-nuevo-editar/venta'
import { VentaService } from './../ventas/ventas.service'

import { Ventainmueble } from './../ventas-proyecto-nuevo-editar/ventainmueble'
import { Ventainmueblenodos } from './../ventas-proyecto-nuevo-editar/ventainmueblenodos'
import { VentainmuebleService } from './../ventas-proyecto-nuevo-editar/ventasinmueble.service'
import { isNull } from 'util'

import { Ventanodos } from './ventanodos'
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component'

@Component({
  selector: 'app-ventas-proyecto-editar',
  templateUrl: './ventas-proyecto-editar.component.html'
})
export class VentasProyectoEditarComponent implements OnInit {

  public errores: string[]

  public idVenta: number
  public ventanodos: Ventanodos = new Ventanodos()

  public clienteSeleccionado: Cliente = new Cliente()
  public nrodoc: string

  tipoinmueblecategoria: Tipoinmueblecategoria[]
  tipoinmueblecategoriaSeleccionado: number

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

  inmueblesEliminados = []

  fechaInicioAhorro: string
  fechaFinAhorro: string

  ventainmueble: Ventainmueble = new Ventainmueble()
  ventainmueblenodos: Ventainmueblenodos = new Ventainmueblenodos()

  @ViewChild('dpfechaInicioAhorro', { static: true }) dpfechaInicioAhorro: DatepickerRoundedComponent
  @ViewChild('dpfechaFinAhorro', { static: true }) dpfechaFinAhorro: DatepickerRoundedComponent

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
    private ventainmuebleService: VentainmuebleService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramIdProyecto = parseInt(params.get('id'))
      if(!isNull(params.get('dni'))){
        this.nrodoc = params.get('dni')
        this.idVenta = parseInt(params.get('idventa'))
        this.obtenerClienteSeleccionado(params.get('dni'))
        this.obtenerDatosDeVenta(this.idVenta)
      }
    })

    this.obtenerTipoInmuebleCategoria()
    this.obtenerTipoCredito()
    this.obtenerBancos()
    this.obteneradicionalesPorCategoria(1)
    this.obtenerCanal()
    this.obtenerMotivo()
    this.obtenerCategoria()

    this.agregarDepartamentoExistente()
    this.agregarEstacionamientoExistente()
  }
  
  onFechaInicioAhorro(newdate: string) {
    this.fechaInicioAhorro = newdate
  }

  onFechaFinAhorro(newdate: string) {
    this.fechaFinAhorro = newdate
  }

  agregarCliente(nrodoc: string){
    if(nrodoc == '' || nrodoc == undefined){
      swal('No hizo una busqueda de cliente', '', 'warning')
      return
    }

    this.router.navigate(['/cliente-nuevo-editar/0/' + nrodoc + '/' + this.paramIdProyecto])
  }

  public obtenerDatosDeVenta(idVenta: number) {
    this.ventaService.getVentasById(idVenta).subscribe((venta) => {
      this.ventanodos = venta

      this.financiamiento.idFinanciamiento = this.ventanodos.financiamiento.idFinanciamiento

      this.porcentaje_cuota_inicial = parseInt(this.ventanodos.financiamiento.porcCuotaInicial)
      this.cuota_inicial = this.ventanodos.financiamiento.nomtoCuotaInicial
      this.total_financiamiento = this.ventanodos.financiamiento.financiamiento

      this.motivoSeleccionado = this.ventanodos.motivo.idMotivo
      this.canalSeleccionado = this.ventanodos.canal.idCanal
      this.categoriaSeleccionado = this.ventanodos.categoria.idCategoria

      this.afp = this.ventanodos.financiamiento.afp
      this.asesor = this.ventanodos.financiamiento.asesor
      this.ahorro = this.ventanodos.financiamiento.ahorro
      this.bancoSeleccionado = this.ventanodos.financiamiento.idBanco
      this.bono = this.ventanodos.financiamiento.bono
      this.tipocreditoSeleccionado = this.ventanodos.financiamiento.idTipoCredito

      this.fechaInicioAhorro = this.ventanodos.financiamiento.fechaInicioAhorro
      this.fechaFinAhorro = this.ventanodos.financiamiento.fechaFinAhorro

      this.dpfechaInicioAhorro.setValue( this.ventanodos.financiamiento.fechaInicioAhorro )
      this.dpfechaFinAhorro.setValue( this.ventanodos.financiamiento.fechaFinAhorro )

      this.totalInmuebles
    })
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

  public agregarDepartamentoExistente() {
    this.ventainmuebleService
      .getInmueblesPorVenta(this.idVenta)
      .subscribe((response) => {
        for(let x = 0 ; x < response.length ; x++ ){
          if(response[x].inmueble.tipoInmueble.idTipoInmueble == 1){
            let tInmueble = new Inmueble()
            tInmueble.numero = response[x].inmueble.numero
            tInmueble.cantidadDormitorio = response[x].inmueble.cantidadDormitorio
            tInmueble.idInmueble = response[x].inmueble.idInmueble
            tInmueble.idProyecto = response[x].inmueble.idProyecto
            tInmueble.idVentaInmueble = response[x].idVentaInmueble
            tInmueble.precio = response[x].precio
            tInmueble.descuento = response[x].descuento
            tInmueble.ayudainicial = response[x].ayudainicial
            tInmueble.areaLibre = response[x].areaLibre
            tInmueble.areaTechada = response[x].areaTechada
            tInmueble.areaTotal = response[x].areaTotal
            tInmueble.total = response[x].precio
            this.departamentosAgregados.push(tInmueble)
          }
        }
      })
  }

  public agregarEstacionamientoExistente() {
    this.ventainmuebleService
      .getInmueblesPorVenta(this.idVenta)
      .subscribe((response) => {
        for(let x = 0 ; x < response.length ; x++ ){
          if(response[x].inmueble.tipoInmueble.idTipoInmueble == 2){
            let tInmueble = new Inmueble()
            tInmueble.numero = response[x].inmueble.numero
            tInmueble.cantidadDormitorio = response[x].inmueble.cantidadDormitorio
            tInmueble.idInmueble = response[x].inmueble.idInmueble
            tInmueble.idProyecto = response[x].inmueble.idProyecto
            tInmueble.idVentaInmueble = response[x].idVentaInmueble
            tInmueble.precio = response[x].precio
            tInmueble.descuento = response[x].descuento
            tInmueble.ayudainicial = response[x].ayudainicial
            tInmueble.areaLibre = response[x].areaLibre
            tInmueble.areaTechada = response[x].areaTechada
            tInmueble.areaTotal = response[x].areaTotal
            tInmueble.total = response[x].precio
            this.adicionalAgregados.push(tInmueble)
          }
        }
      })
  }

  public agregarAdicionalExistente() {
    this.inmuebleService
      .getInmueblesByIdInmueble(this.idAdicionalSeleccionado)
      .subscribe((response) => {
        let tInmueble = new Inmueble()
        tInmueble.idVentaInmueble = 0
        tInmueble = response
        tInmueble.descuento = 0
        tInmueble.ayudainicial = 0
        tInmueble.total = tInmueble.precio - tInmueble.descuento - tInmueble.ayudainicial
        this.adicionalAgregados.push(tInmueble)
      })
  }

  public agregarDepartamento() {
    this.inmuebleService
      .getInmueblesByIdInmueble(this.idInmuebleSeleccionado)
      .subscribe((response) => {
        let tInmueble = new Inmueble()
        tInmueble = response
        tInmueble.idVentaInmueble = 0
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
        tInmueble.idVentaInmueble = 0
        tInmueble.descuento = 0
        tInmueble.ayudainicial = 0
        tInmueble.total = tInmueble.precio - tInmueble.descuento - tInmueble.ayudainicial
        this.adicionalAgregados.push(tInmueble)
      })
  }

  public quitarDepartamento(i: number) {
    this.inmueblesEliminados.push(this.departamentosAgregados[i].idVentaInmueble)
    this.departamentosAgregados.splice(i, 1)
  }

  public quitarAdicional(i: number) {
    this.inmueblesEliminados.push(this.adicionalAgregados[i].idVentaInmueble)
    this.adicionalAgregados.splice(i, 1)
  }

  totalInmuebles: number 
  porcentaje_cuota_inicial: number
  cuota_inicial: number
  total_financiamiento: number

  getTotalVenta() {
    let totalDepartamentos = 0;
    let totalAdicional = 0;
    for (var i = 0; i < this.departamentosAgregados.length; i++) {
      totalDepartamentos += this.departamentosAgregados[i].precio - ( ( this.departamentosAgregados[i].precio * this.departamentosAgregados[i].descuento ) / 100 ) - this.departamentosAgregados[i].ayudainicial;
    }
    for (var i = 0; i < this.adicionalAgregados.length; i++) {
      totalAdicional += this.adicionalAgregados[i].precio - ( ( this.adicionalAgregados[i].precio * this.adicionalAgregados[i].descuento ) / 100 ) - this.adicionalAgregados[i].ayudainicial;
    }
    this.totalInmuebles = totalDepartamentos + totalAdicional;
    return this.totalInmuebles;
  }

  siguientePagina(){
    document.getElementById('v-pills-profile-tab').click()
  }

  afp: number
  asesor: string
  ahorro: number
  bono: number

  guardarFinanciamiento(){

    if(this.clienteSeleccionado.idCliente == 0){
      swal('No se selecciono ningun cliente', '', 'warning')
      return
    }

    if(this.departamentosAgregados.length == 0){
      swal('No hay departamentos agregados', '', 'warning')
      return
    }

    if(this.porcentaje_cuota_inicial == 0 || this.porcentaje_cuota_inicial == null){
      swal('Ingrese la cuota inicial', '', 'warning')
      return
    }

    if(this.motivoSeleccionado == 0 || this.motivoSeleccionado == null){
      swal('Seleccione un motivo', '', 'warning')
      return
    }

    if(this.canalSeleccionado == 0 || this.canalSeleccionado == null){
      swal('Seleccione un canal', '', 'warning')
      return
    }

    if(this.categoriaSeleccionado == 0 || this.categoriaSeleccionado == null){
      swal('Seleccione una categoria', '', 'warning')
      return
    }

    if(this.tipocreditoSeleccionado == 0 || this.tipocreditoSeleccionado == null){
      swal('Seleccione un tipo de credito', '', 'warning')
      return
    }

    if(this.bono == 0 || this.bono == null){
      this.bono = 0
    }

    if(this.afp == 0 || this.afp == null){
      this.afp = 0
    }

    if(this.bancoSeleccionado == 0 || this.bancoSeleccionado == null){
      swal('Seleccione un banco', '', 'warning')
      return
    }

    if(this.asesor == '' || this.asesor == null){
      this.asesor = ''
    }

    if(this.ahorro == 0 || this.ahorro == null){
      this.ahorro = 0
    }

    if(this.fechaInicioAhorro == '' || this.fechaInicioAhorro == null){
      this.fechaInicioAhorro = ''
    }

    if(this.fechaFinAhorro == '' || this.fechaFinAhorro == null){
      this.fechaFinAhorro = ''
    }
    // this.financiamiento.idFinanciamiento = 0
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
    this.financiamiento.nomtoCuotaInicial = ( ( this.totalInmuebles * this.porcentaje_cuota_inicial ) / 100 )
    this.financiamiento.porcCuotaInicial = this.porcentaje_cuota_inicial
    this.financiamiento.financiamiento = this.totalInmuebles - this.financiamiento.nomtoCuotaInicial

    this.financiamientoService.editarFinanciamiento(this.financiamiento, this.financiamiento.idFinanciamiento).subscribe(
      (response) => {
        this.guardarVenta(response.idFinanciamiento)
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )

  }

  guardarVenta(idFinanciamiento: number){
    // this.venta.idVenta = 0

    this.venta.idVendedor = 2 // id vendedor logueado

    this.venta.enable = 1
    this.venta.idEstadoVenta = 1
    // this.venta.fechaCaida = ""
    // this.venta.fechaDesembolso = ""
    // this.venta.fechaEpp = ""
    // this.venta.fechaMinuta = ""
    // this.venta.fechaSeparacion = this.obtenerFechaActual()

    this.venta.idCliente = this.clienteSeleccionado.idCliente
    this.venta.idFinanciamiento = idFinanciamiento
    this.venta.idProyecto = this.paramIdProyecto

    this.venta.idMotivo = this.motivoSeleccionado
    this.venta.idCanal = this.canalSeleccionado
    this.venta.idCategoria = this.categoriaSeleccionado

    this.venta.ayudaInicial = this.porcentaje_cuota_inicial
    this.venta.importe = this.totalInmuebles
    this.venta.descuento = ( ( this.totalInmuebles * this.porcentaje_cuota_inicial ) / 100 )
    this.venta.total = this.venta.importe - this.venta.descuento

    this.ventaService.editarVenta(this.venta, this.idVenta).subscribe(
      (response) => {
        this.guardarInmuebles(response.idVenta)
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )

  }

  obtenerFechaActual(){
    var date=new Date();  
    var day=date.getDate();  
    var month=date.getMonth()+1;  
    var year=date.getFullYear();  
    return year+"-"+month+"-"+day;
  }

  guardarInmuebles(idVenta: number){

    console.info(this.inmueblesEliminados)
    if(this.inmueblesEliminados.length > 0){
      for (var i = 0; i < this.inmueblesEliminados.length; i++) {
        this.ventainmuebleService.eliminarVentainmueble(this.inmueblesEliminados[i]).subscribe(
          (response) => {},
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
      }
    }

    if(this.departamentosAgregados.length > 0){
      console.info(this.departamentosAgregados)
      for (var i = 0; i < this.departamentosAgregados.length; i++) {
        this.ventainmueble.areaLibre = this.departamentosAgregados[i].areaLibre
        this.ventainmueble.areaTechada = this.departamentosAgregados[i].areaTechada
        this.ventainmueble.areaTotal = this.departamentosAgregados[i].areaTotal
        this.ventainmueble.dormitorios = this.departamentosAgregados[i].cantidadDormitorio
        this.ventainmueble.enable = 1
        this.ventainmueble.idInmueble = this.departamentosAgregados[i].idInmueble
        this.ventainmueble.idVenta = idVenta
        this.ventainmueble.vista = ""
        this.ventainmueble.precio = this.departamentosAgregados[i].precio
        this.ventainmueble.ayudainicial = this.departamentosAgregados[i].ayudainicial
        this.ventainmueble.descuento = this.departamentosAgregados[i].descuento
        this.ventainmueble.importe = this.departamentosAgregados[i].total - ( (this.departamentosAgregados[i].total * this.departamentosAgregados[i].descuento) / 100 ) - this.departamentosAgregados[i].ayudainicial
        if( this.departamentosAgregados[i].idVentaInmueble == 0 ){
          this.ventainmuebleService.agregarVentainmueble(this.ventainmueble).subscribe(
            (response) => {},
            (err) => {
              this.errores = err.error.errors as string[]
            }
          )
        }else{
          this.ventainmuebleService.editarVentainmueble(this.ventainmueble, this.departamentosAgregados[i].idVentaInmueble).subscribe(
            (response) => {},
            (err) => {
              this.errores = err.error.errors as string[]
            }
          )
        }

      }
    }
    if(this.adicionalAgregados.length > 0){
      console.info(this.adicionalAgregados)
      for (var i = 0; i < this.adicionalAgregados.length; i++) {
        this.ventainmueble.areaLibre = this.adicionalAgregados[i].areaLibre
        this.ventainmueble.areaTechada = this.adicionalAgregados[i].areaTechada
        this.ventainmueble.areaTotal = this.adicionalAgregados[i].areaTotal
        this.ventainmueble.dormitorios = this.adicionalAgregados[i].cantidadDormitorio
        this.ventainmueble.enable = 1
        this.ventainmueble.idInmueble = this.adicionalAgregados[i].idInmueble
        this.ventainmueble.idVenta = idVenta
        this.ventainmueble.precio = this.adicionalAgregados[i].precio
        this.ventainmueble.vista = ""
        this.ventainmueble.ayudainicial = this.adicionalAgregados[i].ayudainicial
        this.ventainmueble.descuento = this.adicionalAgregados[i].descuento
        this.ventainmueble.importe = this.adicionalAgregados[i].total - ( (this.adicionalAgregados[i].total * this.adicionalAgregados[i].descuento) / 100 ) - this.adicionalAgregados[i].ayudainicial
        if( this.adicionalAgregados[i].idVentaInmueble == 0 ){
          this.ventainmuebleService.agregarVentainmueble(this.ventainmueble).subscribe(
            (response) => {},
            (err) => {
              this.errores = err.error.errors as string[]
            }
          )
        }else{
          this.ventainmuebleService.editarVentainmueble(this.ventainmueble, this.adicionalAgregados[i].idVentaInmueble).subscribe(
            (response) => {},
            (err) => {
              this.errores = err.error.errors as string[]
            }
          )
        }
      }
    }

    this.router.navigate(['/ventas-proyecto/' + this.paramIdProyecto])
    swal('Venta registrada correctamente', '', 'success')

  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}
