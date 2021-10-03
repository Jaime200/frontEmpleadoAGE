import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { EmpleadoModel } from '../Modelos/Empleado.Model';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    public http: HttpClient,
  ) { }

  addEmpleados(newEmpleado: EmpleadoModel){
    let url= `${environment.URL_SERVICIOS}/Empleado`
    newEmpleado.DPI =2093431251906;
   return  this.http.post(url, newEmpleado)
  }
}
