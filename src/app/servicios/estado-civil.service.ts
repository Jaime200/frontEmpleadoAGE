import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {

  constructor(
    public http: HttpClient,
  ) { }

  ObtenerBancos(){
    let url= `${environment.URL_SERVICIOS}/BANCOS`
   return  this.http.get(url)
  }
}
