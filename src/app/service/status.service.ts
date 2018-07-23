// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Application
import { Status } from '../domain/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  statusUrl: string = 'https://tasklist-api.herokuapp.com/status';

  constructor(private http: HttpClient) { }

  generateCombo = () => {return this.http.get<Status[]>(this.statusUrl)}

}
