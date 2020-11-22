import { Component, OnInit } from '@angular/core'
import { ColaboradorService } from '../colaboradores/colaborador.service'
import { Colaborador } from '../colaboradores/colaborador'
import { Router } from '@angular/router'

import swal from 'sweetalert2'

@Component({
  selector: 'app-colaboradores-nuevo-editar',
  templateUrl: './colaboradores-nuevo-editar.component.html'
})
export class ColaboradoresNuevoEditarComponent implements OnInit {
  public colaborador: Colaborador = new Colaborador()
  public errores: string[]

  status = false

  constructor(private router: Router, private colaboradorService: ColaboradorService) {}

  ngOnInit() {}

  menuToggle() {
    this.status = !this.status
  }

  public agregarColaborador(): void {
    this.colaboradorService.agregarColaborador(this.colaborador).subscribe(
      (response) => {
        this.router.navigate(['/colaboradores'])
        console.log(response)
        swal('Nuevo colaborador', `colaborador ${response.nombres} creado con exito`, 'success')
      },
        err => {
          this.errores = err.error.errors as string[];
        }
      );
    }

<<<<<<< HEAD
    /*
=======
  regresar() {
    window.location.href = '/colaboradores'
  }


  /*
>>>>>>> 47e62bd6942a6d610e41056ab083f1d217039f73

  public agregarCliente(): void {

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
}
