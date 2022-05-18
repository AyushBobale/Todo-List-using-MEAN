import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: MainbodyComponent},
  {path: 'projects', component: ProjectsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainbodyComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
