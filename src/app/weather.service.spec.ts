import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to provide HttpClient

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Ensure HttpClientModule is included in the imports
      providers: [WeatherService], // Provide the WeatherService
    });
    service = TestBed.inject(WeatherService); // Inject the WeatherService instance
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Test if the service is created successfully
  });

  // Additional tests for WeatherService can go here
});
