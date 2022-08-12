import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: any;


  constructor (public route: ActivatedRoute) {
    //changes head title with new path
    route.url.subscribe(() => this.title = location.pathname.split("/")[1] )
    
  }
  }

