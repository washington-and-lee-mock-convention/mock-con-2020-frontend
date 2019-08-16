import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { CandidateComponent } from './candidate/candidate.component';

import { ProfilesService } from './_services/profiles/profiles.service';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent},
  { path: 'candidate', component: CandidateComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' }//pressing the home button naviagates you to the home page
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LibraryComponent,
    CandidateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false }
    ),
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
