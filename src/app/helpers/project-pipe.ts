import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'projectFilter'
})
export class ProjectPipe implements PipeTransform {
  transform(items: Project[], project: Project): any[] {
    if(!items) return [];
    if(project == null) return items;

    return items.filter( it => {
      return (project.key == null 
        || project.key == "" 
        || it.key.toLowerCase().includes(project.key.toLowerCase())) &&

        (project.title == null 
          || project.title == "" 
          || it.title.toLowerCase().includes(project.title.toLowerCase())) &&

        (project.reviewType == null 
            || project.reviewType == "" 
            || it.reviewType == project.reviewType)

    });
   }
}