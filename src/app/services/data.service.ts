import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  clientes: any[];  
  getAllClients() {  
        return this.clientes = [  
          {  
            nombre: "Carlos Gonzales",  
            celular: 3103454356,  
            email: "cgonza@gmail.com",  
            // fechaCompra: "11/03/2020",  
            fechaCompra: "2020-03-11",  
            edad: 24  
          },  
          {  
            nombre: "Camila Cardenas",   
            celular: 3223457232,  
            email: "pruebalargamuylarga@gmail.com",  
            // fechaCompra: "9/05/2020",
            fechaCompra: "2020-05-09",
            edad: 18 
          },  
          {  
            nombre: "Juan Herrera",     
            celular: 3103321098,  
            email: "pruebalarganotanto@gmail.com",   
            fechaCompra: "2020-08-28",  
            edad: 21
          },  
          {  
            nombre: "Carlos Gonzales",  
            celular: 3103454356,  
            email: "cgonza@gmail.com",  
            fechaCompra: "2020-03-11",  
            edad: 24  
          },  
          {  
            nombre: "Camila Cardenas",   
            celular: 3223457232,  
            email: "pruebalargamuylarga@gmail.com",  
            fechaCompra: "2020-05-09",
            edad: 18 
          },
          {  
            nombre: "Carlos Gonzales",  
            celular: 3103454356,  
            email: "cgonza@gmail.com",  
            fechaCompra: "2020-03-11",  
            edad: 24  
          },  
          {  
            nombre: "Camila Cardenas",   
            celular: 3223457232,  
            email: "pruebalargamuylarga@gmail.com",  
            fechaCompra: "2020-05-09",
            edad: 18 
          },  
          {  
            nombre: "Juan Herrera",     
            celular: 3103321098,  
            email: "pruebalarganotanto@gmail.com",   
            fechaCompra: "2020-08-28",  
            edad: 21
          },
          {  
            nombre: "Carlos Gonzales",  
            celular: 3103454356,  
            email: "cgonza@gmail.com",  
            fechaCompra: "2020-03-11",  
            edad: 24  
          },  
          {  
            nombre: "Camila Cardenas",   
            celular: 3223457232,  
            email: "pruebalargamuylarga@gmail.com",  
            fechaCompra: "2020-05-09",
            edad: 18 
          } 
        ]; 
      }  
}
