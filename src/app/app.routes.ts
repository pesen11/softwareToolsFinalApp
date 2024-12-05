import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-services', component: OurServiceComponent },
  { path: 'our-customers', component: OurCustomersComponent },
];
