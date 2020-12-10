import { Component, OnInit, ViewChild } from '@angular/core'
import { TipoInmueble } from '../tipoinmueble/tipoInmueble'
import { TipoInmuebleService } from '../tipoinmueble/tipoInmueble.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-tipoinmueble-nuevo-editar',
  templateUrl: './tipoinmueble-nuevo-editar.component.html'
})
export class TipoinmuebleNuevoEditarComponent implements OnInit {
  public errores: string[]

  idTipoInmueble: number
  public tipoInmueble: TipoInmueble = new TipoInmueble()

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tipoInmuebleService: TipoInmuebleService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idTipoInmueble = parseInt(params.get('id'))
      if (this.idTipoInmueble != 0) {
        this.tipoInmuebleService.obtenerTipoInmueblePorId(this.idTipoInmueble).subscribe((response) => {
          this.tipoInmueble = response
        })
      } else {
        this.tipoInmueble.idTipoInmueble = 0
        this.tipoInmueble.enable = 1
      }
    })
  }

  public guardar(): void {
    if (this.tipoInmueble.nombre == '' || this.tipoInmueble.nombre == undefined) {
      swal('Falta ingresar el nombre del Tipo de inmueble', '', 'error')
      return
    }

    if (this.tipoInmueble.idTipoInmueble == 0) {
      this.tipoInmuebleService.agregar(this.tipoInmueble).subscribe(
        (_) => {
          this.router.navigate(['/tipoinmueble/'])
          swal('Registro agregado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    } else {
      this.tipoInmuebleService.actualizar(this.tipoInmueble, this.tipoInmueble.idTipoInmueble).subscribe(
        (_) => {
          this.router.navigate(['/tipoinmueble/'])
          swal('Registro acutalizado', '', 'success')
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
