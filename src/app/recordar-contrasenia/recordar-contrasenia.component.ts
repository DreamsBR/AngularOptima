import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordar-contrasenia',
  templateUrl: './recordar-contrasenia.component.html'
})

export class RecordarContraseniaComponent implements OnInit {

  titulo = 'Restableces contraseña';
  subtitulo = 'Déjanos tu correo, enviaremos un link para restablecer la contraseña.';
  usuario: Usuario;

  modal_titulo: string = "";
  modal_mensaje: string = "";

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

    if (this.usuario.email == null) {
      this.mostrarAlerta('Aviso','El correo esta vacio.');
      return;
    }

    this.router.navigate(['/recordar-contrasenia-aviso']);
  }

  public mostrarAlerta( titulo: string, mensaje: string ): void {
    this.modal_titulo = titulo;
    this.modal_mensaje = mensaje;
    document.getElementById("openModalButton").click();
  }

}
