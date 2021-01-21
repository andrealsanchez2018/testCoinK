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

  //compartir token entre modulos
  tokenEncrip: string;

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

  b64EncodeUnicode(str: any) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      // function toSolidBytes(match, p1) {
      (match, p1) => {
        // console.debug('match: ' + match);
        return String.fromCharCode(("0x" + p1) as any);
      }));
  }

  b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

}

