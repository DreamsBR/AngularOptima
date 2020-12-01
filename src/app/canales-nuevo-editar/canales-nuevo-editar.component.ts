import { Component, OnInit, ViewChild } from '@angular/core'
import { Canal } from './../canales/canal'
import { CanalesService } from './../canales/canales.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-canales-nuevo-editar',
  templateUrl: './canales-nuevo-editar.component.html'
})
export class CanalesNuevoEditarComponent implements OnInit {

    public errores: string[]
  
    idCanal: number
    public canal: Canal = new Canal()
  
    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private canalesService: CanalesService,
    ) { }
  
    ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.idCanal = parseInt(params.get('id'))
        if(this.idCanal != 0){
          this.canalesService.obtenerCanalPorId(this.idCanal).subscribe(
            (response) => {
              this.canal = response
            })
        }else{
          this.canal.idCanal = 0
        }
      })
    }
  
    public guardar(): void {
      if(this.canal.nombre == '' || this.canal.nombre == undefined){
        swal('Falta ingresar el nombre del canal', '','error')
        return
      }
  
      if( this.canal.idCanal == 0 ){
        this.canalesService.agregar(this.canal).subscribe(
          (response) => {
              this.router.navigate(['/canales/'])
              swal('Registro agregado', '', 'success')
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
      }else{
        this.canalesService.actualizar(this.canal, this.canal.idCanal).subscribe(
          (response) => {
              this.router.navigate(['/canales/'])
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