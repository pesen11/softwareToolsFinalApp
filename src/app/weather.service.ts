import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'e7a26049aecc1352a2ffd4f3cbf50bcb'; // Replace with your API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getTemperature(city: string, country: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city},${country}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
