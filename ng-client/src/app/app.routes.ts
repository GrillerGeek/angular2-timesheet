import { provideRouter, RouterConfig } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation'
import { ProjectListComponent } from './project-list'
import { EmployeeListComponent } from './employee-list'
import {TimesheetDetailComponent} from "./timesheet-detail";

export const routes: RouterConfig = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'timesheets', component: TimesheetListComponent, pathMatch: 'full' },
      { path: 'timesheets/:id', component: TimesheetDetailComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home/projects',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
