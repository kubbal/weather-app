import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherResponseDto } from './models/WeatherResponseDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'weather-app';

  cityForm = this.formBuilder.group({
    city: ['', Validators.required]
  });

  weatherData?: WeatherResponseDto;
  
  constructor(private weatherService: WeatherService,
              private formBuilder: FormBuilder) {}

  getWeatherIn(city: string) {
    this.weatherService.getWeatherData(city).subscribe(
      {
        next: (data: WeatherResponseDto) => this.weatherData = data,
        error: (e) => console.error(e)
      }
    );
  }

  onSubmit() {
    if (this.cityForm.value.city)
      this.getWeatherIn(this.cityForm.value.city);
  }
}
