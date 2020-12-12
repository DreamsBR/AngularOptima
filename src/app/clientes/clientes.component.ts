import { Component, OnInit } from '@angular/core'
import { Cliente } from './cliente'
import { ClienteService } from './clientes.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent implements OnInit {

  clientesLista: Cliente[]
  paginador: any
  base: string

  dataBuscarCliente = []
  kwBuscar = 'nombre'




  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  )
  {}

  ngOnInit() {
    this.obtenerCliente()
    this.obtenerTodoClientes()
  }

  dni : string

  filtrar(){
    this.clienteService.obtenerClientesPorDni(this.dni).subscribe((
      clienteJsonResponse) =>{
        console.log(clienteJsonResponse)
        this.clientesLista = clienteJsonResponse
      })
  }

  Cancelar(){
    this.dni = ''
    this.obtenerCliente()

  }

  clienteSeleccionado: any
  seleccionarItemBusquedaCliente(event){
    this.clienteSeleccionado = event
    //this.clienteAutocomplete.searchInput.nativeElement.value = this.clienteSeleccionado.nroDocumento
    console.log(this.clienteSeleccionado)
  }

  public obtenerCliente() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number =+ params.get('page')
      if (!page) {
        page = 0
      }
      this.clienteService.getClientes(page).subscribe((
        clientesJsonResponse) => {
        this.clientesLista = clientesJsonResponse.content
        this.paginador = clientesJsonResponse
        this.base = 'cliente'
      })
    })
  }

  filtrarNombreApellido(){
    this.clienteService.obtenerClientesPorIdFiltro(this.clienteSeleccionado.idCliente).subscribe((
      data) => {
      console.log(data)
      this.clientesLista = data
    })
  }


  obtenerTodoClientes(){
    this.clienteService.obtenerCliente().subscribe((data)=>{
      const listaCliente = []
      data.forEach((elem:any) => {
        listaCliente.push({
          idCliente: elem.idCliente,
          nroDocumento : elem.nroDocumento,
          nombre: elem.nombres+" " + elem.apellidos
        })
      })
      this.dataBuscarCliente = listaCliente
    })

  }

  public eliminar(cliente: Cliente): void {
    this.clienteService.eliminarCliente(cliente.idCliente).subscribe(
      (response) => {
        console.info(response)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerCliente()
      },
      (err) => {
        console.error(err)
        document.getElementById('cerrarModalEliminar').click()
        this.obtenerCliente()
      }
    )
  }


  status = false
  menuToggle() {
    this.status = !this.status
  }

}
