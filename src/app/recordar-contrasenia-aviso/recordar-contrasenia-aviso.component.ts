import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordar-contrasenia-aviso',
  templateUrl: './recordar-contrasenia-aviso.component.html'
})
export class RecordarContraseniaAvisoComponent implements OnInit {

  titulo: string = "Restableces contraseña";
  subtitulo: string = "Te hemos enviado un correo electronico a la cuenta de registro.";
  usuario: Usuario;

  constructor(
    private authService: AuthService,
    private router: Router
    ) 
  {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      swal('Login',`El usuario ${this.authService.usuario.userName} ya se encuentra logeado `,'info');
      this.router.navigate(['/clientes']);
    }
  }

  public logIn(): void {
    this.router.navigate(['/login']);
  }

}
