import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EditEmpleadoComponent } from './empleado/edit-empleado/edit-empleado.component';

const routes: Routes = [
  {path: '',  component: EmpleadoComponent},
  { path: 'addEmpleado', component: AddEmpleadoComponent },
  { path: 'editEmpleado/:DPI', component: EditEmpleadoComponent },
  {path: '',  redirectTo : '/', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
