import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ServiceToRequest, servi } from "../Models/ServiceToRequest";
import { ExportIn } from "../Models/ExportIn";
import { ExportOut } from "../Models/ExportOut";
import { EncriptarService } from 'src/app/services/encriptar.service';
import { GeneralService } from 'src/app/services/general.service';
import { Payload } from '../Models/Payload';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  filterTabla = '';
  pageTabla1: number = 1;
  codeB64:any;
  // authToken: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTEyMDE0ODcsIlRva2VuS2V5IjoiN2I2ODU1OGMtMTgzZC00Yjc0LTk1ZmMtNzBlYzFmNzY2Njk4IiwidXNlcklkIjoiNjNjMjBmNDMtYzI5ZS00NjMyLWE0YzMtZmM0NWMzZWNlNzdiIn0.jzr7bvsYtsMhWemaWmLR1_2g0zV13_COwl3UxNND-kc";
  // token traido por service:
  authToken: string;
  startDate: string;
  endDate: string;
  exportReq: ExportIn = new ExportIn();
  sersd: ServiceToRequest = new ServiceToRequest();
  payload: Payload = new Payload();
  // limpiar
  daterange: string = null;
  buscar: string = null;
  selectorBuscar:any;
  
  
  clients = [];
  tempclients = [];
  constructor(private datepickerService: DataService, private httpServices: GeneralService, private encryptService: EncriptarService) { }
  ngOnInit() {
    this.getclients();
    this.importToken();

  }

  getclients() {
    this.clients = this.datepickerService.getAllClients();
    this.tempclients = this.datepickerService.getAllClients();
  }
  dateCreated($event) {
    this.clients = this.tempclients;
    this.clients = this.clients.filter(x => x.fechaCompra == $event.toJSON().split('T')[0]);
    // console.log(`linea 276 ${this.clients}`);

    // console.log(`console.log(filtro fecha ${this.clients}`);

  }
  dateRangeCreated($event) {
    this.clients = this.tempclients;
    this.startDate = $event[0].toJSON().split('T')[0];
    // console.log("start", this.startDate);

    this.endDate = $event[1].toJSON().split('T')[0];
    // console.log("end", this.endDate);
    this.clients = this.clients.filter(
      m => new Date(m.fechaCompra) >= new Date(this.startDate) && new Date(m.fechaCompra) <= new Date(this.endDate)
    );
  }


  // Limpiar filtros

  filtroLimpio() {

    this.daterange = '';
    this.filterTabla = '';

  }


  importToken(){
    this.authToken = this.httpServices.tokenEncrip;
    console.log(`token consultas: ${this.authToken}`);
    
  }


  Export() {
    this.exportReq.begin_date = this.startDate;
    this.exportReq.end_date = this.endDate;
    this.exportReq.filter_value = this.filterTabla;
    this.exportReq.filter_field = this.selectorBuscar;
    this.exportReq.vault_id = "";
    console.log(`being date ${this.startDate}`);
    console.log(`end date ${this.endDate}`);
    console.log(`filterTabla ${this.filterTabla}`);
    console.log(`selectorBuscar ${this.selectorBuscar}`);
    
    this.sersd.servi = servi['pockets/reports/transactions/purchases/export'];

    this.httpServices.POST(this.payload, this.authToken, this.sersd.servi.toString())
    this.codeB64 = this.sersd.servi.toString()
    this.httpServices.b64EncodeUnicode(this.codeB64);
    console.log(this.codeB64);
    
  }

  busqueda(id)
{
  console.log(id);
  
}
 

}
