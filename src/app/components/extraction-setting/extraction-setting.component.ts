import { Component, OnInit, ViewChild } from '@angular/core';
import { Extraction } from '../../models/extraction'

@Component({
  selector: 'app-extraction-setting',
  templateUrl: './extraction-setting.component.html',
  styleUrls: ['./extraction-setting.component.css']
})
export class ExtractionSettingComponent implements OnInit {

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

  extraction = new Extraction();
  // keys = Object.keys;
  // symbols = Method;
  studyDetails: String[] = [];

  @ViewChild('f') form: any;
  constructor() { }

  ngOnInit() {}

  print(){

    this.extraction.studyDetails = this.studyDetails;
    console.log( JSON.stringify(this.extraction))
    console.log( JSON.stringify(this.extraction.studyDetails))
  }

  onChange(attr:string, isChecked: boolean) {
    if(isChecked) {
      this.studyDetails.push(attr);
    } else {
      let index = this.studyDetails.indexOf(attr);
      this.studyDetails.splice(index,1);
    }
    // this.extraction.studyDetails = this.studyDetails
}

}
