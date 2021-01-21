import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { GeneralService } from "src/app/services/general.service";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { disableDebugTools } from '@angular/platform-browser';
import { EncriptarService } from "src/app/services/encriptar.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  pass1NoValido=false;
  codLogin:string='';

  usuario= {correo:"",
            pass:''
          }

            /* Usuario: pruebatest@yopmail.com
            Contraseña: pwdTest123# */

  constructor(private http: EncriptarService,
              private route:Router ) { }

  ngOnInit(): void {
  }

  

  guardar(forma: NgForm){
    console.log(forma);
    console.log(forma.value);
    if (forma.invalid) {
      Object.values(forma.controls).forEach( control =>{
        console.log(control);
        control.markAsTouched()
      });

      return;
    }
    this.usuario.correo=forma.controls["usuario"].value;
    this.usuario.pass=forma.controls["pass"].value;
    console.log(JSON.stringify(this.usuario));
    
    if (this.compara(this.usuario.pass)) {
        this.login();
    }
    
    // return this.http.post(
    // let tok:string=environment.cadena1+"login"+environment.cadena2;
  }
  
  login() {
    console.log(this.usuario.pass);
    this.route.navigate(['/home']);
    // this.http.encrypt(this.usuario.pass).subscribe(
    //   (resp:any)=>{

    // })


  }


   compara(password:string) {
    const pass1 = 'pwdTest123#'
    console.log(pass1);
    
    return ( pass1 === password ) ?  true : false;
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
  
    
  
   

  getLogin() {
    this.codLogin= this.b64EncodeUnicode('https://api.backmerchants.bancoink.biz/qa/login?apiKey=252156'); 
     console.log(this.codLogin);
  }


}
