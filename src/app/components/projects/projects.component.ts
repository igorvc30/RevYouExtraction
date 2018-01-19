import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project-service';
import { Project } from '../../models/project';
import { ReviewType } from '../../models/review-type';
import { ReviewTypeService } from '../../services/review-type-service';
import { RouterHelper } from '../../helpers/router-helper';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  filterProject = new Project();
  projects : [Project];
  reviewTypes = [] as [ReviewType];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private reviewTypeService : ReviewTypeService) { }

  ngOnInit() {
    this.getAllProjects();
    this.reviewTypes = this.reviewTypeService.getAllReviewTypes();
  }

  goToCreateNewProjectPage(){
    this.router.navigate([RouterHelper.newProjectRoute]);
  }

  getAllProjects(){
    this.projectService.getAllProjects().subscribe(projects => {
      this.projects = projects;
    },
      er =>{
    
    });
  }

  getReviewTypeName(reviewTypeCode : string) {
    return this.reviewTypeService.getReviewTypeName(reviewTypeCode);
  }
}
