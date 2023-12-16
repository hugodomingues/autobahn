import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoadDetailsComponent } from './components/road-details/road-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: ' Home Page ',
  },
  {
    path: 'details/:id',
    component: RoadDetailsComponent,
    title: 'Details Page',
  },
];

export default routes;
