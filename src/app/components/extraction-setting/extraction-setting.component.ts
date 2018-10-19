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

  selectedCityIds: any[];

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
  
  extraction = new Extraction();

  // keys = Object.keys;
  // symbols = Method;

  @ViewChild('f') form: any;
  constructor() { }

  ngOnInit() {}


}
