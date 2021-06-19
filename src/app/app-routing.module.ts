import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AspirantsComponent } from './aspirants/aspirants.component';
import { ExperienceComponent } from './experience/experience.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: "full" },
  { path: 'home', component: HomeComponent, pathMatch: "full" },
  { path: 'aspirants', component: AspirantsComponent, pathMatch: "full" },
  { path: 'experience', component: ExperienceComponent, pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
