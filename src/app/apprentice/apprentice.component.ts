import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-apprentice',
  templateUrl: './apprentice.component.html',
  styleUrls: ['./apprentice.component.css']
})
export class ApprenticeComponent implements OnInit {

  oldjobs = JSON.parse(this.localStore.getData('jobs'));

  filtercriteria = this.formBuilder.group({
    subject: '',
    startingyear: '',
  });

  filter(): any {
    let filteredlist = [];
    this.oldjobs.forEach((jsonobj) => {
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
    this.jobs = filteredlist;
    return filteredlist;
  }

  jobs = this.filter();
  constructor(private localStore: LocalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}