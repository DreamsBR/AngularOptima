import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Canal } from '../ventas-proyecto-nuevo-editar/canal';
import { Categoria } from '../ventas-proyecto-nuevo-editar/categoria';
import { Categoria2Service } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {
  categoriaLista: Categoria[]
  registroSeleccionado: Categoria

  constructor(
    private categoria2Service: Categoria2Service,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.obtenerBancos()
  }

  public obtenerBancos() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoria2Service.obtenerCategorias().subscribe((
        response) => {
        this.categoriaLista = response
      })
    })
  }

  public eliminar(categoria: Categoria): void {
    this.categoria2Service.eliminar(categoria.idCategoria).subscribe(
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

  public obtenerSeleccionado(categoria: Categoria) {
    this.registroSeleccionado = categoria
  }

  status = false
  menuToggle() {
    this.status = !this.status
  }

}