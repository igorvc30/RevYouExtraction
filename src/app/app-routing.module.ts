import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterHelper } from './helpers/router-helper';


const routes: Routes = [
  { path: RouterHelper.newProjectRoute, component: ProjectCreateComponent },
  { path: RouterHelper.projectsRoute, component: ProjectsComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
