import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectService } from './services/project-service';
import { CountryService } from './services/country-service';
import { ReviewTypeService } from './services/review-type-service';
import { RestRepositoryService } from './services/rest-repository-service';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert-service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProjectPipe } from './helpers/project-pipe';
import { ExtractionSettingComponent } from './components/extraction-setting/extraction-setting.component';
// https://github.com/ng-select/ng-select
import { NgSelectModule } from '@ng-select/ng-select';
// https://angular-slider.github.io/ng5-slider/
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectCreateComponent,
    ProjectsComponent,
    AlertComponent,
    ProjectPipe,
    ExtractionSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgSelectModule,
    Ng5SliderModule
  ],
  providers: [ProjectService, CountryService, ReviewTypeService, RestRepositoryService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
