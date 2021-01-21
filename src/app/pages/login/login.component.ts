import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { GeneralService } from "src/app/services/general.service";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { disableDebugTools } from '@angular/platform-browser';
import { EncriptarService } from "src/app/services/encriptar.service";
import { LoginIn } from "../Models/LoginIn";
import { Payload } from "../Models/Payload";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  loginModel: LoginIn;
  payload: Payload = new Payload();
  authToken: string;
  invalidCredentials: boolean;


  pass1NoValido = false;


  // @Output() token = new EventEmitter<string>();

  
  usuario = {
    correo: "",
    pass: ''
  }

  /* Usuario: pruebatest@yopmail.com
  Contraseña: pwdTest123# */

  constructor(private encryptService: EncriptarService,
    private route: Router, private httpServices: GeneralService) {
    this.invalidCredentials = false;
  }

  ngOnInit(): void {
  }



  submit(forma: NgForm) {
    this.invalidCredentials = false;

    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        console.log(control);
        control.markAsTouched()
      });

      return;
    }
    // this.usuario.correo = forma.controls["usuario"].value;
    // this.usuario.pass = forma.controls["pass"].value;
    this.loginModel = new LoginIn();
    this.loginModel.user_mail = forma.controls["usuario"].value;
    this.loginModel.user_password = forma.controls["pass"].value;
    console.log("loginmodel", JSON.stringify(this.loginModel));

    if (this.compara(this.loginModel.user_password)) {
      this.login(this.loginModel);
    } else {
      this.invalidCredentials = true;
    }

    // return this.http.post(
    // let tok:string=environment.cadena1+"login"+environment.cadena2;
  }

  login(input: LoginIn) {
    this.invalidCredentials = false;
    let encryptData = this.encryptService.encrypt(JSON.stringify(input));
    this.payload.payload = encryptData;

    this.httpServices.GetToken(this.payload).subscribe((response) => {

      this.authToken = response.toString();
      this.httpServices.tokenEncrip = this.authToken;
      // this.sendToken();
      this.route.navigate(['/home']);

    }, () => {

      this.invalidCredentials = true;
    }
    );
    // this.route.navigate(['/home']);
    // let a = this.encryptService.encrypt(this.usuario.pass);
    // console.log("a", a);
    // let b = this.encryptService.decrypt(a);
    // console.log("b", b);

  }


   // enviar token a home
  // sendToken() {
  //   this.token.emit(this.authToken); 
  //   console.log(`enviando token a home ${this.authToken}`);
    
  // }


  compara(password: string) {
    const pass1 = 'pwdTest123#'


    return (pass1 === password) ? true : false;
  }

 




}
