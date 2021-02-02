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
        let proyectos = response
        for(let x = 0 ; x<response.length ; x++ ){
          this.jefaturaproyectoService.getProyectoPorJefatura(proyectos[x].idJefatura).subscribe((
            res) => {
            // console.info(response[0])
            if( res[0] != undefined ){
              // console.info(res[0])
              this.proyectosLista.push(res[0])
            }
          })
        }
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
