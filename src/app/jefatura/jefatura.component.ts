import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { JefaturaService } from './jefatura.service'
import { Jefatura } from './jefatura'
import { Jefaturanodo } from './jefaturanodo'
import { JefaturaproyectoService } from './jefaturaproyecto.service'
import { Jefaturaproyectonodo } from './jefaturaproyectonodo'
import { Jefaturaproyecto } from './jefaturaproyecto';

@Component({
  selector: 'app-jefatura',
  templateUrl: './jefatura.component.html'
})

export class JefaturaComponent implements OnInit {

  idProyecto: number
  idGerencia: number
  jefaturaLista: Jefaturaproyectonodo[]
  jefaturaSeleccionado: Jefaturaproyecto
  paginador: any
  base: string

  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public jefaturaService: JefaturaService,
    public jefaturaproyectoService: JefaturaproyectoService
  ) {}

  ngOnInit() {
    console.info(this.authService.usuario)
    this.obtenerJefaturas()
  }

  public obtenerJefaturas() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idProyecto = parseInt(params.get('idProyecto'))
      this.idGerencia = parseInt(params.get('idGerencia'))
      this.jefaturaproyectoService.getJefaturasPorProyecto(this.idProyecto).subscribe((
        jefaturaJsonResponse) => {
          this.jefaturaLista = jefaturaJsonResponse
      })
    })
  }

  public eliminar(jefatura: Jefaturaproyecto): void {
    console.info(jefatura)
    this.jefaturaproyectoService.eliminarJefaturaproyecto(jefatura.idJefaturaProyecto).subscribe(
      (response) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerJefaturas()
      },
      (err) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerJefaturas()
      }
    )
  }

  public obtenerJefaturaSeleccionado(jefatura: Jefaturaproyecto) {
    this.jefaturaSeleccionado = jefatura
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}