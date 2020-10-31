import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PaginatorComponent } from './paginator/paginator.component';

import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';

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
  {path: 'login', component: LoginComponent},
  {path: 'recordar-contrasenia', component: RecordarContraseniaComponent},
  {path: 'recordar-contrasenia-aviso', component: RecordarContraseniaAvisoComponent},
  {path: 'recordar-contrasenia-cambio', component: RecordarContraseniaCambioComponent},
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