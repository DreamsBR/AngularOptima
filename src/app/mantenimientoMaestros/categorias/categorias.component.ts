import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../ventas-proyecto-nuevo-editar/categoria.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Categoria } from '../../ventas-proyecto-nuevo-editar/categoria'


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoList : Categoria[]
  constructor(
    private serviceCat:CategoriaService,
    private activatedRoute: ActivatedRoute,


  ) { }

  ngOnInit() {
    this.obtenerCategoria()
  }
  paginator : any
  base : string

  public obtenerCategoria(){

    this.activatedRoute.paramMap.subscribe((params) => {
      let page : number =+ params.get('page')
      if(!page){
        page =0
      }
      this.serviceCat.getCategoriaMantenimiento(page).subscribe(
        categoriaJsonResponse => {
          console.log(categoriaJsonResponse)
          this.categoList = categoriaJsonResponse.content;
          this.paginator = categoriaJsonResponse;
          this.base = "categoria"
        }
      )
    })
  }


  status = false
  menuToggle() {
    this.status = !this.status
  }


}
