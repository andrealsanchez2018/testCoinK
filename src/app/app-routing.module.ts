import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ConsultasComponent } from "./pages/consultas/consultas.component";

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'consultas' , component: ConsultasComponent},
  {path: '**' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
