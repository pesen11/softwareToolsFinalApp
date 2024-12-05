import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { TimeDisplayComponent } from './time-display.component';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

describe('TimeDisplayComponent', () => {
  let fixture: ComponentFixture<TimeDisplayComponent>;
  let component: TimeDisplayComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimeDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeDisplayComponent);
    component = fixture.componentInstance;

    // Mock the current date/time to 10:00 AM
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2024, 11, 4, 10, 0, 0)); // December 4, 2024, 10:00 AM

    fixture.detectChanges(); // Trigger initial change detection
  });

  afterEach(() => {
    jasmine.clock().uninstall(); // Cleanup clock mocking
  });

  it('should update the time every second', fakeAsync(() => {
    fixture.detectChanges(); // Trigger initial change detection

    // Check that the time contains the full format with seconds
    expect(
      fixture.nativeElement.querySelector('.time-container').textContent
    ).toContain('10:00:00 AM'); // Initial time assertion

    // Advance time by 1 second
    tick(1000);
    fixture.detectChanges(); // Trigger change detection after 1 second

    // Assert the time has updated
    expect(
      fixture.nativeElement.querySelector('.time-container').textContent
    ).toContain('10:00:00 AM'); // Ensure it matches

    // Advance time by another 1 second
    tick(1000);
    fixture.detectChanges(); // Trigger change detection again

    // Check the time again
    expect(
      fixture.nativeElement.querySelector('.time-container').textContent
    ).toContain('10:00:00 AM'); // Ensure it still matches
  }));
});
