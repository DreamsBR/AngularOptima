import { Component, OnInit, ViewChild } from '@angular/core'
import { CategoriaGerencia } from '../categoria-gerencia/categoria-gerencia'
import { CategoriaGerenciaService } from './../categoria-gerencia/categoria-gerencia.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-categoria-gerencia-nuevo-editar',
  templateUrl: './categoria-gerencia-nuevo-editar.component.html',
  styleUrls: ['./categoria-gerencia-nuevo-editar.component.css']
})
export class CategoriaGerenciaNuevoEditarComponent implements OnInit {
  public errores: string[]

  idCategoriaGerencia: number
  public categoriaGerencia: CategoriaGerencia = new CategoriaGerencia()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoriaGerenciaService: CategoriaGerenciaService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idCategoriaGerencia = parseInt(params.get('id'))
      if (this.idCategoriaGerencia != 0) {
        this.categoriaGerenciaService
          .obtenerCategoriaGerenciaPorId(this.idCategoriaGerencia)
          .subscribe((response) => {
            this.categoriaGerencia = response
          })
      } else {
        this.categoriaGerencia.idCategoriaGerencia = 0
        this.categoriaGerencia.enable = 1
      }
    })
  }

  public guardar(): void {
    if (this.categoriaGerencia.nombre == '' || this.categoriaGerencia.nombre == undefined) {
      swal('Falta ingresar el nombre de la categoría de gerencia', '', 'error')
      return
    }

    if (this.categoriaGerencia.idCategoriaGerencia == 0) {
      this.categoriaGerenciaService.agregar(this.categoriaGerencia).subscribe(
        (_) => {
          this.router.navigate(['/categoria-gerencia/'])
          swal('Registro agregado', '', 'success')
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    } else {
      this.categoriaGerenciaService
        .actualizar(this.categoriaGerencia, this.categoriaGerencia.idCategoriaGerencia)
        .subscribe(
          (_) => {
            this.router.navigate(['/categoria-gerencia/'])
            swal('Registro editado', '', 'success')
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
    }
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }
}
