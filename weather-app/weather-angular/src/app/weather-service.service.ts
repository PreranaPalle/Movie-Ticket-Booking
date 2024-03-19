import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  apiUrl="http://localhost:8080/getTemp"

  constructor(private http: HttpClient) { }
  getPosts(city:String,state:String): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${city}/${state}`);
  }



}
