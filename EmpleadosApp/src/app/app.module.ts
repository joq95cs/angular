import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoCaracteristicasComponent } from './empleado-caracteristicas/empleado-caracteristicas.component';
import { EmpleadosService } from './empleados.service';
import { DatosEmpleadosService } from './datos-empleados.service';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardianService } from './login/login-guardian.service';

const appRoutes: Routes=[

  {path: '', component: HomeComponent, canActivate:[LoginGuardianService]},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent, canActivate:[LoginGuardianService]},
  {path: 'actualizar/:id', component: ActualizarComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component: ErrorPersonalizadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoCaracteristicasComponent,
    ContactoComponent,
    NosotrosComponent,
    ProyectosComponent,
    HomeComponent,
    ActualizarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [EmpleadosService, DatosEmpleadosService, DataService, LoginService, CookieService, LoginGuardianService],
  bootstrap: [AppComponent]
})
export class AppModule {}