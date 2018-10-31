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

  ngOnInit() {
  }

}
