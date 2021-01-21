import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service'; 

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  filterTabla = '';

  // limpiar
  daterange : string = null;
  buscar : string = null;

  clients = [];  
  tempclients=[];  
  constructor(private datepickerService: DataService) { } 
  ngOnInit() {  
    this.getclients();  
  }  
  getclients() {  
    this.clients = this.datepickerService.getAllClients();  
    this.tempclients = this.datepickerService.getAllClients();  
  }  
  dateCreated($event){  
    this.clients = this.tempclients; 
    this.clients = this.clients.filter(x => x.fechaCompra == $event.toJSON().split('T')[0]);
    console.log(`linea 276 ${this.clients}`);
     
    console.log(`console.log(filtro fecha ${this.clients}`);
    
  }  
  dateRangeCreated($event) {  
    this.clients = this.tempclients;  
    let startDate = $event[0].toJSON().split('T')[0]; 
    console.log("start", startDate);
    
    let endDate = $event[1].toJSON().split('T')[0];
    console.log("end", endDate);
    this.clients = this.clients.filter(  
      m => new Date(m.fechaCompra) >= new Date(startDate) && new Date(m.fechaCompra) <= new Date(endDate)
    ); 
  }  


  // Limpiar filtros

  

  filtroLimpio() {

    this.daterange = '';
    this.filterTabla = '';

    }
}
