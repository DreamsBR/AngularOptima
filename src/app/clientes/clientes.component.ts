import { Component, OnInit } from '@angular/core'
import { Cliente } from './cliente'
import { ClienteService } from './clientes.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent implements OnInit {
  clientesLista: Cliente[]
  clienteSeleccionado: Cliente
  paginador: any
  base: string

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  )
  {}

  ngOnInit() {
    this.obtenerCliente()
  }

  public obtenerCliente() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number =+ params.get('page')
      if (!page) {
        page = 0
      }
      this.clienteService.getClientes(page).subscribe((
        clientesJsonResponse) => {
        this.clientesLista = clientesJsonResponse.content
        this.paginador = clientesJsonResponse
        this.base = 'cliente'
      })
    })
  }

  public eliminar(cliente: Cliente): void {
    this.clienteService.eliminarCliente(cliente.idCliente).subscribe(
      (response) => {
        console.info(response)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerCliente()
      },
      (err) => {
        console.error(err)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerCliente()
      }
    )
  }

  public obtenerClienteSeleccionado(cliente: Cliente) {
    this.clienteSeleccionado = cliente
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}