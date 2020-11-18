import { Component, OnInit } from '@angular/core'
import { Cliente } from './../clientes/cliente'
import { ClienteService } from './../clientes/clientes.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-ventas-proyecto-nuevo-editar',
  templateUrl: './ventas-proyecto-nuevo-editar.component.html'
})
export class VentasProyectoNuevoEditarComponent implements OnInit {
  clienteSeleccionado: Cliente

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {}

  public obtenerClienteSeleccionado(nrodoc: string) {
    this.clienteService.obtenerClientesPorDni(nrodoc).subscribe((cliente) => {
      console.info(cliente[0])
      if (Object.keys(cliente).length > 0) {
        this.clienteSeleccionado = cliente
      } else {
        swal('consultar cliente', 'No se encontro el registro solicitado ', 'warning')
      }
    })
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
