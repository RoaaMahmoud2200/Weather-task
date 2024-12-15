import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ICity } from '../models/icity';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  constructor(private httpClient:HttpClient) {

   }

  getAllCitiesForecast():Observable<ICity[]> {
   return this.httpClient.get<ICity[]>(`${environment.baseUrl}/forecast`)
  }

  getForecast(cityId:number):Observable<ICity> {
    return this.httpClient.get<ICity>(`${environment.baseUrl}/cityForecast/${cityId}`)
}

search(searchWord:string):Observable<ICity> {
  return this.httpClient.get<ICity>(`${environment.baseUrl}/cityForecast/${searchWord}`)
}

searchCities(query: string): Observable<ICity[]> {
  return this.httpClient.get<ICity[]>(`${environment.baseUrl}?search=${query}`);
}
}
