import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert-service';



@Component({
  selector: 'app-extraction-distribution',
  templateUrl: './extraction-distribution.component.html',
  styleUrls: ['./extraction-distribution.component.css']
})
export class ExtractionDistributionComponent implements OnInit {

  id:number;
  amount:number = 2;
  constructor(private route: ActivatedRoute, 
    private renderer: Renderer2,
    private alertService : AlertService) {
    route.params.subscribe(_ => this.id = _.id);
  }

  distribution = {};

  extractors = [
    {id: "01", name: "Antônio"},
    {id: "02", name: "Edmo"},
    {id: "03", name: "Igor"},
    {id: "04", name: "Simone"}
  ];

  ngOnInit() {
    this.initDistribution();
  }

  articles = [
    {id: "172", title: "Formalizing a Systematic Review Updating Process"},
    {id: "151", title:"Linked data approach for selection process automation in systematic reviews"},
    {id: "12", title:"A Visual Text Mining approach for Systematic Reviews"},
    {id: "15", title:"Investigating the Use of a Hybrid Search Strategy for Systematic Reviews"},
    {id: "512", title:"Search Engine Overlaps : Do they agree or disagree?"},
    {id: "112", title:"Systematic literature reviews in software engineering: Preliminary results from interviews with researchers"},
    {id: "72", title:"Motivation to Perform Systematic Reviews and their Impact on Software Engineering Practice"},
    {id: "142", title:"Repeatability of systematic literature reviews"},
    {id: "212", title:"Data Sampling and Supervised Learning for HIV Literature Screening"}
  ];

  onChange(extractor:string, article:string, isChecked: boolean) {
    if(isChecked){
      if(this.contSelectedArticles(article) < this.amount)
        this.distribution[extractor].push(article);
      else{
        let elem:Element = document.getElementById(article + '' + extractor)
        this.renderer.setProperty (elem, "checked", false);
        this.alertService.error("Due to the article extraction amount, it's not possible to select article #" + article, false);
      }

    }else{
      this.distribution[extractor].pop(article);
    }
  }

  contSelectedArticles(article: string){
    let cont = 0;
    this.extractors.forEach(ex => {
      this.distribution[ex.id].forEach(element => {
        if(element === article)
          cont++;
      });
    });
    return cont;
  }

  initDistribution(){
    this.extractors.forEach(ex => {
      this.distribution[ex.id] = [];
    });
  }

  randomDistribution(){
    //let elem:Element = document.getElementById("1724343")
   // this.renderer.setProperty (elem, "checked", false);

    let num = this.amount;
    let fullDistribution = [];
    while(num>0){
      fullDistribution = fullDistribution.concat(this.articles);
      num--;
    }
    this.shuffleArray(fullDistribution);
    console.log(fullDistribution);
    let cont = 0;
    while( fullDistribution.length > 0) {
      let currentArticle = fullDistribution.pop();
      let currentExtractor: string = this.extractors[(cont % this.extractors.length)].id;

      if(this.distribution[currentExtractor].indexOf(currentArticle.id) == -1){
        this.distribution[currentExtractor].push(currentArticle.id);
        cont++;
        console.log("id ex::" + currentExtractor + 'id art:::'+ currentArticle.id);
      }else{
        fullDistribution.unshift(currentArticle);
        console.log("FALHA === id ex::" + currentExtractor + 'id art:::'+ currentArticle.id)
      }
    }    
    this.updateCheckbox();
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
    return array;
  }

  updateCheckbox(){
    this.extractors.forEach(ex => {
      console.log(ex);
      this.distribution[ex.id].forEach(art => {
        let elem:Element = document.getElementById(art+ex.id)
        console.log(ex.id + '<>' + art);
        this.renderer.setProperty (elem, "checked", true);
        this.alertService.success("Random distribution completed!", false);
      });
    });
  }
}
