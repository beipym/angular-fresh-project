import { Routes } from "@angular/router";
import { PagenotfoundComponent } from "src/@apptheme/pagenotfound/pagenotfound.component";
import { HomepageComponent } from "src/app/core/modules/homepage/homepage.component";
import { SignInComponent } from "src/app/core/modules/sign-in/sign-in.component";

export const routes: Routes = [
    { path:'' , component:HomepageComponent , pathMatch:'full' },
    { path:'sign-in' , component:SignInComponent , pathMatch:'full' },
    { path:'**' , component: PagenotfoundComponent},
];
  