import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAboutComponent } from './Components/app-about/app-about.component';
import { AppHomeComponent } from './Components/app-home/app-home.component';
import { AppNavComponent } from './Components/app-nav/app-nav.component';
import { AppProjectsComponent } from './Components/app-projects/app-projects.component';
import { AppSkillsComponent } from './Components/app-skills/app-skills.component';
import { AppSocialComponent } from './Components/app-social/app-social.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSocialComponent,
    AppHomeComponent,
    AppNavComponent,
    AppProjectsComponent,
    AppAboutComponent,
    AppSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
