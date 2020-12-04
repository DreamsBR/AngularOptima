import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordar-contrasenia-cambio',
  templateUrl: './recordar-contrasenia-cambio.component.html'
})

export class RecordarContraseniaCambioComponent implements OnInit {

  titulo = 'Restableces contraseña';
  usuario: Usuario;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      swal('Login', `El usuario ${this.authService.usuario.userName} ya se encuentra logeado `, 'info');
      this.router.navigate(['/clientes']);
    }
  }

  public logIn(): void {
    this.router.navigate(['/login']);
  }

}