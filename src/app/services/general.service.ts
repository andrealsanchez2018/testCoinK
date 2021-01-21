import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';
import { Base64 } from 'js-base64';
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Payload } from "../pages/Models/Payload";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private url = environment.cadena1 + "login" + environment.cadena2;

  constructor(private http: HttpClient) {

  }

  public GetToken(req: Payload) {


    return this.http.post(this.url, JSON.stringify(req));

  }


  public POST(req: Payload, authToken: string, service: string) {
    let requestHeaders = new HttpHeaders();
    requestHeaders.append('Content-Type', 'application/json');
    requestHeaders.append('Authorization', authToken);
    let options = {
      headers: requestHeaders, responseType: 'text' as const
    }
    return this.http.post(environment.cadena1 + service + environment.cadena2, JSON.stringify(req), options);
  }


}

