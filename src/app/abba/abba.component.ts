import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-abba',
  templateUrl: './abba.component.html',
  styleUrls: ['./abba.component.css']
})
export class AbbaComponent implements OnInit {

  jobs = JSON.parse(this.localStore.getData("jobs"));


  constructor(private localStore: LocalService) { }

  ngOnInit() {
  }

}