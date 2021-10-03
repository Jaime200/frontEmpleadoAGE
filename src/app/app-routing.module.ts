import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';

const routes: Routes = [
  { path: 'addEmpleado', component: AddEmpleadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
