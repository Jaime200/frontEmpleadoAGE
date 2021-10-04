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

  addSueldo(newSueldoEmpleado: SueldoModel){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado`
    
   return  this.http.post(url, newSueldoEmpleado)
  }
  putSueldo(updateEmpleado: SueldoModel){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado`
   return  this.http.put(url, updateEmpleado)
  }

  getSueldos( DPI:number){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado/${DPI}`
   return  this.http.get(url)
  }

  getSueldosById(ID:number,DPI:number){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado/${ID}/${DPI}`
   return  this.http.get(url)
  }

  deleteSueldo(ID:number,DPI:number){
    const url= `${environment.URL_SERVICIOS}/sueldoEmpleado/${ID}/${DPI}`
   return  this.http.delete(url)
  }
}
