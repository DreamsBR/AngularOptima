import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Estadofinanciamiento } from './estadofinanciamiento';
import { Estadofinanciamiento2Service } from './estadofinanciamiento.service';

@Component({
  selector: 'app-estadofinanciamiento',
  templateUrl: './estadofinanciamiento.component.html'
})
export class EstadofinanciamientoComponent implements OnInit {

  estadofinanciamientoLista: Estadofinanciamiento[]
  registroSeleccionado: Estadofinanciamiento

  constructor(
    private estadofinanciamiento2Service: Estadofinanciamiento2Service,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.obtenerBancos()
  }

  public obtenerBancos() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.estadofinanciamiento2Service.obtenerEstadofinanciamientos().subscribe((
        response) => {
        this.estadofinanciamientoLista = response
      })
    })
  }

  public eliminar(estadofinanciamiento: Estadofinanciamiento): void {
    estadofinanciamiento.enable = 0
    this.estadofinanciamiento2Service.actualizar(estadofinanciamiento, estadofinanciamiento.idEstadoFinanciamiento).subscribe(
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

  public obtenerSeleccionado(estadofinanciamiento: Estadofinanciamiento) {
    this.registroSeleccionado = estadofinanciamiento
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}