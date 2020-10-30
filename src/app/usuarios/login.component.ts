import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  titulo: string = "Iniciar sesión";
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
      //swal('Login',`El usuario ${this.authService.usuario.userName} ya se encuentra logeado `,'info');
      this.router.navigate(['/clientes']);
    }
  }

  public logIn(): void {

    if (this.usuario.userName == null || this.usuario.password == null) {
      swal('Aviso', 'Usuario o Contraseña vacia', 'warning');
      return;
    }

    this.authService.guardarUsuario('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiMSJ9.2WhGrww2dIE0l9tBqSVEOxnkANAxqaGXzBMscd4mSlg');
    this.authService.guardarToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiMSJ9.2WhGrww2dIE0l9tBqSVEOxnkANAxqaGXzBMscd4mSlg');
    let user = this.authService.usuario;
    this.router.navigate(['/clientes']);

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
