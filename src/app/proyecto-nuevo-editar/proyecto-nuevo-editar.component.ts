import { Component, OnInit } from '@angular/core'
import { Proyecto } from '../proyectos/proyecto'
import { ProyectoService } from '../proyectos/proyectos.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../usuarios/auth.service'
import { hardCodeProyectos } from '../proyectos/hardCodeProyectos'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-proyecto-nuevo-editar',
  templateUrl: './proyecto-nuevo-editar.component.html'
})
export class ProyectoNuevoEditarComponent implements OnInit {
  status = false
  editMode: boolean = true
  public errores:string[]
  public proyecto = new Proyecto()


  idProyecto:number
  frmIdProyecto: number = 0
  frmCodigo: string = ''
  frmNombre: string = ''
  frmEnable: number = 1
  frmDireccion: string = ''

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idProyecto = parseInt(params.get('id'))
      if (this.idProyecto != 0) {
        this.proyecto.idProyecto = this.idProyecto
          this.proyectoService.getProyectosById(this.proyecto).subscribe(
            (response)=> {
              this.frmIdProyecto = response.idProyecto
              this.frmCodigo  = response.codigo
              this.frmNombre  = response.nombre
              this.frmEnable  =  response.enable
              this.frmDireccion =  response.direccion

            },
            (err)=> {
              this.errores = err.error.errors as string[]
            })
      }
    })

  }

  menuToggle() {
    this.status = !this.status
  }

  regresar() {
    window.location.href = '/proyectos'
  }

  guardar() {
    const newProyecto = new Proyecto()
    newProyecto.idProyecto = this.frmIdProyecto
    newProyecto.codigo = this.frmCodigo
    newProyecto.nombre = this.frmNombre
    newProyecto.enable = this.frmEnable
    newProyecto.direccion = this.frmDireccion

    console.log(newProyecto)
    this.proyectoService.newProyecto(newProyecto).subscribe((_) => {
      window.location.href = '/proyectos'
    })
  }






  /*fetchDataById() {
    const proyectToEdit = new Proyecto()
    proyectToEdit.idProyecto = this.frmIdProyecto

    this.proyectoService.getProyectosById(proyectToEdit).subscribe((_) => {
      window.location.href = '/proyectos'
    })
  }*/

  fetchDataById() {
    const proyectToEdit = new Proyecto()
    proyectToEdit.idProyecto = this.frmIdProyecto

    for (const proy of hardCodeProyectos) {
      if (proy.idProyecto === proyectToEdit.idProyecto) {
        this.frmIdProyecto = proy.idProyecto
        this.frmCodigo = proy.codigo
        this.frmNombre = proy.nombre
        this.frmEnable = proy.enable
        this.frmDireccion = proy.direccion
        break
      }
    }
  }


/*ELIMINAR  VENTAS
public eliminar(proyecto:Proyecto):void{
  this.proyectoService.eliminarProyecto(proyecto.idProyecto).subscribe(
    (response)=>
    document.getElementById('cerrarModalEliminar').click()
    this.ob
  )
}
*/


}
