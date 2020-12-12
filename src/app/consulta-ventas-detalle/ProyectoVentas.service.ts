import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable, Injector } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { ProyectoVentas} from './ProyectoVentas'




@Injectable()
export class ProyectoVentaService{

private urlEndPoint:string = URL_BACKEND + 'ventas-proyectos/'

constructor (
  private http:HttpClient,
  private route:Route,
){}



}
