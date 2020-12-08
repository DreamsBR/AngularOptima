import { Component, OnInit } from '@angular/core'
import { GerenciaService } from './../gerencias/gerencia.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { VendedorService } from '../jefatura-nuevo-editar/vendedor.service'
import { JefaturaproyectoService } from '../jefatura/jefaturaproyecto.service'

@Component({
  selector: 'app-proyectos-colaborador',
  templateUrl: './proyectos-colaborador.component.html'
})
export class ProyectosColaboradorComponent implements OnInit {

  idColaborador: number
  proyectosLista = []
  datos: any
  as: any

  constructor(
    private gerenciaService: GerenciaService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public vendedorService: VendedorService,
    public jefaturaproyectoService: JefaturaproyectoService
  ) {
    this.as = authService
  }

  ngOnInit() {
    this.obtenerGerencias()
  }

  public obtenerGerencias() {
    this.activatedRoute.paramMap.subscribe((params) => {

      this.idColaborador = parseInt(this.as.usuario.idColaborador);

      this.vendedorService.getVendedorPorColaborador(this.idColaborador).subscribe((
        response) => {
        let idJefatura = response[0].idJefatura

        this.jefaturaproyectoService.getProyectoPorJefatura(idJefatura).subscribe((
          response) => {
          this.proyectosLista = response
        },
        (err) => {
          if(err.status == 500){}
        })

      },
      (err) => {
        if(err.status == 500){}
      })

    })
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}
