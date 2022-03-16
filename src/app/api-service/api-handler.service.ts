import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private httpClient: HttpClient) { }

  public getHouses(house: string): Observable<any> {
    return this.httpClient.get<any>('https://hp-api.herokuapp.com/api/characters/house/' + house);
  }

  public getEstudents(): Observable<any> {
    return this.httpClient.get<any>('https://hp-api.herokuapp.com/api/characters/students');
  }

  public getTeacher(): Observable<any> {
    return this.httpClient.get<any>('https://hp-api.herokuapp.com/api/characters/staff');
  }
}
