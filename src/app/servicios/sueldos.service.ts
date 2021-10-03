import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SueldoModel } from '../Modelos/Sueldo.Model';

@Injectable({
  providedIn: 'root'
})
export class SueldosService {

  constructor(
    public http: HttpClient,
  ) { }

  addSueldo(newEmpleado: SueldoModel){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado`
    
   return  this.http.post(url, newEmpleado)
  }
  putSueldo(updateEmpleado: SueldoModel){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado`
   return  this.http.put(url, updateEmpleado)
  }

  getSueldos( DPI:number){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado/${DPI}`
   return  this.http.get(url)
  }

  getSueldosById(){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado`
   return  this.http.get(url)
  }
}
