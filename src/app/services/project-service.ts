import { Injectable } from "@angular/core";
import { of } from 'rxjs/observable/of';
import { Project } from "../models/project";
import { RestRepositoryService } from "./rest-repository-service";
import {  WebApiResponse } from "../models/webapi-response";
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectService {

    constructor(private restRepositoryService : RestRepositoryService){

    }


    getAllProjects(){
        return this.restRepositoryService.get("projects","").map(projectsResponse => {
            var projects = [] as [Project]
            var projectsResponseAsArray = projectsResponse as Array<any>;
            projectsResponseAsArray.forEach(element => {
                var project = new Project();
                project.key = element.dsKey;
                project.title = element.dsTitle;
                project.description = element.dsProject;
                project.reviewType = element.tpReview;
                project.institution.name = element.nmInstitution;
                project.institution.abbreviation = element.dsAbbreviation;
                projects.push(project);
            });
            return projects;
        })
         
      }

      createProject(project : Project){
        var json = {dsKey: project.key, dsTitle: project.title, dsProject: project.description, 
            tpReview: project.reviewType, country: {idCountry: 1, nmCountry: "Brazil"},
            nmInstitution: project.institution.name, dsAbbreviation: project.institution.abbreviation};
            return this.restRepositoryService.post<WebApiResponse>("projects",json);
      }

}
