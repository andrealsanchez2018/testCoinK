import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  seguroNovalido = true;
  f: FormGroup;


  @Input() authToken:string;

  codigo = {
    clave: ''
  }
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.authToken;
  }
  
  

  capturar(f: NgForm) {
    console.log(f);
    console.log(f.value);
    if (f.invalid) {
      Object.values(f.controls).forEach(controlE => {
        console.log(controlE);
        controlE.markAsTouched()
      });

      return;
    }

    this.codigo.clave = f.controls["clave"].value;
    console.log(JSON.stringify(this.codigo));

    if (this.compara(this.codigo.clave)) {
      // this.recieveToken()
    //  console.log(`token en home ${this.authToken}`);
    console.log(this.authToken);
      this.direccionar();
    }
  }


  compara(seguro: string) {
    const seqKey = '123456'
    console.log(seqKey);

    return (seqKey === seguro) ? true : false;
  }

  /* recieveToken() {
    this.authToken 
    console.log(`token en home ${this.authToken}`);
    
  } */

  direccionar() {
    console.log(this.codigo.clave);
    this.route.navigate(['/consultas']);
  }

}
