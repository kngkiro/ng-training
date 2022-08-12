import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';



@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css'],
})
export class InstructorComponent implements OnInit {

  phases = JSON.parse(this.localStore.getData("AI2022"));

  constructor(private localStore: LocalService) { 
    //console.log(JSON.parse(this.localStore.getData("AI2022")));
  }

  

  ngOnInit() {
  }

}