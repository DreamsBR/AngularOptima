import { Component, OnInit } from '@angular/core'
import { Cliente } from './../clientes/cliente'
import { ClienteService } from './../clientes/clientes.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-ventas-proyecto-nuevo-editar',
  templateUrl: './ventas-proyecto-nuevo-editar.component.html'
})
export class VentasProyectoNuevoEditarComponent implements OnInit {
  public clienteSeleccionado: Cliente = new Cliente()
  public nrodoc: string

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteSeleccionado.idCliente = 0
    this.clienteSeleccionado.nombres = ''
    this.clienteSeleccionado.apellidos = ''
    this.clienteSeleccionado.nroDocumento = ''
  }

  public obtenerClienteSeleccionado(nrodoc: string) {
    this.clienteService.obtenerClientesPorDni(nrodoc).subscribe((cliente) => {
      if (Object.keys(cliente).length > 0) {
        this.clienteSeleccionado = cliente[0]
      } else {
        this.clienteSeleccionado.idCliente = 0
        this.clienteSeleccionado.nombres = ''
        this.clienteSeleccionado.apellidos = ''
        this.clienteSeleccionado.nroDocumento = ''
        swal('consultar cliente', 'No se encontro el registro solicitado ', 'warning')
      }
    })
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
