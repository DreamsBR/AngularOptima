import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core'
import { Inmueble } from './inmueble'
import { InmuebleService } from './inmueble.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {
  status = false
  displayedColumns: string[] = [
    'editar',
    'idTipoInmuebleCategoria',
    'numero',
    'areaTechada',
    'areaLibre',
    'areaTotal',
    'idTipoVista',
    'cantidadDormitorio',
    'enable',
    'moneda',
    'tipoCambio',
    'precio'
  ]
  inmuebleLista = new MatTableDataSource<Inmueble>()

  idProyecto: number = 0
  inmuebleSeleccionado: any


  //totalData: number = 0
  //pageIndex: number = 0
  //pageSize: number = 5
  //pageSizeOptions: number[] = [5, 10, 25, 250]

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(
    private inmuebleService: InmuebleService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const paramIdProyecto: number = parseInt(params.get('idProyecto'))
      if (paramIdProyecto > 0) {
        this.idProyecto = paramIdProyecto
        this.fetchDataByIdProyecto(this.idProyecto)
      }
    })
  }

  fetchDataByIdProyecto(idProyecto: number) {
    this.inmuebleService.getInmueblesByIdProyecto(idProyecto).subscribe((inmueblesJsonResponse) => {
      this.inmuebleLista = new MatTableDataSource<Inmueble>(inmueblesJsonResponse)
      console.info(inmueblesJsonResponse)
      //this.pageIndex = inmueblesJsonResponse.pageable.pageNumber
      //this.totalData = inmueblesJsonResponse.totalElements
    })
  }

  menuToggle() {
    this.status = !this.status
  }

  regresar() {
    window.location.href = '/proyectos'
  }

  goToAgregar() {
    window.location.href = '/inmueble-nuevo-editar/0?idProyecto=' + this.idProyecto
  }

  public seleccionarInmueble(inmueble: any){
    this.inmuebleSeleccionado = inmueble
  }

  public eliminarInmueble(): void {
    console.log(this.inmuebleSeleccionado)
    let delInmueble = {
      "areaLibre": this.inmuebleSeleccionado.areaLibre,
      "areaTechada": this.inmuebleSeleccionado.areaTechada,
      "areaTotal": this.inmuebleSeleccionado.areaTotal,
      "cantidadDormitorio": this.inmuebleSeleccionado.cantidadDormitorio,
      "enable": 0,
      "idInmueble": this.inmuebleSeleccionado.idInmueble,
      "idProyecto": this.inmuebleSeleccionado.idProyecto,
      "idTipoInmueble": this.inmuebleSeleccionado.tipoInmueble.idTipoInmueble,
      "idTipoInmuebleCategoria": this.inmuebleSeleccionado.tipoInmuebleCategoria.idTipoInmuebleCategoria,
      "idTipoVista": this.inmuebleSeleccionado.tipoVista.idTipoVista,
      "numero": this.inmuebleSeleccionado.numero,
      "precio": this.inmuebleSeleccionado.precio,
      "moneda" : this.inmuebleSeleccionado.moneda,
      "tipoCambio": this.inmuebleSeleccionado.tipoCambios

    }

    this.inmuebleService.actualizarInmueble(delInmueble, delInmueble.idInmueble).subscribe((resp) => {
      this.fetchDataByIdProyecto(this.idProyecto)
      document.getElementById('cerrarModalEliminar').click()
    })

    // const delColaborador = JSON.parse(JSON.stringify(colaborador))
    // delColaborador.idTipoDocumento = colaborador.tipoDocumento.idTipoDocumento
    // delColaborador.enable = 0
    // this.colaboradorService
    // .actualizarColaborador(delColaborador, colaborador.idColaborador)
    // .subscribe(
    //   (response) => {
    //     document.getElementById('cerrarModalEliminar').click()
    //     this.obtenerColaborador()
    //   },
    //   (err) => {}
    // )
  }

}
