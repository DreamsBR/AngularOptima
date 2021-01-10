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
import { ExporterService } from './helpers/exporter.service'
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
import { NgxMaskModule } from 'ngx-mask'
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
import { ReportesProyectosComponent } from './reportes-proyectos/reportes-proyectos.component'
import { JefaturaComponent } from './jefatura/jefatura.component';
import { JefaturaService } from './jefatura/jefatura.service';
import { VendedorService } from './jefatura-nuevo-editar/vendedor.service';
import { ColaboradorMetasComponent } from './colaborador-metas/colaborador-metas.component'
import { ReportesVendedorComponent } from './reportes-vendedor/reportes-vendedor.component';
import { AutocompletarComponent } from './autocompletar/autocompletar.component';
import { PruebaComponent } from './prueba/prueba.component'
import { PeriodocolaboradorService } from './colaborador-metas/periodocolaborador.service'
import { JefaturaproyectoService } from './jefatura/jefaturaproyecto.service';
import { BancosComponent } from './bancos/bancos.component';
import { BancoNuevoEditarComponent } from './banco-nuevo-editar/banco-nuevo-editar.component'
import { BancoService } from './bancos/banco.service';
import { CanalesNuevoEditarComponent } from './canales-nuevo-editar/canales-nuevo-editar.component'
import { CanalesService } from './canales/canales.service'
import { CanalesComponent } from './canales/canales.component';
import { CategoriaNuevoEditarComponent } from './categoria-nuevo-editar/categoria-nuevo-editar.component';
import { CategoriaComponent } from './categoria/categoria.component'
import { Categoria2Service } from './categoria/categoria.service'
import { EstadofinanciamientoComponent } from './estadofinanciamiento/estadofinanciamiento.component';
import { EstadofinanciamientoNuevoEditarComponent } from './estadofinanciamiento-nuevo-editar/estadofinanciamiento-nuevo-editar.component';
import { EstadoventaComponent } from './estadoventa/estadoventa.component';
import { EstadoventaNuevoEditarComponent } from './estadoventa-nuevo-editar/estadoventa-nuevo-editar.component'
import { Estadofinanciamiento2Service } from './estadofinanciamiento/estadofinanciamiento.service'
import { Estadoventa2Service } from './estadoventa/estadoventa.service'
import { RolesServices } from './colaboradores/roles.service';
import { GerenciaColaboradorComponent } from './gerencia-colaborador/gerencia-colaborador.component';
import { ProyectosGerenteComponent } from './proyectos-gerente/proyectos-gerente.component';
import { ProyectosColaboradorComponent } from './proyectos-colaborador/proyectos-colaborador.component'
import { PruebaService } from './prueba/prueba.service';
import { UtilService } from './util/util.service';
import { VentaFilesService } from './venta-files/venta-files.service';
import { TipoinmuebleService } from './ventas-proyecto-nuevo-editar/tipoinmueble.service';
import { ModuloBuscadorVentasComponent } from './modulo-buscador-ventas/modulo-buscador-ventas.component';
import { ModuloBuscadorVentasService } from './modulo-buscador-ventas/modulo-buscador-ventas.service';
import { TipoInmuebleComponent } from './tipoinmueble/tipoinmueble.component';
import { TipoInmuebleCategoriaComponent } from './tipoinmueblecategoria/tipoinmueblecategoria.component';
import { TipoinmuebleNuevoEditarComponent } from './tipoinmueble-nuevo-editar/tipoinmueble-nuevo-editar.component';
import { TipoinmueblecategoriaNuevoEditarComponent } from './tipoinmueblecategoria-nuevo-editar/tipoinmueblecategoria-nuevo-editar.component';
import { ReportesGeneralComponent } from './reportes-general/reportes-general.component';

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
  { path: 'gerencia-colaborador/:idColaborador', component: GerenciaColaboradorComponent },
  { path: 'gerencia-nuevo-editar/:id', component: GerenciaNuevoEditarComponent },
  { path: 'jefatura/:idProyecto/:idGerencia', component: JefaturaComponent },
  { path: 'jefatura/page/:page/:idProyecto/:idGerencia', component: JefaturaComponent },
  { path: 'jefatura-nuevo-editar/:id/:idProyecto/:idGerencia', component: JefaturaNuevoEditarComponent },
  { path: 'colaborador-metas/:id/:idJefatura/:idProyecto/:idGerencia', component: ColaboradorMetasComponent },
  { path: 'vendedor-meta-nuevo-editar/:id', component: VendedorMetaNuevoEditarComponent },
  { path: 'periodos', component: PeriodosComponent },
  { path: 'periodo/page/:page', component: PeriodosComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'reportes-por-proyecto', component: ReportesProyectosComponent },
  { path: 'reportes-por-proyecto/:idproyecto/:idperiodo', component: ReportesProyectosComponent },
  { path: 'reportes-por-vendedor', component: ReportesVendedorComponent },
  { path: 'reportes-por-vendedor/:idcolaborador/:idperiodo', component: ReportesVendedorComponent },
  { path: 'reportes-general', component: ReportesGeneralComponent },
  { path: 'bancos', component: BancosComponent },
  { path: 'banco-nuevo-editar/:id', component: BancoNuevoEditarComponent },
  { path: 'canales', component: CanalesComponent },
  { path: 'canales-nuevo-editar/:id', component: CanalesNuevoEditarComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria-nuevo-editar/:id', component: CategoriaNuevoEditarComponent },
  { path: 'estadofinanciamiento', component: EstadofinanciamientoComponent },
  { path: 'estadofinanciamiento-nuevo-editar/:id', component: EstadofinanciamientoNuevoEditarComponent },
  { path: 'estadoventa', component: EstadoventaComponent },
  { path: 'estadoventa-nuevo-editar/:id', component: EstadoventaNuevoEditarComponent },
  { path: 'categorias', component: CategoriaComponent},
  { path: 'prueba', component:PruebaComponent},
  { path: 'proyectos-gerente', component: ProyectosGerenteComponent },
  { path: 'proyectos-colaborador', component: ProyectosColaboradorComponent },
  { path: 'tipoinmueble', component: TipoInmuebleComponent },
  { path: 'tipoinmueblecategoria', component: TipoInmuebleCategoriaComponent },
  { path: 'tipoinmueble-nuevo-editar/:id', component: TipoinmuebleNuevoEditarComponent },
  { path: 'tipoinmueblecategoria-nuevo-editar/:id', component: TipoinmueblecategoriaNuevoEditarComponent },
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
    ReportesProyectosComponent,
    ColaboradorMetasComponent,
    BancosComponent,
    BancoNuevoEditarComponent,
    CanalesNuevoEditarComponent,
    CategoriaNuevoEditarComponent,
    CategoriaComponent,
    EstadofinanciamientoComponent,
    EstadofinanciamientoNuevoEditarComponent,
    EstadoventaComponent,
    EstadoventaNuevoEditarComponent,
    ReportesVendedorComponent,
    AutocompletarComponent,
    PruebaComponent,
    GerenciaColaboradorComponent,
    ProyectosGerenteComponent,
    ProyectosColaboradorComponent,
    ModuloBuscadorVentasComponent,
    TipoInmuebleComponent,
    TipoInmuebleCategoriaComponent,
    TipoinmuebleNuevoEditarComponent,
    TipoinmueblecategoriaNuevoEditarComponent,
    ReportesGeneralComponent
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
    PeridoProyectoService,
    JefaturaService,
    VendedorService,
    PeriodocolaboradorService,
    ExporterService,
    JefaturaproyectoService,
    BancoService,
    CanalesService,
    Categoria2Service,
    Estadofinanciamiento2Service,
    Estadoventa2Service,
    RolesServices,
    PruebaService,
    UtilService,
    VentaFilesService,
    TipoinmuebleService,
    ModuloBuscadorVentasService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
