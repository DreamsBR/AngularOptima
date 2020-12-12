import { Component, OnInit } from '@angular/core'
import { Banco } from './banco'
import { BancoService } from './banco.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html'
})
export class BancosComponent implements OnInit {

  bancoLista: Banco[]
  registroSeleccionado: Banco

  constructor(
    private bancoService: BancoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.obtenerBancos()
  }

  public obtenerBancos() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.bancoService.getBancos().subscribe((
        clientesJsonResponse) => {
        this.bancoLista = clientesJsonResponse
      })
    })
  }

  public eliminar(banco: Banco): void {
    banco.enable = 0
    this.bancoService.actualizar(banco, banco.idBanco).subscribe(
      (_) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerBancos()
      },
      (_) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerBancos()
      }
    )
  }

  public obtenerSeleccionado(banco: Banco) {
    this.registroSeleccionado = banco
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}
