import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-apprentice',
  templateUrl: './apprentice.component.html',
  styleUrls: ['./apprentice.component.css']
})
export class ApprenticeComponent implements OnInit {

  jobs = JSON.parse(this.localStore.getData("jobs"));

  constructor(private localStore: LocalService) { }

  ngOnInit() {
  }

}