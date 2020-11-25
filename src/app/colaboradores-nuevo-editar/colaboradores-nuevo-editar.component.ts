import { Component, OnInit } from '@angular/core'
import { ColaboradorService } from '../colaboradores/colaborador.service'
import { Colaborador } from '../colaboradores/colaborador'
import { Router, ActivatedRoute } from '@angular/router'

import swal from 'sweetalert2'

@Component({
  selector: 'app-colaboradores-nuevo-editar',
  templateUrl: './colaboradores-nuevo-editar.component.html'
})
export class ColaboradoresNuevoEditarComponent implements OnInit {
  public colaborador: Colaborador = new Colaborador()
  public errores: string[]

  public idColaborador: number

  status = false

  constructor(
    private router: Router, 
    private colaboradorService: ColaboradorService,
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idColaborador = parseInt(params.get('id'))
    })
    if(this.idColaborador != 0){
      this.colaboradorService.obtenerColaboradorPorId(this.idColaborador).subscribe(
        (response) => {
          this.colaborador = response
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }
  }

  menuToggle() {
    this.status = !this.status
  }

  public agregarColaborador(): void {
    if(Object.keys(this.colaborador).length < 5){
      swal('Campos Incompletos de Colaboradores', '','error')
      return

    }

    if(this.colaborador.idColaborador == 0){
      this.colaboradorService.agregarColaborador(this.colaborador).subscribe(
        (response) => {
          this.router.navigate(['/colaboradores'])
          console.log(response)
          swal('Nuevo colaborador', `Colaborador ${response.nombres} creado con exito`, 'success')
        },
        err => {
          this.errores = err.error.errors as string[];
        }
      );
    }else{
      this.colaboradorService.actualizarColaborador(this.colaborador, this.colaborador.idColaborador).subscribe(
        (response) => {
          this.router.navigate(['/colaboradores'])
          swal('Editar colaborador', `Colaborador ${response.nombres} actualizado con exito`, 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }

  }

  regresar() {
    window.location.href = '/colaboradores'
  }

}
