import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './clientes.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent implements OnInit {


  clientesLista: Cliente[];
  clienteSeleccionado: Cliente;
  paginador: any;
  base: string;
  urlBackend: String = URL_BACKEND;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if (!page) {
        page = 0;
      }
      this.clienteService.getClientes(page).subscribe(
        clientesJsonResponse => {
          this.clientesLista = clientesJsonResponse.content;
          this.paginador = clientesJsonResponse;
          this.base = "cliente";
        }
      );
    });
  }

  public eliminar(cliente: Cliente): void {
    this.clienteService.eliminarCliente(cliente.idCliente).subscribe(
      response => {
        console.info(response);
      }
    )
  }

  public obtenerClienteSeleccionado(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }
}
