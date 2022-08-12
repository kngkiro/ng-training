import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css'],
})
export class InstructorComponent implements OnInit {
  oldphases = JSON.parse(this.localStore.getData('jobs'));

  filtercriteria = this.formBuilder.group({
    subject: '',
    startingyear: '',
  });

  filter(): any {
    let filteredlist = [];
    this.oldphases.forEach((jsonobj) => {
      let ok = true;
      if (
        this.filtercriteria.value.subject != '' &&
        this.filtercriteria.value.subject != jsonobj.group
      ) {
        ok = false;
      }
      if (
        this.filtercriteria.value.startingyear != '' &&
        this.filtercriteria.value.startingyear != jsonobj.year
      ) {
        ok = false;
      }
      if (ok) {
        filteredlist.push(jsonobj);
      }
    });
    console.log(filteredlist);
    this.phases = filteredlist;
    return filteredlist;
  }

  phases = this.filter();

  constructor(
    private localStore: LocalService,
    private formBuilder: FormBuilder
  ) {
    //console.log(JSON.parse(this.localStore.getData("AI2022")));
  }

  ngOnInit() {}
}
