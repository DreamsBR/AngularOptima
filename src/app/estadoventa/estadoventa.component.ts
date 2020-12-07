import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  public eliminar(estadoventa: Estadoventa): void {
    estadoventa.enable = 0
    this.estadoventa2Service.actualizar(estadoventa, estadoventa.idEstadoVenta).subscribe(
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