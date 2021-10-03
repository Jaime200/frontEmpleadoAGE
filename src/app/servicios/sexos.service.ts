import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class SexosService {

  constructor(
    public http: HttpClient,
  ) { }

  getSexos(){
    let url= `${environment.URL_SERVICIOS}/api/Sexo`
   return  this.http.get(url)
  }
}
