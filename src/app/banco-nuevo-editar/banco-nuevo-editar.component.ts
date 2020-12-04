import { Component, OnInit, ViewChild } from '@angular/core'
import { Banco } from './../bancos/banco'
import { BancoService } from './../bancos/banco.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-banco-nuevo-editar',
  templateUrl: './banco-nuevo-editar.component.html'
})
export class BancoNuevoEditarComponent implements OnInit {

  public errores: string[]

  idBanco: number
  public banco: Banco = new Banco()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bancoService: BancoService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idBanco = parseInt(params.get('id'))
      if(this.idBanco != 0){
        this.bancoService.obtenerBancoPorId(this.idBanco).subscribe(
          (response) => {
            this.banco = response
          })
      }else{
        this.banco.idBanco = 0
        this.banco.enable = 1
      }
    })
  }

  public guardar(): void {
    if(this.banco.nombre == '' || this.banco.nombre == undefined){
      swal('Falta ingresar el nombre del banco', '','error')
      return
    }

    if( this.banco.idBanco == 0 ){
      this.bancoService.agregar(this.banco).subscribe(
        (response) => {
            this.router.navigate(['/bancos/'])
            swal('Registro agregado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
      this.bancoService.actualizar(this.banco, this.banco.idBanco).subscribe(
        (response) => {
            this.router.navigate(['/bancos/'])
            swal('Registro agregado', '', 'success')
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
