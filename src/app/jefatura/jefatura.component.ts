import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { JefaturaService } from './jefatura.service'
import { Jefatura } from './jefatura'
import { Jefaturanodo } from './jefaturanodo'
import { JefaturaproyectoService } from './jefaturaproyecto.service'
import { Jefaturaproyecto } from './jefaturaproyecto'
import { Jefaturaproyectonodo } from './jefaturaproyectonodo'

@Component({
  selector: 'app-jefatura',
  templateUrl: './jefatura.component.html'
})

export class JefaturaComponent implements OnInit {

  idProyecto: number
  idGerencia: number
  // jefaturaLista: Jefatura[]
  jefaturaLista: Jefaturaproyectonodo[]
  jefaturaSeleccionado: Jefatura
  paginador: any
  base: string

  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public jefaturaService: JefaturaService,
    public jefaturaproyectoService: JefaturaproyectoService
  ) {}

  ngOnInit() {
    this.obtenerJefaturas()
  }

  public obtenerJefaturas() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idProyecto = parseInt(params.get('idProyecto'))
      this.idGerencia = parseInt(params.get('idGerencia'))
      // let page: number =+ params.get('page')
      // if (!page) {
      //   page = 0
      // }
      this.jefaturaproyectoService.getJefaturasPorProyecto(this.idProyecto).subscribe((
        jefaturaJsonResponse) => {
          this.jefaturaLista = jefaturaJsonResponse
        // this.jefaturaLista = jefaturaJsonResponse
        // this.paginador = jefaturaJsonResponse
        // this.base = 'jefatura'
        console.info(this.jefaturaLista)
      })
    })
  }

  public eliminar(jefatura: Jefatura): void {
    console.info(jefatura)
    this.jefaturaService.eliminarJefatura(jefatura.idJefatura).subscribe(
      (response) => {
        console.info(response)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerJefaturas()
      },
      (err) => {
        console.error(err)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerJefaturas()
      }
    )
  }

  public obtenerJefaturaSeleccionado(jefatura: Jefatura) {
    this.jefaturaSeleccionado = jefatura
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}