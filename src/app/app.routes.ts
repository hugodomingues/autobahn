import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoadDetailsComponent } from './road-details/road-details.component';
import { InformationListComponent } from './informationList/information-list.component';

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
  {
    path: 'infoList',
    component: InformationListComponent,
    title: 'Information List',
  },
];

export default routes;
