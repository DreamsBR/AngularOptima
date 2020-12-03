import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  titulo: string = "Iniciar sesión";
  usuario: Usuario;

  modal_titulo: string = "";
  modal_mensaje: string = "";

  constructor(
    private authService: AuthService,
    private router: Router
    ) 
  {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/clientes']);
    }else{
      this.usuario.userName = 'eerazozamudio@gmail.com'
      this.usuario.password = '123456789'
    }
  }

  public logIn(): void {

    if (this.usuario.userName == null || this.usuario.password == null) {
      this.mostrarAlerta('Aviso','Ingrese usuario y contraseña por favor');
      return;
    }

    this.authService.logIn(this.usuario).subscribe(response =>{
      
      this.authService.guardarUsuario(response.accessToken);
      this.authService.guardarToken(response.accessToken);

      // let user = this.authService.usuario;

      this.router.navigate(['/clientes']);
      // this.mostrarAlerta('Aviso','Bienvenido');

    }, err =>{
      if (err.status == 400){
        this.mostrarAlerta('Aviso','Error de inicio de sesión');
      }
      if (err.status == 401){
        this.mostrarAlerta('Aviso','Error de inicio de sesión');
      }
    });

    //this.authService.guardarUsuario('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiMSJ9.2WhGrww2dIE0l9tBqSVEOxnkANAxqaGXzBMscd4mSlg');
    //this.authService.guardarToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiMSJ9.2WhGrww2dIE0l9tBqSVEOxnkANAxqaGXzBMscd4mSlg');
    //this.router.navigate(['/clientes']);
  }

  public mostrarAlerta( titulo: string, mensaje: string ): void {
    this.modal_titulo = titulo;
    this.modal_mensaje = mensaje;
    document.getElementById("openModalButton").click();
  }

}
