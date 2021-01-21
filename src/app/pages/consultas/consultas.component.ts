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
  authToken: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTEyMDE0ODcsIlRva2VuS2V5IjoiN2I2ODU1OGMtMTgzZC00Yjc0LTk1ZmMtNzBlYzFmNzY2Njk4IiwidXNlcklkIjoiNjNjMjBmNDMtYzI5ZS00NjMyLWE0YzMtZmM0NWMzZWNlNzdiIn0.jzr7bvsYtsMhWemaWmLR1_2g0zV13_COwl3UxNND-kc";
  startDate: string;
  endDate: string;
  exportReq: ExportIn = new ExportIn();
  sersd: ServiceToRequest = new ServiceToRequest();
  payload: Payload = new Payload();
  // limpiar
  daterange: string = null;
  buscar: string = null;

  clients = [];
  tempclients = [];
  constructor(private datepickerService: DataService, private httpServices: GeneralService, private encryptService: EncriptarService) { }
  ngOnInit() {
    this.getclients();
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

  Export() {
    this.exportReq.begin_date = "";
    this.exportReq.end_date = "";
    this.exportReq.filter_value = "";
    this.exportReq.filter_field = "";
    this.exportReq.vault_id = "";

    this.sersd.servi = servi['pockets/reports/transactions/purchases/export'];

    this.httpServices.POST(this.payload, "", this.sersd.servi.toString())

  }

}
