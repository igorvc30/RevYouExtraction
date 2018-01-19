import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterHelper } from './helpers/router-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router){

  }

  projectsRoute = RouterHelper.projectsRoute

  ngOnInit(){
    this.router.navigate(['projects']);
  }

}
