import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import { AuthService } from '../usuarios/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recordar-contrasenia-cambio',
  templateUrl: './recordar-contrasenia-cambio.component.html'
})

export class RecordarContraseniaCambioComponent implements OnInit {

  titulo = 'Restableces contraseña';
  usuario: Usuario;

  modal_titulo: string = "";
  modal_mensaje: string = "";

  flag_enviado = 0

  contrasenianueva: string
  repetircontrsenia: string
  token: string

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParams["token"];
    console.info(this.token)
  }

  public enviarClave(): void {

    if (this.contrasenianueva == null) {
      this.mostrarAlerta('Aviso','La contraseña esta vacio.');
      return;
    }

    if (this.repetircontrsenia == null) {
      this.mostrarAlerta('Aviso','La contraseña esta vacio.');
      return;
    }

    if (this.contrasenianueva.length < 8) {
      this.mostrarAlerta('Aviso','La clave debe contener al menos 8 caracteres.');
      return;
    }

    if (this.contrasenianueva != this.repetircontrsenia) {
      this.mostrarAlerta('Aviso','Las contraseñas no son iguales.');
      return;
    }

    this.authService.changePassword2(this.contrasenianueva, this.repetircontrsenia, this.token).subscribe(response =>{
      this.mostrarAlerta('Aviso','Su contraseña fue modificada correctamente');
      this.flag_enviado = 1
    }, err =>{
      if (err.status == 400){
        this.mostrarAlerta('Aviso','Su contraseña fue modificada correctamente');
        this.flag_enviado = 1
      }
    });
  }

  public mostrarAlerta( titulo: string, mensaje: string ): void {
    this.modal_titulo = titulo;
    this.modal_mensaje = mensaje;
    document.getElementById("openModalButton").click();
  }

}