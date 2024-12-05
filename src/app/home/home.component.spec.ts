import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule], // Import HttpClientTestingModule here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection to render the component
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy(); // Check if component is created
  });

  it('should render HomeComponent successfully', () => {
    // Trigger the rendering process and check if the component's template is loaded
    const compiled = fixture.nativeElement; // Get the rendered DOM
    expect(compiled.querySelector('h1')).toBeTruthy(); // Replace 'h1' with an actual selector if needed
  });
});
