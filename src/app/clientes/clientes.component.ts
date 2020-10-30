import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './clientes.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent implements OnInit {

  status: boolean = false;
  clienteLista: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {

      this.clienteService.getClientes().subscribe(
        clientesJsonResponse => {
          this.clienteLista = clientesJsonResponse;
        }
      );

    });
  }

  menuToggle(){
    this.status = !this.status;
  }

}