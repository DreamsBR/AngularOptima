import { Component, OnInit, ViewChild } from '@angular/core';
import { ColaboradorService} from './../colaboradores/colaborador.service'
import { Router, ActivatedRoute } from '@angular/router'
import { DatepickerRoundedComponent } from '../datepicker-rounded/datepicker-rounded.component';
import { JefaturaService } from './../jefatura/jefatura.service'
import { JefaturaproyectoService } from './../jefatura/jefaturaproyecto.service'
import { Jefatura } from './../jefatura/jefatura'
import { Vendedor } from "./vendedor";
import { VendedorService } from './vendedor.service'
import swal from 'sweetalert2';
import { Jefaturaproyecto } from '../jefatura/jefaturaproyecto';

@Component({
  selector: 'app-jefatura-nuevo-editar',
  templateUrl: './jefatura-nuevo-editar.component.html'
})
export class JefaturaNuevoEditarComponent implements OnInit {

  public errores: string[]

  @ViewChild('jefeAutocomplete',null) jefeAutocomplete: any;
  kwBuscarJefe = 'nombre'
  kwBuscarVendedor = 'nombre'
  dataBuscarJefe = []
  dataBuscarVendedor = []
  jefeSeleccionado: any
  vendedorSeleccionado: any

  @ViewChild('dpFechaInicio', { static: true }) dpFechaInicio: DatepickerRoundedComponent
  @ViewChild('dpFechaTermino', { static: true }) dpFechaTermino: DatepickerRoundedComponent
  fechaIngreso: string
  fechaTermino: string

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private colaboradorService: ColaboradorService,
    private jefaturaService: JefaturaService,
    private jefaturaproyectoService: JefaturaproyectoService,
    private VendedorService: VendedorService
  ) { }

  idJefatura: number
  idProyecto: number
  idGerencia: number
  nombreJefatura: string
  
  aryVendedores = []
  vendedoresEliminados = []

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idJefatura = parseInt(params.get('id'))
      this.idProyecto = parseInt(params.get('idProyecto'))
      this.idGerencia = parseInt(params.get('idGerencia'))
      if(this.idJefatura != 0){
        this.jefaturaService.getJefaturaPorId(this.idJefatura).subscribe(
          (response) => {
            this.nombreJefatura = response.nombre
            let nombreJefe = response.colaborador.nombres + ' ' + response.colaborador.apellidos
            this.jefeAutocomplete.searchInput.nativeElement.value = nombreJefe.toUpperCase()
            this.jefeSeleccionado = { idColaborador: response.colaborador.idColaborador, nombre: nombreJefe.toUpperCase() }
            this.dpFechaInicio.setValue(response.fechaIngreso)
            this.dpFechaTermino.setValue(response.fechaTermino)

            this.agregarVendedores()

          },
          (err) => {
            this.errores = err.error.errors as string[]
          }
        )
      }else{

      }
    })
    this.obtenerTodosLosColaboradores()
  }

  agregarVendedores(){
    this.VendedorService
      .getVendedoresPorJefatura(this.idJefatura)
      .subscribe((response) => {
        for(let x = 0 ; x < response.length ; x++ ){
          let vendedor: {[k: string]: any} = {};
          vendedor.idVendedor = response[x].idVendedor
          vendedor.idColaborador = response[x].idColaborador
          vendedor.nombre = response[x].nombre
          this.aryVendedores.push(vendedor)
        }
      })
  }

  obtenerTodosLosColaboradores(){
    this.colaboradorService.getTodosColaboradores().subscribe((data) => {
      const listaColaboradores = []
      data.forEach((elem: any) => {
        listaColaboradores.push({
            idColaborador: elem.idColaborador,
            nombre: elem.nombres + ' ' + elem.apellidos
        })
      })
      this.dataBuscarJefe = listaColaboradores
      this.dataBuscarVendedor = listaColaboradores
    })
  }

  seleccionarJefe(event){
    this.jefeSeleccionado = event
  }

  seleccionarVendedor(event){
    this.vendedorSeleccionado = event
  }

  onFechaIngresoCargo(newdate:string){
    this.fechaIngreso = newdate
  }

  onFechaTerminoCargo(newdate:string){
    this.fechaTermino = newdate
  }

  agregarVendedor(){
    this.vendedorSeleccionado.idVendedor = 0
    this.aryVendedores.push(this.vendedorSeleccionado)
  }

  eliminarVendedor(i: number){
    this.vendedoresEliminados.push(this.aryVendedores[i].idVendedor)
    this.aryVendedores.splice(i, 1)
  }

  guardarJefatura(){
    if(this.nombreJefatura == '' || this.nombreJefatura == null){
      swal('Ingrese un nombre de jefatura', '', 'warning')
      return
    }

    if(this.jefeSeleccionado == '' || this.jefeSeleccionado == null){
      swal('Seleccione un colaborador como jefe', '', 'warning')
      return
    }

    // if(this.aryVendedores.length == 0){
    //   swal('No hay vendedores agregados', '', 'warning')
    //   return
    // }

    let jefaturaadd: Jefatura = new Jefatura()

    jefaturaadd.enable = 1
    jefaturaadd.fechaIngreso = this.fechaIngreso
    jefaturaadd.fechaTermino = this.fechaTermino
    jefaturaadd.idJefeVenta = this.jefeSeleccionado.idColaborador
    jefaturaadd.idGerencia = this.idGerencia
    jefaturaadd.nombre = this.nombreJefatura

    if(this.idJefatura == 0){
      jefaturaadd.idJefatura = 0
      this.jefaturaService.agregarJefatura(jefaturaadd).subscribe(
        (response) => {
          this.guardarVendedores(response.idJefatura)
          this.guardarJefaturaproyectos(response.idJefatura)
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }else{
      jefaturaadd.idJefatura = this.idJefatura
      this.jefaturaService.editarJefatura(jefaturaadd, this.idJefatura).subscribe(
        (response) => {
          this.guardarVendedores(response.idJefatura)
        },
        (err) => {
          this.errores = err.error.errors as string[]
        }
      )
    }
  }

  guardarVendedores(idJefatura: number){

    if(this.aryVendedores.length != 0){
      if(this.idJefatura == 0){
        for (var i = 0; i < this.aryVendedores.length; i++) {
          var addVendedor = new Vendedor()
          addVendedor.enable = 1
          addVendedor.nombre = this.aryVendedores[i].nombre
          addVendedor.idJefatura = idJefatura
          addVendedor.idColaborador = this.aryVendedores[i].idColaborador
          addVendedor.idVendedor = 0
          this.VendedorService.agregarVendedor(addVendedor).subscribe(
            (response) => {
            },
            (err) => {
              this.errores = err.error.errors as string[]
            }
          )
        }
      }else{
  
        if(this.vendedoresEliminados.length > 0){
          for (var i = 0; i < this.vendedoresEliminados.length; i++) {
            this.VendedorService.eliminarVendedor(this.vendedoresEliminados[i]).subscribe(
              (response) => {},
              (err) => {
                this.errores = err.error.errors as string[]
              }
            )
          }
        }
  
        for (var i = 0; i < this.aryVendedores.length; i++) {
          var addVendedor = new Vendedor()
          addVendedor.enable = 1
          addVendedor.nombre = this.aryVendedores[i].nombre
          addVendedor.idJefatura = idJefatura
          addVendedor.idColaborador = this.aryVendedores[i].idColaborador
          if( this.aryVendedores[i].idVendedor == 0 ){
            addVendedor.idVendedor = 0
            this.VendedorService.agregarVendedor(addVendedor).subscribe(
              (response) => {
              },
              (err) => {
                this.errores = err.error.errors as string[]
              }
            )
          }else{
            this.VendedorService.editarVendedor(addVendedor, this.aryVendedores[i].idVendedor ).subscribe(
              (response) => {
              },
              (err) => {
                this.errores = err.error.errors as string[]
              }
            )
          }
        }
      }
    }

    this.router.navigate(['/jefatura/',this.idProyecto,this.idGerencia])
    swal('Jefatura registrada', ``, 'success')
  }

  guardarJefaturaproyectos(idJefatura: number){
    var addJefaturaproyecto = new Jefaturaproyecto()
    addJefaturaproyecto.enable = 1
    addJefaturaproyecto.idJefaturaProyecto = 0
    addJefaturaproyecto.idJefatura = idJefatura
    addJefaturaproyecto.idProyecto = this.idProyecto
    this.jefaturaproyectoService.agregarJefaturaproyecto(addJefaturaproyecto).subscribe(
      (response) => {},
      (err) => {
        this.errores = err.error.errors as string[]
      }
    )
  }

  status = false;
  menuToggle() {
    this.status = !this.status;
  }

}
