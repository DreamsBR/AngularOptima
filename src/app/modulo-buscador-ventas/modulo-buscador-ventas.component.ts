import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { VentaNodos } from '../ventas/ventanodos'
import { MatTableDataSource } from '@angular/material/table'
import { Observable, forkJoin } from 'rxjs'
import { ModuloBuscadorVentasService } from './modulo-buscador-ventas.service'
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component'
import { EstadoVenta } from '../estados-ventas/estadoventa'
import { Clientenodo } from '../clientes/clientenodo'
import { ProyectoService } from '../proyectos/proyectos.service'
import { Proyecto } from '../proyectos/proyecto'
import { ExporterService } from '../helpers/exporter.service'
import { Cliente } from '../clientes/cliente'

import { DatePipe } from '@angular/common';
import * as moment from 'moment'

@Component({
  selector: 'modulo-buscador-ventas',
  templateUrl: './modulo-buscador-ventas.component.html',
  styleUrls: ['./modulo-buscador-ventas.component.css']
})
export class ModuloBuscadorVentasComponent implements OnInit {
  loading: boolean = false

  @Input() idProyecto: number = null

  optionsEstadoVenta: EstadoVenta[] = []
  displayedColumns: string[] = ['editar', 'nombres', 'apellidos', 'nrodoc', 'fecharegistro', 'totalventa', 'financiado', 'estado']
  itemsLista = new MatTableDataSource<VentaNodos>()

  TIPOS_DE_BUSQUEDA = {
    POR_FECHA: 'POR_FECHA',
    POR_ESTADO: 'POR_ESTADO',
    POR_DNI: 'POR_DNI'
    // POR_FECHA_Y_ESTADO: 'POR_FECHA_Y_ESTADO',
    // POR_FECHA_Y_DNI: 'POR_FECHA_Y_DNI',
    // POR_ESTADO_Y_DNI: 'POR_ESTADO_Y_DNI',
    // POR_TODOS: 'POR_TODOS'
  }

  groupFilterSelected = []

  filterDesde = null
  filterHasta = null

  filterIdEstadoVenta = '0'

  textToSearchDNI = ''

  filterCliente: Clientenodo = null

  filterSidebarOpen: boolean = true

  proyecto: Proyecto = null

  @ViewChild('dpfechaDesde', { static: true }) dpfechaDesde: DatepickerRoundedComponent
  @ViewChild('dpfechaHasta', { static: true }) dpfechaHasta: DatepickerRoundedComponent

  constructor(
    private mbvService: ModuloBuscadorVentasService, 
    private proyectoService: ProyectoService, 
    private exporterService: ExporterService,
    public datepipe: DatePipe
    ) {

    }

  toogleSidebarFilter() {
    this.filterSidebarOpen = !this.filterSidebarOpen
  }

  ngOnInit() {
    // if (!this.idProyecto) {
    //   alert('No se ha especificado un ID de Proyecto como parámetro al componente')
    //   return
    // }

    this.loading = true
    this.loadDataComponent().subscribe(
      (resp) => {
        this.optionsEstadoVenta = resp[0]
        this.proyecto = new Proyecto()
        this.proyecto.nombre = resp[1].proyecto.nombre

        // TODO: SETEAR AUTOMATICAMENTE LAS FECHAS
        this.filterDesde =  moment().clone().startOf('month').format('YYYY-MM-01')
        this.filterHasta = moment().clone().endOf('month').format('YYYY-MM-01')
        this.dpfechaDesde.setValue(this.filterDesde)
        this.dpfechaHasta.setValue(this.filterHasta)

        this.groupFilterSelected.push(this.TIPOS_DE_BUSQUEDA.POR_FECHA)
        this.aplicarFiltros()

        this.loading = false
      },
      (error) => {
        this.loading = false
        console.log(error)
      }
    )
  }








  loadDataComponent(): Observable<any[]> {
    let infoPagos = this.mbvService.getListaMaestraEstados()
    let infoProyecto = this.proyectoService.getProyectosById(this.idProyecto)
    return forkJoin([infoPagos, infoProyecto])
  }

  toggleTypeFilter(type: string) {
    if (this.groupFilterSelected.includes(type)) {
      const index = this.groupFilterSelected.indexOf(type)
      if (index > -1) {
        this.groupFilterSelected.splice(index, 1)
      }
    } else {
      this.groupFilterSelected.push(type)
    }
    // console.log(this.groupFilterSelected)
  }

  // Eventos DOM en Sidebar Filtros
  onfechaDesde(fechaDesde: string) {
    this.filterDesde = fechaDesde
  }
  onfechaHasta(fechaHasta: string) {
    this.filterHasta = fechaHasta
  }
  buscarClientePorInputDNI() {
    if (this.textToSearchDNI.length !== 8) {
      alert('El DNI debe tener 8 números')
      return
    }
    this.filterCliente = null
    this.mbvService.buscarClientesPorDni(this.textToSearchDNI).subscribe(
      (resp) => {
        if (resp.length > 0) {
          this.filterCliente = resp[0]
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // -------------------------------------------
  // -------- Conjugaciones de filtrado --------
  // -------------------------------------------
  // Filtros individuales
  listarPorRangoFecha() {
    if (!this.filterDesde || !this.filterHasta) {
      alert('Seleccione los rangos de fecha')
      return
    }
    this.mbvService.getVentaByRange(this.idProyecto, this.filterDesde, this.filterHasta).subscribe((resp) => {
      this.itemsLista = new MatTableDataSource<VentaNodos>(resp)
    })
  }
  listarPorEstadoVenta() {
    if (this.filterIdEstadoVenta === null || this.filterIdEstadoVenta === '0') {
      alert('Debes seleccionar un estado de venta')
      return
    }
    this.mbvService.getVentaByProyectoAndEstado(this.idProyecto, parseInt(this.filterIdEstadoVenta)).subscribe((resp) => {
      this.itemsLista = new MatTableDataSource<VentaNodos>(resp)
    })
  }
  listarPorDNI() {
    if (!this.filterCliente) {
      alert('Primero debe encontrar un cliente por DNI y luego Aplicar')
      return
    }
    const idCliente = this.filterCliente.idCliente
    this.mbvService.getVentaByCliente(idCliente).subscribe((resp) => {
      this.itemsLista = new MatTableDataSource<VentaNodos>(resp.content)
    })
  }
  // Filtros dobles
  listarPorFechayEstado() {
    if (!this.filterDesde || !this.filterHasta || this.filterIdEstadoVenta === null || this.filterIdEstadoVenta === '0') {
      alert('Seleccione los rangos de fecha y el estado')
      return
    }
    this.mbvService
      .getVentaByProyectoAndEstadoRange(this.idProyecto, parseInt(this.filterIdEstadoVenta), this.filterDesde, this.filterHasta)
      .subscribe((resp) => {
        this.itemsLista = new MatTableDataSource<VentaNodos>(resp)
      })
  }

  // Boton Aplicar
  aplicarFiltros() {
    if (!this.idProyecto) {
      alert('No se ha especificado un ID de Proyecto como parámetro al componente')
      return
    }

    if (
      // CON LOS TRES FILTRADOS ACTIVADOS
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)
    ) {
      console.log('falta implementar el api para estas tres combinaciones')
    } else if (
      // CON LOS DOS FILTRADOS ACTIVADOS - Fecha y estado
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO)
    ) {
      this.listarPorFechayEstado()
    } else if (
      // CON LOS DOS FILTRADOS ACTIVADOS - Fecha y DNI
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)
    ) {
      console.log('falta implementar el api para estas dos combinaciones')
    } else if (
      // CON LOS DOS FILTRADOS ACTIVADOS - Estado y DNI
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)
    ) {
      console.log('falta implementar el api para estas dos combinaciones')
    } else if (this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA)) {
      // CON LOS UN FILTRO ACTIVADO - Fecha
      this.listarPorRangoFecha()
    } else if (this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO)) {
      // CON LOS UN FILTRO ACTIVADO - Estado
      this.listarPorEstadoVenta()
    } else if (this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)) {
      // CON LOS UN FILTRO ACTIVADO - DNI
      this.listarPorDNI()
    } else {
      alert('Seleccione los filtros a buscar')
    }
  }

  exportar() {

    let estadoVenta = 1;
    if( parseInt(this.filterIdEstadoVenta) != 0 ){
      estadoVenta = parseInt(this.filterIdEstadoVenta)
    }

    this.mbvService.buscarVentasSearch(
      this.datepipe.transform( this.filterDesde, 'dd/MM/yyyy'),
      this.datepipe.transform( this.filterHasta, 'dd/MM/yyyy'),
      0,
      estadoVenta,
      this.idProyecto
    ).subscribe(
      (data) => {
        console.info(data)

        const itemsExportFormat:ExportItemExcel[] = []

        data.forEach(element => {
          const tmpItem:any = {

            ClienteNombre : element.venta.cliente.nombres + ' ' + element.venta.cliente.apellidos,
            nroDoc : element.venta.cliente.nroDocumento,
            estadoCivil : element.venta.cliente.estadoCivil.nombre,
            ocupacion : element.venta.cliente.ocupacion,
            conyuge : element.venta.cliente.conyuge,
            nroDocConyuge : element.venta.cliente.nroDocConyuge,
            estadoCivilConyuge : element.venta.cliente.estadoCivilConyuge.nombre,
            ocupacionConyuge : element.venta.cliente.ocupacionConyuge,
            email : element.venta.cliente.email,
            telefono : element.venta.cliente.telefono,
            direccion : element.venta.cliente.direccion,
            distrito : element.venta.cliente.distrito,
            provincia : element.venta.cliente.provincia,
            fechaNacimiento : this.datepipe.transform(element.venta.cliente.fechaNacimiento, 'dd/MM/yyyy'),
            edad: moment().diff(element.venta.cliente.fechaNacimiento, 'years'),
            lugarTrabajo: element.venta.cliente.lugarTrabajo,
            ingresos: element.venta.cliente.ingresos,
            motivo: element.venta.motivo.nombre,
            canal: element.venta.canal.nombre,
            categoria: element.venta.canal.nombre,
            asesor : element.venta.cliente.asesor,

            // Datos de inmuebles
            tipoInmueble : element.listVentaInmueble[0].inmueble.tipoInmueble.nombre,
            numero : element.listVentaInmueble[0].inmueble.numero,
            areaTechada : element.listVentaInmueble[0].areaTechada,
            areaLibre : element.listVentaInmueble[0].areaLibre,
            areaTotal : element.listVentaInmueble[0].areaTotal,
            tipoVista : element.listVentaInmueble[0].inmueble.tipoVista.nombre,
            dormitorios : element.listVentaInmueble[0].dormitorios,  

            // Precio de venta
            precio : element.listVentaInmueble[0].precio,
            descuento : element.listVentaInmueble[0].descuento,
            ayudainicial : element.listVentaInmueble[0].ayudainicial,
            importe : element.listVentaInmueble[0].importe,

            // Status de venta
            fechaSeparacion : this.datepipe.transform( element.listPagos[0].venta.fechaSeparacion, 'dd/MM/yyyy'),
            fechaMinuta : this.datepipe.transform( element.listPagos[0].venta.fechaMinuta, 'dd/MM/yyyy'),
            fechaDesembolso : this.datepipe.transform( element.listPagos[0].venta.fechaDesembolso, 'dd/MM/yyyy'),
            fechaEpp : this.datepipe.transform( element.listPagos[0].venta.fechaEpp, 'dd/MM/yyyy'),
            fechaCaida : this.datepipe.transform( element.listPagos[0].venta.fechaCaida, 'dd/MM/yyyy'),
            status : element.venta.estadoVenta.nombre,

            // ultimo pago?
            monto : element.listPagos[0].monto,
            porcentaje : element.listPagos[0].porcentaje,
            fechaPago : element.listPagos[0].fecha,
            numeroOperacion : element.listPagos[0].numeroOperacion,
            pago : element.listPagos[0].pago,

            // Financiamiento
            financiamiento : element.venta.financiamiento.tipoCredito.nombre,
            montoFinanciado : element.venta.financiamiento.montoFinanciado,
            fechaFinAhorro : element.venta.financiamiento.fechaInicioAhorro,
            fechaInicioAhorro : element.venta.financiamiento.fechaFinAhorro,
            banco : element.venta.financiamiento.banco.nombre,
            asesorfinanciamiento : element.venta.financiamiento.asesor,

          }
          itemsExportFormat.push(tmpItem)
        })
    
        this.exporterService.exportToExcel(itemsExportFormat,'reporte_xgerencia')

      },
      (error) => {
        console.log(error)
      }
    )

  }
}

interface ExportItemExcel{
}