import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import { DataSource } from '@angular/cdk/collections';
import { Client } from '../../models/client.model';
import { Observable } from 'rxjs';

    

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit {
  displayedColumns = ['First', 'Last', 'PhoneNumber', 'Time', 'Handlers'];
  dataSource = new ClientDataSource(this.connectionService);
  
  constructor(private connectionService: ConnectionService) {
    
   }

  ngOnInit() {}
}

export class ClientDataSource extends DataSource<any> {
  constructor(private connectionService: ConnectionService) {
    super();
  }
  connect() : Observable<Client[]> {
    return this.connectionService.getClients();
  }
  disconnect() {}
}
