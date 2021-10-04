import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { DireccionModel } from '../Modelos/Direccion.Model';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(
    public http: HttpClient,
  ) { }

  addDireccion(newDireccion: DireccionModel){
    const url= `${environment.URL_SERVICIOS}/DireccionEmpleado`
    
   return  this.http.post(url, newDireccion)
  }


  getDirecciones( DPI:number){
    const url= `${environment.URL_SERVICIOS}/DireccionEmpleado/${DPI}`
   return  this.http.get(url)
  }


  deleteDireccion(ID:number,DPI:number){
    const url= `${environment.URL_SERVICIOS}/DireccionEmpleado/${ID}/${DPI}`
   return  this.http.delete(url)
  }
}
