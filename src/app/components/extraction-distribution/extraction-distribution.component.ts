import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-extraction-distribution',
  templateUrl: './extraction-distribution.component.html',
  styleUrls: ['./extraction-distribution.component.css']
})
export class ExtractionDistributionComponent implements OnInit {

  id:number;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(_ => this.id = _.id);
  }

  distribution = {};

  extractors = [
    {id: 4343, name: "Antônio"},
    {id: 54332, name: "Edmo"},
    {id: 34343, name: "Igor"},
    {id: 6343, name: "Simone"}
  ];

  ngOnInit() {
    this.initDistribution();
  }

  articles = [
    {id: 172, title: "Formalizing a Systematic Review Updating Process"},
    {id: 151, title:"Linked data approach for selection process automation in systematic reviews"},
    {id: 12, title:"A Visual Text Mining approach for Systematic Reviews"},
    {id: 15, title:"Investigating the Use of a Hybrid Search Strategy for Systematic Reviews"},
    {id: 512, title:"Search Engine Overlaps : Do they agree or disagree?"},
    {id: 112, title:"Systematic literature reviews in software engineering: Preliminary results from interviews with researchers"},
    {id: 72, title:"Motivation to Perform Systematic Reviews and their Impact on Software Engineering Practice"},
    {id: 142, title:"Repeatability of systematic literature reviews"},
    {id: 212, title:"Data Sampling and Supervised Learning for HIV Literature Screening"}
  ];

  onChange(extractor:string, article:string, isChecked: boolean) {
    if(isChecked){
      this.distribution[extractor].push(article);
    }else{
      this.distribution[extractor].pop(article);
    }
  }

  initDistribution(){
    this.extractors.forEach(ex => {
      this.distribution[ex.id] = [];
    });
  }

}
