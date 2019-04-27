import { Routes } from "@angular/router";
import { WelcomeComponent } from './welcome.component';
import { ResourceNotFoundComponent } from './notfound.component';

export const appRoutes: Routes=[
  {path:"home", component:WelcomeComponent},
  {path: "" , component:WelcomeComponent},
  {path : "**", component:ResourceNotFoundComponent}
];