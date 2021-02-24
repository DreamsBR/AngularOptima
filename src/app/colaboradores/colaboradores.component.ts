import { Component, OnInit } from '@angular/core';
import { Colaborador } from './colaborador';
import { ColaboradorService } from './colaborador.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { URL_BACKEND } from '../config/config';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html'
})

export class ColaboradoresComponent implements OnInit {

  colaboradoresLista: Colaborador[];
  paginador: any;
  colaboradorSeleccionado: Colaborador;
  urlBackend: String = URL_BACKEND;
  base: string;

  dataBuscarColaborador = []
  kwBuscar = 'nombre'

  constructor(
    private colaboradorService: ColaboradorService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.obtenerColaborador()
    this.obtenerTodoColaboradores()
  }

  dni:string
  filtrar(){
    this.colaboradorService.obtenerColaboradorFiltro(this.dni).subscribe((
      jsonColaborador) => {
        console.log(jsonColaborador)
        this.colaboradoresLista = jsonColaborador
      })

  }

  Cancelar(){
    this.dni = ''
    this.obtenerColaborador()

  }
  colaboradorSelec: any
  seleccionarItemBusquedaColaborador(event){
    this.colaboradorSelec = event
    //console.log(this.colaboradorSelec)
    this.colaboradorService.obtenerColaboradorFiltro(this.colaboradorSelec.nroDocumento).subscribe((
      jsonColaborador) =>{
        console.log(jsonColaborador)
        this.colaboradoresLista = jsonColaborador
    })
  }


  obtenerColaborador(){
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number =+params.get('page');
      if (!page) {
        page = 0;
      }
      this.colaboradorService.getColaboradores(page).
      subscribe(
        (colaboradorJsonResponse) => {
          this.colaboradoresLista = colaboradorJsonResponse.content;
         /// console.info(this.colaboradoresLista)
          this.paginador = colaboradorJsonResponse;
          this.base='colaborador'
        })
    })
  }

  public eliminar(colaborador: Colaborador): void {
    const delColaborador = JSON.parse(JSON.stringify(colaborador))
    delColaborador.idTipoDocumento = colaborador.tipoDocumento.idTipoDocumento
    delColaborador.enable = 0
    this.colaboradorService
    .actualizarColaborador(delColaborador, colaborador.idColaborador)
    .subscribe(
      (response) => {
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerColaborador()
      },
      (err) => {}
    )
  }

  public obtenerColaboradorSeleccionado(colaborador: Colaborador) {
    this.colaboradorSeleccionado = colaborador
  }

  status: boolean = false;
  menuToggle(){
    this.status = !this.status;
  }
  obtenerTodoColaboradores(){
  
    this.colaboradorService.obtenerColaboradores().subscribe((data)=>{
      const listaColaboradores = []
      data.forEach((elem:any) => {
        listaColaboradores.push({
          idColaborador: elem.idColaborador,
          nroDocumento : elem.numeroDocumento,
          nombre: elem.nombres+" " + elem.apellidos
        })
      })
      this.dataBuscarColaborador = listaColaboradores
    })

  }
}
