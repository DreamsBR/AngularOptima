import { Component, OnInit, ViewChild } from '@angular/core'
import { NgbDateStruct, NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap'
import { Periodo } from './periodo'
import { PeriodoService } from './periodo.service'
import { ActivatedRoute, Router } from '@angular/router'
//import { ModalService } from './detalles/modal.service';
import { AuthService } from '../usuarios/auth.service'
import { URL_BACKEND } from '../config/config'
import swal from 'sweetalert2'

import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component'

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html'
})
export class PeriodosComponent implements OnInit {
  loading: boolean = false
  periodosLista: Periodo[] = []
  paginador: any
  periodoSeleccionado: Periodo
  urlBackend: string = URL_BACKEND
  base: string
  totalRecords: number
  public errores: string[]
  pageActual: number = 1
  public periodo: Periodo = new Periodo()
  public periodoToDelete: Periodo = new Periodo()
  model: NgbDateStruct
  date: { year: number; month: number }

  modalPeriodoModeEdit: boolean = false

  @ViewChild('dpFInicio', { static: true }) dpFInicio: DatepickerRoundedComponent
  @ViewChild('dpFTermino', { static: true }) dpFTermino: DatepickerRoundedComponent

  constructor(
    private periodoService: PeriodoService,
    private activatedRoute: ActivatedRoute,
    //public modalService: ModalService,
    public authService: AuthService
  ) {
    this.periodosLista = []
  }

  ngOnInit() {
    this.obtenerPeriodo()
  }

  public obtenerPeriodo() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number = +params.get('page')
      if (!page) {
        page = 0
      }
      this.periodoService.getPeriodos(page).subscribe((periodosJsonResponse) => {
        this.periodosLista = periodosJsonResponse.content
        this.paginador = periodosJsonResponse
        this.base = 'periodo'
      })
    })
  }

  public openAgrerarModalMode() {
    this.modalPeriodoModeEdit = false
    this.limpiarModalPeriodo()
  }

  public limpiarModalPeriodo() {
    this.periodo = new Periodo()
    this.dpFInicio.setValue('')
    this.dpFTermino.setValue('')
  }

  setObjetoPeriodoEdit(editPeriodoObj: Periodo) {
    this.modalPeriodoModeEdit = true
    this.limpiarModalPeriodo()
    this.periodo = editPeriodoObj
    this.periodo.fechaInicio = this.periodo.fechaInicio.split('/').reverse().join('-')
    this.periodo.fechaFin = this.periodo.fechaFin.split('/').reverse().join('-')
    this.dpFInicio.setValue(this.periodo.fechaInicio)
    this.dpFTermino.setValue(this.periodo.fechaFin)
  }

  setObjetoPeriodoDelete(periodoToDelete: Periodo) {
    this.limpiarModalPeriodo()
    this.periodoToDelete = periodoToDelete
  }

  public onFInicioModalChanged(val) {
    this.periodo.fechaInicio = val
  }

  public onFTerminoModalChanged(val) {
    this.periodo.fechaFin = val
  }

  public guardarPeriodo(): void {
    if (
      typeof this.periodo.nombre === 'undefined' ||
      typeof this.periodo.fechaInicio === 'undefined' ||
      typeof this.periodo.fechaFin === 'undefined'
    ) {
      swal('Campos Incompletos de Periodo', '', 'error')
      return
    } else {
      if (
        this.periodo.nombre.trim() === '' ||
        this.periodo.fechaInicio === '' ||
        this.periodo.fechaFin === ''
      ) {
        swal('Campos Incompletos de Periodo', '', 'error')
        return
      }
    }

    let path = null
    if (this.modalPeriodoModeEdit) {
      this.periodo.enable = 1
      path = this.periodoService.actualizarPeriodo(this.periodo)
    } else {
      this.periodo.enable = 1
      path = this.periodoService.agregarPeriodo(this.periodo)
    }

    path.subscribe(
      (response) => {
        document.getElementById('cerrarModalEliminar').click()
        if (this.modalPeriodoModeEdit) {
          swal(
            'Periodo actualizado',
            `Periodo ${response.nombre} ha sido actualizado con éxito`,
            'success'
          )
        } else {
          swal('Nuevo Periodo', `Periodo ${response.nombre} creado con exito`, 'success')
        }
        this.obtenerPeriodo()
      },
      (err) => {
        console.error(err)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerPeriodo()
      }
    )
  }

  public eliminarPeriodoSeleccionado() {
    this.loading = true
    this.periodoService.eliminarPeriodo(this.periodoToDelete).subscribe((_) => {
      this.loading = false
      document.getElementById('cerrarModalEliminarPeriodo').click()
      swal('Eliminado', `Periodo eliminado con éxito`, 'success')
      this.obtenerPeriodo()
    })
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}

/*public agregarCliente(): void {

    this.clienteService.agregarCliente(this.cliente)
      .subscribe(response => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `Cliente ${response.cliente.nombre} creado con exito`, 'success')

      },
        err => {
          this.errores = err.error.errors as string[];
        }
      );
  }*/
