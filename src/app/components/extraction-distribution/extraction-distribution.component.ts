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

  onChange(extractorId:string, articleId:string, isChecked: boolean) {
    if(isChecked){
      if(this.countSelectedArticles(articleId) < this.amount){
        this.distribution[extractorId].add(articleId);
        console.log(this.distribution);
        console.log("aPUSH:::"+ extractorId + '>>>'+ articleId);
      }else{
        let elem:Element = document.getElementById(articleId + extractorId)
        this.renderer.setProperty (elem, "checked", false);
        this.alertService.error("Due to the article extraction amount, it's not possible to select article #" + articleId, false);
        console.log("uncheck::" + extractorId + '>>>'+ articleId);
        console.log(this.distribution);
        this.countSelectedArticles(articleId);
      }
    }else{
      this.distribution[extractorId].delete(articleId);
      console.log("remove::: " + extractorId + '>>>'+ articleId);
      console.log(this.distribution);
    }
  }

  countSelectedArticles(articleId: string){
    let count = 0;
    this.extractors.forEach(ex => {
      count += this.distribution[ex.id].has(articleId)? 1 : 0;
    });
    console.log("selectedArticles::" + count)
    return count;
  }

  initDistribution(){
    this.extractors.forEach(ex => {
      this.distribution[ex.id] = new Set();
    });
  }

  randomDistribution(){
    //let elem:Element = document.getElementById("1724343")
   // this.renderer.setProperty (elem, "checked", false);
    this.initDistribution();
    this.clearCheckbox();

    let num = this.amount;
    let fullDistribution = [];
    while(num>0){
      fullDistribution = fullDistribution.concat(this.articles);
      num--;
    }
    this.shuffleArray(fullDistribution);
    console.log(fullDistribution);
    let count = 0;
    let trackStucked = 0;
    while( fullDistribution.length > 0) {
      let currentArticle = fullDistribution.pop();
      let currentExtractor: string = this.extractors[(count % this.extractors.length)].id;

      if (trackStucked > fullDistribution.length){
        trackStucked = 0;
        count++;
      }

      if(this.distribution[currentExtractor].has(currentArticle.id)){
        this.distribution[currentExtractor].add(currentArticle.id);
        count++;
        console.log("id ex::" + currentExtractor + 'id art:::'+ currentArticle.id);
      }else{
        fullDistribution.unshift(currentArticle);
        trackStucked++;
        console.log("FALHA === id ex::" + currentExtractor + 'id art:::'+ currentArticle.id + '::: X' + trackStucked)
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

  clearCheckbox(){
    this.extractors.forEach(ex => {
      this.articles.forEach(art => {
        let elem:Element = document.getElementById(art.id + ex.id)
        this.renderer.setProperty (elem, "checked", false);
      });
    });
  }
}
