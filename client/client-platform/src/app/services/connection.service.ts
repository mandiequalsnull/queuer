import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private httpClient: HttpClient) { }

  public getClients() : Observable<Client[]>{
    return this.httpClient.get<Client[]>('http://ec2-18-220-9-177.us-east-2.compute.amazonaws.com/cgi-bin/get_all_records.py?command=get_all');
  }

  public addClient(client: Client) : Observable<Client>{
    return this.httpClient.get<Client>('http://ec2-18-220-9-177.us-east-2.compute.amazonaws.com/cgi-bin/get_all_records.py?command=add&first_name=' + client.first_name + '&last_name=' + client.last_name + '&phone=' + client.phone);
  }
}
