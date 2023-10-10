import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherResponseDto } from '../models/WeatherResponseDto';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(location: string) {
    return this.http.get<WeatherResponseDto>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${environment.apiKey}`);
  }
}
