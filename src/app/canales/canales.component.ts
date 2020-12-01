import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Canal } from '../ventas-proyecto-nuevo-editar/canal';
import { CanalesService } from './canales.service';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html'
})
export class CanalesComponent implements OnInit {

  canalLista: Canal[]
  registroSeleccionado: Canal

  constructor(
    private canalService: CanalesService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.obtenerBancos()
  }

  public obtenerBancos() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.canalService.obtenerCanales().subscribe((
        response) => {
        this.canalLista = response
      })
    })
  }

  public eliminar(canal: Canal): void {
    this.canalService.eliminar(canal.idCanal).subscribe(
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

  public obtenerSeleccionado(canal: Canal) {
    this.registroSeleccionado = canal
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}