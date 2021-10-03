import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './empleado/edit-empleado/edit-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpleadoComponent,
    AddEmpleadoComponent,
    EditEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
