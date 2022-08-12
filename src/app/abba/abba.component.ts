import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-abba',
  templateUrl: './abba.component.html',
  styleUrls: ['./abba.component.css'],
})
export class AbbaComponent implements OnInit {
  oldjobs = JSON.parse(this.localStore.getData('jobs'));

  //Filter for entry matching criteria
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

  constructor(
    private formBuilder: FormBuilder,
    private localStore: LocalService,
    private route: Router
  ) {}

  ngOnInit() {}
}
