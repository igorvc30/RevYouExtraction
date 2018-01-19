import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../models/project';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country-service';
import { ReviewTypeService } from '../../services/review-type-service';
import { ReviewType } from '../../models/review-type';
import { ProjectService } from '../../services/project-service';
import { WebApiResponseType } from '../../models/webapi-response';
import { AlertService } from '../../services/alert-service';
import { RouterHelper } from '../../helpers/router-helper';
import { Country } from '../../models/country';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  countries = [] as [Country];
  reviewTypes = [] as [ReviewType];
  project = new Project();
  processing = false

  @ViewChild('f') form: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private countryService: CountryService,
    private reviewTypeService : ReviewTypeService,
    private alertService : AlertService) { }

  ngOnInit() {
      this.getAllCountries();
      this.reviewTypes = this.reviewTypeService.getAllReviewTypes();
  }

  getAllCountries(){
    this.countryService.getAllCountries().subscribe(countries =>{
      this.countries = countries;
    });
  }

  createProject(){
    if(this.form.valid){
      this.processing = true;
      this.projectService.createProject(this.project).subscribe(response =>{
        this.processing = false;
        console.log(response);
        if(response.type == WebApiResponseType.SUCCESS){
          this.alertService.success(response.description, true);
          this.goToProjectsPage();
        }else{
          this.alertService.error(response.description, false);
        }
      });
    }
  }

  goToProjectsPage(){
    this.router.navigate([RouterHelper.projectsRoute]);
  }

}
