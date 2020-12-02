import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Estadoventa } from './estadoventa';
import { Estadoventa2Service } from './estadoventa.service';

@Component({
  selector: 'app-estadoventa',
  templateUrl: './estadoventa.component.html'
})
export class EstadoventaComponent implements OnInit {

  estadoventaLista: Estadoventa[]
  registroSeleccionado: Estadoventa

  constructor(
    private estadoventa2Service: Estadoventa2Service,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.obtenerBancos()
  }

  public obtenerBancos() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.estadoventa2Service.obtenerEstadoventas().subscribe((
        response) => {
        this.estadoventaLista = response
      })
    })
  }

  public eliminar(Estadoventa: Estadoventa): void {
    this.estadoventa2Service.eliminar(Estadoventa.idEstadoVenta).subscribe(
      (response) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerBancos()
      },
      (err) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerBancos()
      }
    )
  }

  public obtenerSeleccionado(Estadoventa: Estadoventa) {
    this.registroSeleccionado = Estadoventa
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}