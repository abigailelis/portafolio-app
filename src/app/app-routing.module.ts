import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSocialComponent } from '../app/Components/app-social/app-social.component';
import { AppAboutComponent } from './Components/app-about/app-about.component';
import { AppHomeComponent } from './Components/app-home/app-home.component';
import { AppProjectsComponent } from './Components/app-projects/app-projects.component';
import { AppSkillsComponent } from './Components/app-skills/app-skills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppHomeComponent
  },
  {
    path: 'social',
    component: AppSocialComponent
  },
  {
    path: 'projects',
    component: AppProjectsComponent
  },
  {
    path: 'skills',
    component: AppSkillsComponent
  },
  {
    path: 'about',
    component: AppAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
