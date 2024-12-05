import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// Create a stub for ActivatedRoute
class ActivatedRouteStub {
  // Mocking ActivatedRoute's properties as needed
  snapshot = {
    paramMap: {
      get: () => null, // You can mock route params if needed
    },
  };
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent, // Import the standalone AppComponent
        RouterModule, // Add RouterModule to handle routing
        HttpClientTestingModule, // Mock HTTP requests if necessary
      ],
      providers: [
        WeatherService, // Provide your service
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }, // Mock ActivatedRoute
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain About Us link', () => {
    const aboutUsLink = fixture.nativeElement.querySelector(
      'a[routerLink="/about-us"]'
    );
    expect(aboutUsLink).toBeTruthy();
  });
});
