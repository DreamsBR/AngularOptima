import { Component, OnInit } from '@angular/core'
import { GerenciaService } from './../gerencias/gerencia.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'

@Component({
  selector: 'app-proyectos-gerente',
  templateUrl: './proyectos-gerente.component.html'
})

export class ProyectosGerenteComponent implements OnInit {

  idColaborador: number
  proyectosLista = []
  datos: any
  as: any

  constructor(
    private gerenciaService: GerenciaService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService    
  ) {
    this.as = authService
  }

  ngOnInit() {
    this.obtenerGerencias()
  }

  public obtenerGerencias() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idColaborador = parseInt(this.as.usuario.idColaborador);
      this.gerenciaService.getGerenciaPorColaborador(this.idColaborador).subscribe((
        clientesJsonResponse) => {
        this.datos = clientesJsonResponse
        this.proyectosLista = this.datos.listProyecto
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
