import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordar-contrasenia',
  templateUrl: './recordar-contrasenia.component.html',
  styleUrls: ['./recordar-contrasenia.component.css']
})
export class RecordarContraseniaComponent implements OnInit {

  titulo: string = "Restableces contraseña";
  subtitulo: string = "Déjanos tu correo, enviaremos un link para restablecer la contraseña.";
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

    if (this.usuario.email == null) {
      swal('Aviso', 'El correo esta vacio.', 'warning');
      return;
    }

    this.router.navigate(['/recordar-contrasenia-aviso']);

    // this.authService.logIn(this.usuario).subscribe(response =>{
    //   this.authService.guardarUsuario(response.access_token);
    //   this.authService.guardarToken(response.access_token);
    //   let user = this.authService.usuario;
    //   this.router.navigate(['/clientes']);
    //   swal('Inicio Exitoso',`Bienvenido de vuelta ${user.userName}. Has iniciado correctamente`,'success');
    // }, err =>{
    //   if (err.status == 400){
    //     swal('Error al iniciar sesión','Usuario o clave Incorrecta','error');
    //   }
    // });

  }

}
