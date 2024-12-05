import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure AppComponent is correctly imported
import { appConfig } from './app/app.config'; // Import the appConfig file where you provide HttpClient and other configurations

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
); // Handle any errors during bootstrapping
