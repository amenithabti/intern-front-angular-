import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private accessPointUrl: string = 'http://localhost:44316/Home';

  constructor(private httpService: HttpClient) { }

  public getData = ( route: string) =>{
    return this.httpService.get(route);
  }
}
