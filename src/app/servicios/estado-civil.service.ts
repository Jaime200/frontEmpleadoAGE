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

  getEstadoCivils(){
    let url= `${environment.URL_SERVICIOS}/api/EstadoCivil`
   return  this.http.get(url)
  }
}
