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
      this.usuario.userName = 'optima@optimainmobiliaria.com'
      this.usuario.password = '0pt1m4.##$%&'
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
      this.router.navigate(['/clientes']);

    }, err =>{
      if (err.status == 400){
        this.mostrarAlerta('Aviso','Error de inicio de sesión');
      }
      if (err.status == 401){
        this.mostrarAlerta('Aviso','Error de inicio de sesión');
      }
    });
  }

  public mostrarAlerta( titulo: string, mensaje: string ): void {
    this.modal_titulo = titulo;
    this.modal_mensaje = mensaje;
    document.getElementById("openModalButton").click();
  }

}
