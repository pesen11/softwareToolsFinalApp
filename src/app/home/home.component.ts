import { Component, OnInit } from '@angular/core';
import { TimeDisplayComponent } from '../time-display/time-display.component'; // Import the time display component
import { WeatherService } from '../weather.service'; // Import the weather service

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimeDisplayComponent], // Include TimeDisplayComponent
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WeatherService], // Provide the weather service here
})
export class HomeComponent implements OnInit {
  currentTemperature: string = 'Loading...';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchTemperature();
  }

  fetchTemperature(): void {
    this.weatherService.getTemperature('Toronto', 'CA').subscribe({
      next: (data) => {
        this.currentTemperature = `${data.main.temp}°C`;
      },
      error: (err) => {
        this.currentTemperature = 'Error fetching temperature';
        console.error(err);
      },
    });
  }
}
