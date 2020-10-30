import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


// import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FormularioClientesComponent } from './clientes/formulario-clientes.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PaginatorComponent } from './paginator/paginator.component';
// import { DetallesComponent } from './clientes/detalles/detalles.component';

import { AuthGuard } from './usuarios/guards/auth.guard';
import { RolGuard } from './usuarios/guards/rol.guard';
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';
// import { DetalleFacturaComponent } from './facturas/detalle-factura.component';
// import { FacturasComponent } from './facturas/facturas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ColaboradorService } from './colaboradores/colaborador.service';
import { ClienteService } from './clientes/clientes.service';
import { ProyectoService } from './ventas/proyectos.service';
import { VentasproyectoService } from './ventas-proyecto/ventasproyecto.service';

import { LoginComponent } from './usuarios/login.component';
import { RecordarContraseniaComponent } from './recordar-contrasenia/recordar-contrasenia.component';
import { RecordarContraseniaAvisoComponent } from './recordar-contrasenia-aviso/recordar-contrasenia-aviso.component';
import { RecordarContraseniaCambioComponent } from './recordar-contrasenia-cambio/recordar-contrasenia-cambio.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ColaboradoresNuevoEditarComponent } from './colaboradores-nuevo-editar/colaboradores-nuevo-editar.component';

import { ClientesComponent } from './clientes/clientes.component';
import { ClientesNuevoEditarComponent } from './clientes-nuevo-editar/clientes-nuevo-editar.component';

import { VentasComponent } from './ventas/ventas.component';
import { VentasProyectoComponent } from './ventas-proyecto/ventas-proyecto.component';
import { VentasProyectoNuevoEditarComponent } from './ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: 'clientes', component: ClientesComponent},
  // {path: 'clientes/form', component: FormularioClientesComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_ADMIN'}},
  // {path: 'clientes/form/:id',component: FormularioClientesComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_ADMIN'}},
  // {path: 'clientes/page/:page', component: ClientesComponent},
  // {path: 'clientes/page', component: ClientesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recordar-contrasenia', component: RecordarContraseniaComponent},
  {path: 'recordar-contrasenia-aviso', component: RecordarContraseniaAvisoComponent},
  {path: 'recordar-contrasenia-cambio', component: RecordarContraseniaCambioComponent},
  // {path: 'facturas/:id',component: DetalleFacturaComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_USER'}},
  // {path: 'facturas/form/:clienteId',component: FacturasComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_ADMIN'}},
  {path: 'colaboradores', component: ColaboradoresComponent},
  {path: 'colaboradores-nuevo-editar/:id', component: ColaboradoresNuevoEditarComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'cliente-nuevo-editar/:id', component: ClientesNuevoEditarComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'ventas-proyecto/:id', component: VentasProyectoComponent},
  {path: 'ventas-proyecto-nuevo-editar/:id', component: VentasProyectoNuevoEditarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    // FormularioClientesComponent,
    PaginatorComponent,
    // DetallesComponent,
    LoginComponent,
    // DetalleFacturaComponent,
    // FacturasComponent,
    RecordarContraseniaComponent,
    RecordarContraseniaAvisoComponent,
    RecordarContraseniaCambioComponent,
    ColaboradoresComponent,
    SidebarComponent,
    ColaboradoresNuevoEditarComponent,
    ClientesNuevoEditarComponent,
    VentasComponent,
    VentasProyectoComponent,
    VentasProyectoNuevoEditarComponent
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
    MatFormFieldModule
  ],
  providers: [
    ClienteService,
    ColaboradorService,
    ProyectoService,
    VentasproyectoService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }