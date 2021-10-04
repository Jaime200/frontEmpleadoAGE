import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EditEmpleadoComponent } from './empleado/edit-empleado/edit-empleado.component';
import { SueldosComponent } from './sueldos/sueldos.component';
import { AddSueldoComponent } from './sueldos/add-sueldo/add-sueldo.component';
import { EditSueldoComponent } from './sueldos/edit-sueldo/edit-sueldo.component';

const routes: Routes = [
  {path: '',  component: EmpleadoComponent},
  { path: 'addEmpleado', component: AddEmpleadoComponent },
  { path: 'editEmpleado/:DPI', component: EditEmpleadoComponent },
  { path: 'sueldo/:DPI', component: SueldosComponent },
  { path: 'sueldo/add/:DPI', component: AddSueldoComponent },
  { path: 'sueldo/edit/:id/:DPI', component: EditSueldoComponent },
  {path: '',  redirectTo : '/', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
