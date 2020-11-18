import { Component, OnInit } from '@angular/core'
import { Cliente } from './../clientes/cliente'
import { ClienteService } from './../clientes/clientes.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-clientes-nuevo-editar',
  templateUrl: './clientes-nuevo-editar.component.html'
})
export class ClientesNuevoEditarComponent implements OnInit {
  public cliente: Cliente = new Cliente()
  public errores: string[]

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.info(this.cliente)
  }

  public agregarCliente(): void {
    console.info(this.cliente)
    this.cliente.idCliente = 0
    this.cliente.idPais = 1
    this.clienteService.agregarCliente(this.cliente).subscribe(
      (response) => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `Cliente ${response.cliente.nombre} creado con exito`, 'success')
      },
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
