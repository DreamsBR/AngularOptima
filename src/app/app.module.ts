import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'

import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PaginatorComponent } from './paginator/paginator.component'

import { TokenInterceptor } from './usuarios/interceptors/token.interceptor'
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ColaboradorService } from './colaboradores/colaborador.service'
import { ClienteService } from './clientes/clientes.service'
import { ProyectoService } from './proyectos/proyectos.service'
import { VentasproyectoService } from './ventas-proyecto/ventasproyecto.service'
import { PeriodoService } from './periodos/periodo.service'
import { InmuebleService } from './inmuebles/inmueble.service'
import { VentaService } from './ventas/ventas.service'
import { VentaConsultaClienteDetalleService } from './ventas-consulta-cliente-detalle/ventas-consulta-cliente-detalle.service'
import { TipoinmueblecategoriaService } from './ventas-proyecto-nuevo-editar/tipoinmueblecategoria.service'
import { TipocreditoService } from './ventas-proyecto-nuevo-editar/tipocredito.service'
import { BancosService } from './ventas-proyecto-nuevo-editar/bancos.service'
import { FinanciamientoService } from './ventas-proyecto-nuevo-editar/financiamiento.service'
import { PagosService } from './pagos/pagos.service'

import { MotivoService } from './ventas-proyecto-nuevo-editar/motivo.service'
import { CanalService } from './ventas-proyecto-nuevo-editar/canal.service'
import { CategoriaService } from './ventas-proyecto-nuevo-editar/categoria.service'
import { VentainmuebleService } from './ventas-proyecto-nuevo-editar/ventasinmueble.service'
import { EstadocivilService } from './clientes/estadocivil.service'
import { TipodocumentoService } from './clientes-nuevo-editar/tipodocumento.service'

import { statusVentaservice } from './consulta-ventas/statusventa.service'

import { LoginComponent } from './usuarios/login.component'
import { RecordarContraseniaComponent } from './recordar-contrasenia/recordar-contrasenia.component'
import { RecordarContraseniaAvisoComponent } from './recordar-contrasenia-aviso/recordar-contrasenia-aviso.component'
import { RecordarContraseniaCambioComponent } from './recordar-contrasenia-cambio/recordar-contrasenia-cambio.component'
import { ColaboradoresComponent } from './colaboradores/colaboradores.component'
import { ColaboradoresNuevoEditarComponent } from './colaboradores-nuevo-editar/colaboradores-nuevo-editar.component'

import { ClientesComponent } from './clientes/clientes.component'
import { ClientesNuevoEditarComponent } from './clientes-nuevo-editar/clientes-nuevo-editar.component'

import { VentasComponent } from './ventas/ventas.component'
import { VentasProyectoComponent } from './ventas-proyecto/ventas-proyecto.component'
import { VentasProyectoNuevoEditarComponent } from './ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component'
import { VentasConsultaClienteDetalleComponent } from './ventas-consulta-cliente-detalle/ventas-consulta-cliente-detalle.component'

import { ConsultaVentasComponent } from './consulta-ventas/consulta-ventas.component'
import { ConsultaVentasDetalleComponent } from './consulta-ventas-detalle/consulta-ventas-detalle.component'

import { ProyectosComponent } from './proyectos/proyectos.component'
import { ProyectoNuevoEditarComponent } from './proyecto-nuevo-editar/proyecto-nuevo-editar.component'
import { InmueblesComponent } from './inmuebles/inmuebles.component'
import { InmuebleNuevoEditarComponent } from './inmueble-nuevo-editar/inmueble-nuevo-editar.component'
import { GerenciasComponent } from './gerencias/gerencias.component'
import { GerenciaNuevoEditarComponent } from './gerencia-nuevo-editar/gerencia-nuevo-editar.component'
import { GerenciaService } from './gerencias/gerencia.service'


import { JefaturaNuevoEditarComponent } from './jefatura-nuevo-editar/jefatura-nuevo-editar.component'
import { VendedorMetaNuevoEditarComponent } from './vendedor-meta-nuevo-editar/vendedor-meta-nuevo-editar.component'
import { PeriodosComponent } from './periodos/periodos.component'
import { PeriodoNuevoEditarComponent } from './periodo-nuevo-editar/periodo-nuevo-editar.component'
import { PeriodosProyectosComponent } from './periodos-proyectos/periodos-proyectos.component'
import { AppLoadingComponent } from './app-loading/app-loading.component'
import { DatepickerRoundedComponent } from './datepicker-rounded/datepicker-rounded.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { FinanciamientosComponent } from './financiamientos/financiamientos.component';
import { PagosComponent } from './pagos/pagos.component'

import { NgxMaskModule, IConfig } from 'ngx-mask'

import { ReverseStr } from '../pipes/reverse-str.pipe';
import { FormatDate } from '../pipes/format-date.pipe';
import { FormatSoles } from '../pipes/format-soles.pipe';
import { Paginator2Component } from './paginator2/paginator2.component';
import { EstadosVentasComponent } from './estados-ventas/estados-ventas.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recordar-contrasenia', component: RecordarContraseniaComponent },
  { path: 'recordar-contrasenia-aviso', component: RecordarContraseniaAvisoComponent },
  { path: 'recordar-contrasenia-cambio', component: RecordarContraseniaCambioComponent },

  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'colaborador/page/:page', component: ColaboradoresComponent },
  { path: 'colaboradores-nuevo-editar/:id', component: ColaboradoresNuevoEditarComponent },

  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente/page/:page', component: ClientesComponent },
  { path: 'cliente-nuevo-editar/:id', component: ClientesNuevoEditarComponent },
  { path: 'cliente-nuevo-editar/:id/:nrodoc/:idproyecto', component: ClientesNuevoEditarComponent },
            
  { path: 'ventas', component: VentasComponent },
  { path: 'ventas-proyecto/:id', component: VentasProyectoComponent },
  { path: 'ventas-proyecto/page/:page/:id', component: VentasProyectoComponent },

  { path: 'ventas-proyecto-nuevo-editar/:id', component: VentasProyectoNuevoEditarComponent },
  { path: 'ventas-proyecto-nuevo-editar/:id/:dni', component: VentasProyectoNuevoEditarComponent },

  { path: 'ventas-consulta-cliente-detalle/:id', component: VentasConsultaClienteDetalleComponent },

  { path: 'consulta-ventas/page/:page', component: ConsultaVentasComponent },
  { path: 'consulta-ventas', component: ConsultaVentasComponent },
  { path: 'consulta-ventas-detalle/:id', component: ConsultaVentasDetalleComponent },

  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyecto-nuevo-editar/:id', component: ProyectoNuevoEditarComponent },
  { path: 'inmuebles/:idProyecto', component: InmueblesComponent },
  { path: 'inmueble-nuevo-editar/:id', component: InmuebleNuevoEditarComponent },
  { path: 'gerencias', component: GerenciasComponent },
  { path: 'gerencia-nuevo-editar/:id', component: GerenciaNuevoEditarComponent },
  { path: 'jefatura-nuevo-editar/:id', component: JefaturaNuevoEditarComponent },
  { path: 'vendedor-meta-nuevo-editar/:id', component: VendedorMetaNuevoEditarComponent },

  { path: 'periodos', component: PeriodosComponent },
  { path: 'periodo/page/:page', component: PeriodosComponent }
]

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    PaginatorComponent,
    LoginComponent,
    RecordarContraseniaComponent,
    RecordarContraseniaAvisoComponent,
    RecordarContraseniaCambioComponent,
    ColaboradoresComponent,
    SidebarComponent,
    ColaboradoresNuevoEditarComponent,
    ClientesNuevoEditarComponent,
    VentasComponent,
    VentasProyectoComponent,
    VentasProyectoNuevoEditarComponent,
    VentasConsultaClienteDetalleComponent,
    ConsultaVentasComponent,
    ConsultaVentasDetalleComponent,
    ProyectosComponent,
    ProyectoNuevoEditarComponent,
    InmueblesComponent,
    InmuebleNuevoEditarComponent,
    GerenciasComponent,
    GerenciaNuevoEditarComponent,
    JefaturaNuevoEditarComponent,
    VendedorMetaNuevoEditarComponent,
    PeriodosComponent,
    PeriodoNuevoEditarComponent,
    PeriodosProyectosComponent,
    AppLoadingComponent,



    DatepickerRoundedComponent,
    SelectDropdownComponent,
    FinanciamientosComponent,
    PagosComponent,
    ReverseStr,
    FormatDate,
    FormatSoles,
    Paginator2Component,
    EstadosVentasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    NgbModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  providers: [
    ClienteService,
    ColaboradorService,
    ProyectoService,
    VentasproyectoService,
    PeriodoService,
    InmuebleService,
    VentaService,
    VentaConsultaClienteDetalleService,
    TipoinmueblecategoriaService,
    TipocreditoService,
    BancosService,
    FinanciamientoService,
    MotivoService,
    CanalService,
    CategoriaService,
    VentainmuebleService,
    PagosService,
    EstadocivilService,
    statusVentaservice,
    TipodocumentoService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
