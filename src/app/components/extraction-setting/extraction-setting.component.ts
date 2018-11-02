import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Extraction } from '../../models/extraction'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-extraction-setting',
  templateUrl: './extraction-setting.component.html',
  styleUrls: ['./extraction-setting.component.css']
})
export class ExtractionSettingComponent implements OnInit {

  extraction = new Extraction();
  processing = false
  id: number;


  methods = [
    {id: 1, name: "Collaborative Comparing"},
    {id: 2, name: "Collaborative with Review"},
    {id: 3, name: "Individual"}
  ];

  extractors = [
    {id: 434343, name: "Antônio"},
    {id: 5433452, name: "Edmo"},
    {id: 3434343, name: "Igor"},
    {id: 634343, name: "Simone"}
  ];

  attributes = [ 
    {name:"copyright", id: 0}, 
    {name:"title", id: 2},
    {name:"journal", id: 3}, 
    {name:"author", id: 4}, 
    {name:"volume", id: 5}, 
    {name:"year", id: 6}, 
    {name:"pages", id: 7}, 
    {name:"issn_isbn", id: 8}, 
    {name:"address", id: 9}, 
    {name:"abstract", id: 10}, 
    {name:"keywords", id: 11}, 
    {name:"URL", id: 12},
    {name:"authros", id: 13} 
  ];
  
  @ViewChild('f') form: any;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(_ => this.id = _.id);
  }

  ngOnInit() {}

  onChange(attr:string, isChecked: boolean) {
    if(isChecked) {
      this.extraction.studyDetails.push(attr);
    } else {
      let index = this.extraction.studyDetails.indexOf(attr);
      this.extraction.studyDetails.splice(index,1);
    }
  }

setExtractionSetting(){
  if(this.form.valid){
    this.processing = true;
    console.log( JSON.stringify(this.extraction))
   /** this.projectService.createProject(this.project).subscribe(response =>{
      this.processing = false;
      console.log(response);
      if(response.type == WebApiResponseType.SUCCESS){
        this.alertService.success(response.description, true);
        this.goToProjectsPage();
      }else{
        this.alertService.error(response.description, false);
      }
    }); */
  }
}

}
