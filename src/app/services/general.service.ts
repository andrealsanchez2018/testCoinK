import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';
import { Base64 } from 'js-base64';
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private url = environment.cadena1+"login"+environment.cadena2;
  private url2 = environment.cadena1+environment.cadenaPurchase+environment.cadena2;
  constructor( private http:HttpClient) { 
    
  }
  
  public loginServ(){

    const SERVLOGIN = {"payload":
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTA4OTM3NTgsIlRva2VuS2V5IjoiZDczZGJkZDEtYzgwNy00NDUxLWE0MjUtNzg1MTQzN2QyYzlmIiwidXNlcklkIjoiNjNjMjBmNDMtYzI5ZS00NjMyLWE0YzMtZmM0NWMzZWNlNzdiIn0.EQWWfkT7faQUOI8EQQIoE9AgfPTOSMmz2tBcl5TcBT4"
  
    } 
    
    const data= JSON.stringify(SERVLOGIN);
    return this.http.post(this.url, data);
      
  }
  

  public iniciarSesion(usuarioLogueado) {
    let params = JSON.stringify(usuarioLogueado);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(
      this.url + 'login',
      params,
      options
    ).pipe(map(res => res));
  }

     
}

 