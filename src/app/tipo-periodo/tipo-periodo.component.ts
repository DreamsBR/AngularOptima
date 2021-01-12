import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { TipoPeriodo } from './tipo-periodo'
import { TipoPeriodoService } from '../tipo-periodo/tipo-periodo.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-tipo-periodo',
  templateUrl: './tipo-periodo.component.html',
  styleUrls: ['./tipo-periodo.component.css']
})
export class TipoPeriodoComponent implements OnInit {
  loading: boolean = false
  status: boolean = false

  displayedColumns: string[] = ['editar', 'idTipoPeriodo', 'nombre']
  itemsLista = new MatTableDataSource<TipoPeriodo>()

  modalTipoPeriodoModeEdit: boolean = false
  newTipoPeriodo: TipoPeriodo = new TipoPeriodo()
  tipoPeriodoDelete: TipoPeriodo = new TipoPeriodo()

  constructor(private tipoPeriodoService: TipoPeriodoService) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.loading = true
    this.tipoPeriodoService.getTiposPeriodo().subscribe(
      (resp) => {
        this.loading = false
        this.itemsLista = new MatTableDataSource<TipoPeriodo>(resp)
      },
      (error) => {
        this.loading = false
        console.log(error)
      }
    )
  }

  public limpiarModalTipoPeriodo() {
    this.newTipoPeriodo = new TipoPeriodo()
  }

  openAgregrarModalMode() {
    this.modalTipoPeriodoModeEdit = false
    this.limpiarModalTipoPeriodo()
  }

  setObjetoTipoPeriodoEdit(editObj: TipoPeriodo) {
    this.modalTipoPeriodoModeEdit = true
    this.limpiarModalTipoPeriodo()
    this.newTipoPeriodo = { ...editObj }
  }

  public guardarTipoPeriodo(): void {
    if (typeof this.newTipoPeriodo.nombre === 'undefined') {
      swal('Campos Incompletos de Periodo', '', 'error')
      return
    } else {
      if (this.newTipoPeriodo.nombre.trim() === '') {
        swal('Campos Incompletos de Periodo', '', 'error')
        return
      }
    }

    let path = null
    if (this.modalTipoPeriodoModeEdit) {
      this.newTipoPeriodo.enable = 1
      path = this.tipoPeriodoService.actualizarTipoPeriodo(this.newTipoPeriodo)
    } else {
      this.newTipoPeriodo.enable = 1
      path = this.tipoPeriodoService.agregarTipoPeriodo(this.newTipoPeriodo)
    }

    path.subscribe(
      (response: any) => {
        document.getElementById('cerrarModalAgregarEditar').click()
        if (this.modalTipoPeriodoModeEdit) {
          swal(
            'Tipo de periodo actualizado',
            `'${response.nombre}' ha sido actualizado con éxito`,
            'success'
          )
        } else {
          swal('Nuevo tipo periodo', `Tipo: '${response.nombre}' creado con exito`, 'success')
        }
        this.getData()
      },
      (err: any) => {
        console.error(err)
        document.getElementById('cerrarModalAgregarEditar').click()
        this.getData()
      }
    )
  }

  setObjetoTipoPeriodoDelete(tipoPeriodoToDelete: TipoPeriodo) {
    this.limpiarModalTipoPeriodo()
    this.tipoPeriodoDelete = tipoPeriodoToDelete
  }

  public eliminarPeriodoSeleccionado() {
    this.loading = true
    this.tipoPeriodoService.eliminarPeriodo(this.tipoPeriodoDelete).subscribe((_) => {
      this.loading = false
      document.getElementById('cerrarModalEliminar').click()
      swal('Eliminado', `Tipo Periodo eliminado con éxito`, 'success')
      this.getData()
    })

    /* this.tipoPeriodoDelete.enable = 0
    this.tipoPeriodoService.actualizarTipoPeriodo(this.tipoPeriodoDelete).subscribe((_) => {
      this.loading = false
      document.getElementById('cerrarModalEliminar').click()
      swal('Eliminado', `Tipo Periodo eliminado con éxito`, 'success')
      this.getData()
    }) */
  }

  menuToggle() {
    this.status = !this.status
  }
}
