import { Component, OnInit, ViewChild } from '@angular/core'
import { Estadoventa2Service } from './../estadoventa/estadoventa.service'
import { Estadoventa } from './../estadoventa/estadoventa'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-estadoventa-nuevo-editar',
  templateUrl: './estadoventa-nuevo-editar.component.html'
})
export class EstadoventaNuevoEditarComponent implements OnInit {

  public errores: string[]
  
  idEstadoventa: number
  public estadoventa: Estadoventa = new Estadoventa()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private estadoventa2Service: Estadoventa2Service,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idEstadoventa = parseInt(params.get('id'))
      if(this.idEstadoventa != 0){
        this.estadoventa2Service.obtenerEstadoventaPorId(this.idEstadoventa).subscribe(
          (response) => {
            this.estadoventa = response
          })
      }else{
        this.estadoventa.idEstadoVenta = 0
      }
    })
  }

  public guardar(): void {
    if(this.estadoventa.nombre == '' || this.estadoventa.nombre == undefined){
      swal('Falta ingresar el nombre del estadoventa', '','error')
      return
    }

    if( this.estadoventa.idEstadoVenta == 0 ){
      this.estadoventa2Service.agregar(this.estadoventa).subscribe(
        (response) => {
            this.router.navigate(['/estadoventa/'])
            swal('Registro agregado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
      this.estadoventa2Service.actualizar(this.estadoventa, this.estadoventa.idEstadoVenta).subscribe(
        (response) => {
            this.router.navigate(['/estadoventa/'])
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