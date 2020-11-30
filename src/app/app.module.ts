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

import { ProyectoVentaService } from './consulta-ventas-detalle/ProyectoVentas.service'
import { ColaboradorService } from './colaboradores/colaborador.service'
import { ClienteService } from './clientes/clientes.service'
import { ProyectoService } from './proyectos/proyectos.service'
import { VentasproyectoService } from './ventas-proyecto/ventasproyecto.service'
import { PeriodoService } from './periodos/periodo.service'
import { PeriodoGerenciaService } from './periodo-gerencia/periodo-gerencia.service'
import { InmuebleService } from './inmuebles/inmueble.service'
import { VentaService } from './ventas/ventas.service'
import { VentaConsultaClienteDetalleService } from './ventas-consulta-cliente-detalle/ventas-consulta-cliente-detalle.service'
import { TipoinmueblecategoriaService } from './ventas-proyecto-nuevo-editar/tipoinmueblecategoria.service'
import { TipocreditoService } from './ventas-proyecto-nuevo-editar/tipocredito.service'
import { BancosService } from './ventas-proyecto-nuevo-editar/bancos.service'
import { FinanciamientoService } from './ventas-proyecto-nuevo-editar/financiamiento.service'
import { PagosService } from './pagos/pagos.service'
import { ReportesService } from './reportes/reportes.service'

import { MotivoService } from './ventas-proyecto-nuevo-editar/motivo.service'
import { CanalService } from './ventas-proyecto-nuevo-editar/canal.service'
import { CategoriaService } from './ventas-proyecto-nuevo-editar/categoria.service'
import { VentainmuebleService } from './ventas-proyecto-nuevo-editar/ventasinmueble.service'
import { EstadocivilService } from './clientes/estadocivil.service'
import { TipodocumentoService } from './clientes-nuevo-editar/tipodocumento.service'
import { statusVentaservice } from './consulta-ventas/statusventa.service'
import { GerenciaService } from './gerencias/gerencia.service'
import { TipoInmuebleService } from './tipoinmueble/tipoInmueble.service'
import { TipoVistaService } from './tipovista/tipoVista.service'
import { TipoInmuebleCategoriaService } from './tipoinmueblecategoria/tipoInmuebleCategoria.service'
import { GerenciaproyectoService } from './gerencia-nuevo-editar/gerenciaproyecto.service'


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
import { PeridoProyectoService } from './proyecto-nuevo-editar/periodoProyecto.service'


import { NgxMaskModule, IConfig } from 'ngx-mask'

import { ReverseStr } from '../pipes/reverse-str.pipe';
import { FormatDate } from '../pipes/format-date.pipe';
import { FormatSoles } from '../pipes/format-soles.pipe';
import { FormatUppercase } from '../pipes/format-uppercase.pipe';
import { Paginator2Component } from './paginator2/paginator2.component';
import { EstadosVentasComponent } from './estados-ventas/estados-ventas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { VentasProyectoEditarComponent } from './ventas-proyecto-editar/ventas-proyecto-editar.component';

import { NgApexchartsModule } from "ng-apexcharts";

import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { PeriodoGerenciaComponent } from './periodo-gerencia/periodo-gerencia.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

import { CanalesComponent } from './mantenimientoMaestros/canales/canales.component';
import { CategoriasComponent } from './mantenimientoMaestros/categorias/categorias.component';
import { EstadoFinancieroComponent } from './mantenimientoMaestros/estado-financiero/estado-financiero.component';
import { EstadoVentaComponent } from './mantenimientoMaestros/estado-venta/estado-venta.component';
import { ReportesProyectosComponent } from './reportes-proyectos/reportes-proyectos.component'
import { JefaturaComponent } from './jefatura/jefatura.component';
import { JefaturaService } from './jefatura/jefatura.service';
import { VendedorService } from './jefatura-nuevo-editar/vendedor.service';
import { ColaboradorMetasComponent } from './colaborador-metas/colaborador-metas.component'
import { PeriodocolaboradorService } from './colaborador-metas/periodocolaborador.service'

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

  { path: 'ventas-proyecto-editar/:id/:idventa', component: VentasProyectoEditarComponent },
  { path: 'ventas-proyecto-editar/:id/:idventa/:dni', component: VentasProyectoEditarComponent },

  { path: 'ventas-consulta-cliente-detalle/:id', component: VentasConsultaClienteDetalleComponent },

  { path: 'consulta-ventas/page/:page', component: ConsultaVentasComponent },
  { path: 'consulta-ventas', component: ConsultaVentasComponent },
  { path: 'consulta-ventas-detalle/:id', component: ConsultaVentasDetalleComponent },
  { path: 'consulta-ventas-detalle/page/:page/:id', component: ConsultaVentasDetalleComponent },
  { path: 'consulta-ventas-detalle/:idproyecto/:idestadoventa/:fechaini/:fechafin', component: ConsultaVentasDetalleComponent },

  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyecto-nuevo-editar/:id', component: ProyectoNuevoEditarComponent },
  { path: 'inmuebles/:idProyecto', component: InmueblesComponent },
  { path: 'inmueble-nuevo-editar/:id', component: InmuebleNuevoEditarComponent },

  { path: 'gerencias', component: GerenciasComponent },
  { path: 'gerencias/page/:page', component: GerenciasComponent },
  { path: 'gerencia-nuevo-editar/:id', component: GerenciaNuevoEditarComponent },

  { path: 'jefatura/:idProyecto/:idGerencia', component: JefaturaComponent },
  { path: 'jefatura/page/:page/:idProyecto/:idGerencia', component: JefaturaComponent },
  { path: 'jefatura-nuevo-editar/:id/:idProyecto/:idGerencia', component: JefaturaNuevoEditarComponent },
  { path: 'colaborador-metas/:id/:idJefatura/:idProyecto/:idGerencia', component: ColaboradorMetasComponent },

  { path: 'vendedor-meta-nuevo-editar/:id', component: VendedorMetaNuevoEditarComponent },

  { path: 'periodos', component: PeriodosComponent },
  { path: 'periodo/page/:page', component: PeriodosComponent },

  { path: 'reportes', component: ReportesComponent },
  { path: 'reportes-por-proyecto/:idproyecto', component: ReportesProyectosComponent },

  { path: 'categorias', component:CategoriasComponent}
]

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
    JefaturaComponent,
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
    FormatUppercase,
    Paginator2Component,
    EstadosVentasComponent,
    ReportesComponent,
    VentasProyectoEditarComponent,
    PeriodoGerenciaComponent,
    MantenimientosComponent,
    CanalesComponent,
    CategoriasComponent,
    EstadoFinancieroComponent,
    EstadoVentaComponent,
    ReportesProyectosComponent,
    ColaboradorMetasComponent
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
    NgxMaskModule.forRoot(),
    NgApexchartsModule,
    AutocompleteLibModule
  ],
  providers: [
    ClienteService,
    ColaboradorService,
    ProyectoService,
    VentasproyectoService,
    PeriodoService,
    PeriodoGerenciaService,
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
    GerenciaService,
    ReportesService,
    TipoVistaService,
    TipoInmuebleCategoriaService,
    TipoInmuebleService,
    GerenciaproyectoService,
<<<<<<< HEAD
    JefaturaService,
    VendedorService,
    PeriodocolaboradorService,
    PeridoProyectoService,
=======
    PeridoProyectoService,
    JefaturaService,
    VendedorService,
    PeriodocolaboradorService,
>>>>>>> c265724274de201e51c476d98c9365c18d96a37c
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
