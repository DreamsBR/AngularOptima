import { Component, OnInit, ViewChild } from '@angular/core'
import { Estadofinanciamiento2Service } from './../estadofinanciamiento/estadofinanciamiento.service'
import { Estadofinanciamiento } from './../estadofinanciamiento/estadofinanciamiento'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-estadofinanciamiento-nuevo-editar',
  templateUrl: './estadofinanciamiento-nuevo-editar.component.html'
})
export class EstadofinanciamientoNuevoEditarComponent implements OnInit {

  public errores: string[]
  
  idEstadofinanciamiento: number
  public estadofinanciamiento: Estadofinanciamiento = new Estadofinanciamiento()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private estadofinanciamiento2Service: Estadofinanciamiento2Service,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idEstadofinanciamiento = parseInt(params.get('id'))
      if(this.idEstadofinanciamiento != 0){
        this.estadofinanciamiento2Service.obtenerEstadofinanciamientoPorId(this.idEstadofinanciamiento).subscribe(
          (response) => {
            this.estadofinanciamiento = response
          })
      }else{
        this.estadofinanciamiento.idEstadoFinanciamiento = 0
        this.estadofinanciamiento.enable = 1
      }
    })
  }

  public guardar(): void {
    if(this.estadofinanciamiento.nombre == '' || this.estadofinanciamiento.nombre == undefined){
      swal('Falta ingresar el nombre del estadofinanciamiento', '','error')
      return
    }

    if( this.estadofinanciamiento.idEstadoFinanciamiento == 0 ){
      this.estadofinanciamiento2Service.agregar(this.estadofinanciamiento).subscribe(
        (response) => {
            this.router.navigate(['/estadofinanciamiento/'])
            swal('Registro agregado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
      this.estadofinanciamiento2Service.actualizar(this.estadofinanciamiento, this.estadofinanciamiento.idEstadoFinanciamiento).subscribe(
        (response) => {
            this.router.navigate(['/estadofinanciamiento/'])
            swal('Registro editado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }

  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}