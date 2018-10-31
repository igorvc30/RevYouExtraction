import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExtractionSettingComponent } from './components/extraction-setting/extraction-setting.component'
import { RouterHelper } from './helpers/router-helper';
import { ExtractionDistributionComponent } from './components/extraction-distribution/extraction-distribution.component';



const routes: Routes = [
  { path: "", component: ProjectCreateComponent },
  { path: RouterHelper.newProjectRoute, component: ProjectCreateComponent },
  { path: RouterHelper.projectsRoute, component: ProjectsComponent },
  { path:':id',
    children: [
      { 
        path: RouterHelper.extraction,
        children: [
          {
            path: '**',
            redirectTo: RouterHelper.setting,
            pathMatch: 'full'
          },
          {
            path: "",
            component: ExtractionSettingComponent 
          },
          {
            path: RouterHelper.setting,
            component: ExtractionSettingComponent 
          },
          {
            path: RouterHelper.distribution,
            component: ExtractionDistributionComponent
          }
        ] 
      }
      
    ]
  }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
