import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { VentaNodos } from "../ventas/ventanodos";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, forkJoin } from "rxjs";
import { ModuloBuscadorVentasService } from "./modulo-buscador-ventas.service";
import { DatepickerRoundedComponent } from "../datepicker-rounded/datepicker-rounded.component";
import { EstadoVenta } from "../estados-ventas/estadoventa";
import { Clientenodo } from "../clientes/clientenodo";
import { ProyectoService } from "../proyectos/proyectos.service";
import { Proyecto } from "../proyectos/proyecto";
import { ExporterService } from "../helpers/exporter.service";
import { Cliente } from "../clientes/cliente";

import { DatePipe } from "@angular/common";
import * as moment from "moment";

@Component({
  selector: "modulo-buscador-ventas",
  templateUrl: "./modulo-buscador-ventas.component.html",
  styleUrls: ["./modulo-buscador-ventas.component.css"],
})

export class ModuloBuscadorVentasComponent implements OnInit {
  loading: boolean = false;

  @Input() idProyecto: number = null;

  optionsEstadoVenta: EstadoVenta[] = [];
  displayedColumns: string[] = [
    "editar",
    "nombres",
    "apellidos",
    "nrodoc",
    "fecharegistro",
    "totalventa",
    "financiado",
    "estado",
  ];
  itemsLista = new MatTableDataSource<VentaNodos>();

  TIPOS_DE_BUSQUEDA = {
    POR_FECHA: "POR_FECHA",
    POR_ESTADO: "POR_ESTADO",
    POR_DNI: "POR_DNI",
    // POR_FECHA_Y_ESTADO: 'POR_FECHA_Y_ESTADO',
    // POR_FECHA_Y_DNI: 'POR_FECHA_Y_DNI',
    // POR_ESTADO_Y_DNI: 'POR_ESTADO_Y_DNI',
    // POR_TODOS: 'POR_TODOS'
  };

  groupFilterSelected = [];

  filterDesde = null;
  filterHasta = null;

  filterIdEstadoVenta = "0";

  textToSearchDNI = "";

  filterCliente: Clientenodo = null;

  filterSidebarOpen: boolean = true;

  proyecto: Proyecto = null;

  @ViewChild("dpfechaDesde", { static: true })
  dpfechaDesde: DatepickerRoundedComponent;
  @ViewChild("dpfechaHasta", { static: true })
  dpfechaHasta: DatepickerRoundedComponent;

  constructor(
    private mbvService: ModuloBuscadorVentasService,
    private proyectoService: ProyectoService,
    private exporterService: ExporterService,
    public datepipe: DatePipe
  ) {}

  toogleSidebarFilter() {
    this.filterSidebarOpen = !this.filterSidebarOpen;
  }

  ngOnInit() {
    // if (!this.idProyecto) {
    //   alert('No se ha especificado un ID de Proyecto como parámetro al componente')
    //   return
    // }

    //pocentaje * totalpaog

    this.loading = true;
    this.loadDataComponent().subscribe(
      (resp) => {
        this.optionsEstadoVenta = resp[0];
        this.proyecto = new Proyecto();
        this.proyecto.nombre = resp[1].proyecto.nombre;

        // TODO: SETEAR AUTOMATICAMENTE LAS FECHAS
        this.filterDesde = moment()
          .clone()
          .startOf("month")
          .format("YYYY-MM-Do");

        this.filterHasta = moment()
        .format("YYYY-MM-Do");
        this.dpfechaDesde.setValue(this.filterDesde);
        this.dpfechaHasta.setValue(this.filterHasta);

        this.groupFilterSelected.push(this.TIPOS_DE_BUSQUEDA.POR_FECHA);
        this.aplicarFiltros();

        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  loadDataComponent(): Observable<any[]> {
    let infoPagos = this.mbvService.getListaMaestraEstados();
    let infoProyecto = this.proyectoService.getProyectosById(this.idProyecto);
    return forkJoin([infoPagos, infoProyecto]);
  }

  toggleTypeFilter(type: string) {
    if (this.groupFilterSelected.includes(type)) {
      const index = this.groupFilterSelected.indexOf(type);
      if (index > -1) {
        this.groupFilterSelected.splice(index, 1);
      }
    } else {
      this.groupFilterSelected.push(type);
    }
    // console.log(this.groupFilterSelected)
  }

  // Eventos DOM en Sidebar Filtros
  onfechaDesde(fechaDesde: string) {
    this.filterDesde = fechaDesde;
  }
  onfechaHasta(fechaHasta: string) {
    this.filterHasta = fechaHasta;
  }
  buscarClientePorInputDNI() {
    if (this.textToSearchDNI.length !== 8) {
      alert("El DNI debe tener 8 números");
      return;
    }
    this.filterCliente = null;
    this.mbvService.buscarClientesPorDni(this.textToSearchDNI).subscribe(
      (resp) => {
        if (resp.length > 0) {
          this.filterCliente = resp[0];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // -------------------------------------------
  // -------- Conjugaciones de filtrado --------
  // -------------------------------------------
  // Filtros individuales
  listarPorRangoFecha() {
    if (!this.filterDesde || !this.filterHasta) {
      alert("Seleccione los rangos de fecha");
      return;
    }
    this.mbvService
      .getVentaByRange(this.idProyecto, this.filterDesde, this.filterHasta)
      .subscribe((resp) => {
        this.itemsLista = new MatTableDataSource<VentaNodos>(resp);
      });
  }
  listarPorEstadoVenta() {
    if (this.filterIdEstadoVenta === null || this.filterIdEstadoVenta === "0") {
      alert("Debes seleccionar un estado de venta");
      return;
    }
    this.mbvService
      .getVentaByProyectoAndEstado(
        this.idProyecto,
        parseInt(this.filterIdEstadoVenta)
      )
      .subscribe((resp) => {
        this.itemsLista = new MatTableDataSource<VentaNodos>(resp);
      });
  }
  listarPorDNI() {
    if (!this.filterCliente) {
      alert("Primero debe encontrar un cliente por DNI y luego Aplicar");
      return;
    }
    const idCliente = this.filterCliente.idCliente;
    this.mbvService.getVentaByCliente(idCliente).subscribe((resp) => {
      this.itemsLista = new MatTableDataSource<VentaNodos>(resp.content);
    });
  }
  // Filtros dobles
  listarPorFechayEstado() {
    if (
      !this.filterDesde ||
      !this.filterHasta ||
      this.filterIdEstadoVenta === null ||
      this.filterIdEstadoVenta === "0"
    ) {
      alert("Seleccione los rangos de fecha y el estado");
      return;
    }
    this.mbvService
      .getVentaByProyectoAndEstadoRange(
        this.idProyecto,
        parseInt(this.filterIdEstadoVenta),
        this.filterDesde,
        this.filterHasta
      )
      .subscribe((resp) => {
        this.itemsLista = new MatTableDataSource<VentaNodos>(resp);
      });
  }

  // Boton Aplicar
  aplicarFiltros() {
    if (!this.idProyecto) {
      alert(
        "No se ha especificado un ID de Proyecto como parámetro al componente"
      );
      return;
    }

    if (
      // CON LOS TRES FILTRADOS ACTIVADOS
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)
    ) {
      console.log("falta implementar el api para estas tres combinaciones");
    } else if (
      // CON LOS DOS FILTRADOS ACTIVADOS - Fecha y estado
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO)
    ) {
      this.listarPorFechayEstado();
    } else if (
      // CON LOS DOS FILTRADOS ACTIVADOS - Fecha y DNI
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)
    ) {
      console.log("falta implementar el api para estas dos combinaciones");
    } else if (
      // CON LOS DOS FILTRADOS ACTIVADOS - Estado y DNI
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO) &&
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)
    ) {
      console.log("falta implementar el api para estas dos combinaciones");
    } else if (
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_FECHA)
    ) {
      // CON LOS UN FILTRO ACTIVADO - Fecha
      this.listarPorRangoFecha();
    } else if (
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_ESTADO)
    ) {
      // CON LOS UN FILTRO ACTIVADO - Estado
      this.listarPorEstadoVenta();
    } else if (
      this.groupFilterSelected.includes(this.TIPOS_DE_BUSQUEDA.POR_DNI)
    ) {
      // CON LOS UN FILTRO ACTIVADO - DNI
      this.listarPorDNI();
    } else {
      alert("Seleccione los filtros a buscar");
    }
  }
/*
  colunaPago(){
    //forEach(element => {

    });
    //Tipo de credito - bancos
  }*/


  exportar() {
    let estadoVenta = 0;
    if (parseInt(this.filterIdEstadoVenta) != 0) {
      estadoVenta = parseInt(this.filterIdEstadoVenta);
    }

    this.mbvService
      .buscarVentasSearch(
        this.datepipe.transform(this.filterHasta, "yyyy-MM-dd"),
        this.datepipe.transform(this.filterDesde, "yyyy-MM-dd"),
        0,
        estadoVenta,
        this.idProyecto
      )
      .subscribe(
        (data) => {
          console.log(data)
          const itemsExportFormat: ExportItemExcel[] = [];
          //console.log(data)
          var maximoCantidadInmuebles = 0;
          data.forEach(element => {
            if(element.listVentaInmueble.length >= maximoCantidadInmuebles){
              maximoCantidadInmuebles = element.listVentaInmueble.length;
            }
          });

          var maximoCantidadPagos = 0;
          data.forEach(element => {
            if(element.listPagos.length >= maximoCantidadPagos){
              maximoCantidadPagos = element.listPagos.length;
            }
          });

          data.forEach((element) => {
            var porcentaje:number  = 0
            var totalPagos:number  = 0
            var tmpItem:any = {}

            tmpItem['ClienteNombre'] = element.venta.cliente.nombres + " " + element.venta.cliente.apellidos
            tmpItem['estadoCivil'] = element.venta.cliente.estadoCivil.nombre
            tmpItem['ocupacion'] = element.venta.cliente.ocupacion
            tmpItem['conyuge'] = element.venta.cliente.conyuge
            tmpItem['nroDocConyuge'] = element.venta.cliente.nroDocConyuge



            if( element.venta.cliente.estadoCivilConyuge.idEstadoCivil != 1 ){
              tmpItem['estadoCivilConyuge'] = element.venta.cliente.estadoCivilConyuge.nombre
            }else{
              tmpItem['estadoCivilConyuge'] = ''
            }

            tmpItem['ocupacionConyuge'] = element.venta.cliente.ocupacionConyuge
            tmpItem['email'] = element.venta.cliente.email
            tmpItem['telefono'] = element.venta.cliente.telefono
            tmpItem['direccion'] = element.venta.cliente.direccion
            tmpItem['distrito'] = element.venta.cliente.distrito
            tmpItem['provincia'] = element.venta.cliente.provincia
            tmpItem['fechaNacimiento'] = this.datepipe.transform( element.venta.cliente.fechaNacimiento, "dd/MM/yyyy" )
            tmpItem['edad'] = moment().diff( element.venta.cliente.fechaNacimiento, "years" )
            tmpItem['lugarTrabajo'] = element.venta.cliente.lugarTrabajo
            tmpItem['ingresos'] = element.venta.cliente.ingresos

            if( element.venta.motivo.idMotivo != 1 ){
              tmpItem['motivo'] = element.venta.motivo.nombre
            }else{
              tmpItem['motivo'] = ''
            }

            tmpItem['canal'] = element.venta.canal.nombre
            tmpItem['categoria'] = element.venta.canal.nombre
            tmpItem['asesor'] = element.venta.cliente.asesor

            for(let x = 0 ; x < maximoCantidadInmuebles ; x++ ){
              let numitem = x + 1
              if(element.listVentaInmueble[x] != undefined){
                tmpItem['tipoInmueble' + numitem] = element.listVentaInmueble[x].inmueble.tipoInmueble.nombre
                tmpItem['numero' + numitem] = element.listVentaInmueble[x].inmueble.numero
                tmpItem['areaTechada' + numitem] = element.listVentaInmueble[x].areaTechada
                tmpItem['areaLibre' + numitem] = element.listVentaInmueble[x].areaLibre
                tmpItem['areaTotal' + numitem] = element.listVentaInmueble[x].areaTotal
                if( element.listVentaInmueble[x].inmueble.tipoVista.idTipoVista != 1 ){
                  tmpItem['tipoVista'] = element.listVentaInmueble[x].inmueble.tipoVista.nombre
                }else{
                  tmpItem['tipoVista'] = ''
                }
                tmpItem['dormitorios' + numitem] = element.listVentaInmueble[x].dormitorios
                tmpItem['precio' + numitem] = element.listVentaInmueble[x].precio
                tmpItem['descuento' + numitem] = element.listVentaInmueble[x].descuento
                tmpItem['ayudainicial' + numitem] = element.listVentaInmueble[x].ayudainicial
                tmpItem['importe' + numitem] = element.listVentaInmueble[x].importe
              }else{
                tmpItem['tipoInmueble' + numitem] = ''
                tmpItem['numero' + numitem] = ''
                tmpItem['areaTechada' + numitem] = ''
                tmpItem['areaLibre' + numitem] = ''
                tmpItem['areaTotal' + numitem] = ''
                tmpItem['tipoVista' + numitem] = ''
                tmpItem['dormitorios' + numitem] = ''
                tmpItem['precio' + numitem] = ''
                tmpItem['descuento' + numitem] = ''
                tmpItem['ayudainicial' + numitem] = ''
                tmpItem['importe' + numitem] = ''
              }

            }
            tmpItem['fechaSeparacion'] = this.datepipe.transform( element.venta.fechaSeparacion, "dd/MM/yyyy" )
            tmpItem['fechaMinuta'] = this.datepipe.transform( element.venta.fechaMinuta, "dd/MM/yyyy" )
            tmpItem['fechaDesembolso'] = this.datepipe.transform( element.venta.fechaDesembolso, "dd/MM/yyyy" )
            tmpItem['fechaEpp'] = this.datepipe.transform( element.venta.fechaEpp, "dd/MM/yyyy" )
            tmpItem['fechaCaida'] = this.datepipe.transform( element.venta.fechaCaida, "dd/MM/yyyy" )

            tmpItem['status' ] = element.venta.estadoVenta.nombre
            /*Porcentajes*/
            var totPagos ;
            var totalPorcentajePagos;


            for(let x = 0 ; x < maximoCantidadPagos ; x++ ){
              let numitem = x + 1
              if(element.listPagos[x] != undefined){
                totalPagos = totalPagos + element.listPagos[x].monto
                totalPorcentajePagos = (totalPagos / element.venta.financiamiento.montoFinanciado) * 100
                tmpItem['PorcentajeDePago'] = totalPorcentajePagos.toFixed(2) + '%';
                tmpItem['TotalPagos'] = totalPagos;

                porcentaje  = (totalPagos / element.venta.financiamiento.montoFinanciado) * 100
                //tmpItem['porcentaje' + numitem] = porcentaje.toFixed(2)
                tmpItem['fechaPago' + numitem] = this.datepipe.transform( element.listPagos[x].fecha, "dd/MM/yyyy" )
                tmpItem['numeroOperacion' + numitem] = element.listPagos[x].numeroOperacion
                tmpItem['pago' + numitem] = element.listPagos[x].monto


              }else{

                tmpItem['fechaPago' + numitem] = ''
                tmpItem['numeroOperacion' + numitem] = ''
                tmpItem['pago' + numitem] = ''
              }

            }

            if( element.venta.financiamiento.tipoCredito.idTipoCredito != 1 ){
              tmpItem['financiamiento'] = element.venta.financiamiento.tipoCredito.nombre
            }else{
              tmpItem['financiamiento'] = ''
            }

            tmpItem['montoFinanciado'] = element.venta.financiamiento.montoFinanciado
            tmpItem['fechaFinAhorro'] = element.venta.financiamiento.fechaInicioAhorro
            tmpItem['fechaInicioAhorro'] = element.venta.financiamiento.fechaFinAhorro
            tmpItem['banco'] = element.venta.financiamiento.banco.nombre
            tmpItem['TipoDeCredito'] =  element.venta.financiamiento.tipoCredito.nombre
            tmpItem['AsesorDebanco'] = element.venta.financiamiento.asesor
            tmpItem['Bono'] =element.venta.financiamiento.bono;
            tmpItem['AFP'] =element.venta.financiamiento.afp;

            itemsExportFormat.push(tmpItem);
          });
            console.log(itemsExportFormat);
            this.exporterService.exportToExcel(
            itemsExportFormat,
            "reporte_xgerencia"
          );

        },
        (error) => {
          console.log(error);
        }
      );
  }
}

interface ExportItemExcel {}
