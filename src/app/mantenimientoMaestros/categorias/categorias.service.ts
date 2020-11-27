import { Injectable } from '@angular/core'
import { Route } from '@angular/router'
import { URL_BACKEND } from 'src/app/config/config'
import { inherits } from 'util'
import { Categorias  } from './categorias'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable()
export class CategoriaService {
  private urlEndPoint : string = URL_BACKEND + 'categoria'

  constructor (
    private http: HttpClient,
    private router:Route
  ){}



  
}
