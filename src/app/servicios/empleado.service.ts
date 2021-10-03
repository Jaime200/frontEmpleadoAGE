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
    const url= `${environment.URL_SERVICIOS}/Empleado`
    
   return  this.http.post(url, newEmpleado)
  }
  putEmpleados(updateEmpleado: EmpleadoModel){
    const url= `${environment.URL_SERVICIOS}/Empleado`
   return  this.http.put(url, updateEmpleado)
  }

  getEmpleados(){
    const url= `${environment.URL_SERVICIOS}/Empleado`
   return  this.http.get(url)
  }

  getEmpleado( DPI:number){
    const url= `${environment.URL_SERVICIOS}/Empleado/${DPI}`
   return  this.http.get(url)
  }
}
