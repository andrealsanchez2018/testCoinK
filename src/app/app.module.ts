import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pages/consultas/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConsultasComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
