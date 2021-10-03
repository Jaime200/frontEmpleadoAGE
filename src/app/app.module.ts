import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './empleado/edit-empleado/edit-empleado.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
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
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
