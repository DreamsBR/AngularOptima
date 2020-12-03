import { Component, OnInit, ViewChild } from '@angular/core'
import { Categoria } from './../categoria/categoria'
import { Categoria2Service } from './../categoria/categoria.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-categoria-nuevo-editar',
  templateUrl: './categoria-nuevo-editar.component.html'
})
export class CategoriaNuevoEditarComponent implements OnInit {

    public errores: string[]

    idCategoria: number
    public categoria: Categoria = new Categoria()

    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private categoriaService: Categoria2Service,
    ) { }

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.idCategoria = parseInt(params.get('id'))
        if(this.idCategoria != 0){
          this.categoriaService.obtenerCategoriaPorId(this.idCategoria).subscribe(
            (response) => {
              this.categoria = response
            })
        }else{
          this.categoria.idCategoria = 0
        }
      })
    }

    public guardar(): void {
      if(this.categoria.nombre == '' || this.categoria.nombre == undefined){
        swal('Falta ingresar el nombre de la categoria', '','error')
        return
      }

      if( this.categoria.idCategoria == 0 ){
        this.categoriaService.agregar(this.categoria).subscribe(
          (response) => {
              this.router.navigate(['/categoria/'])
              swal('Registro agregado', '', 'success')
          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
      }else{
        this.categoriaService.actualizar(this.categoria, this.categoria.idCategoria).subscribe(
          (response) => {
              this.router.navigate(['/categoria/'])
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
