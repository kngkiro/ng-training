import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from '../../local.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.css']
})
export class NewjobComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private localStore: LocalService, private route: Router) { }

  newjob = this.formBuilder.group({
    group:'',
    year:'',
    start: '',
    end: '',
    name: '',
    department: '',
    description: '',
    skills: '',
    misc: '',

  });

  onSubmit(): void {

    var currentJobs = this.localStore.getData("jobs");
    if(currentJobs != null){
      var saveString = currentJobs.substring(0,currentJobs.length-1) + "," + JSON.stringify(this.newjob.value) + "]";
    }
    else{
      var saveString = "[" + JSON.stringify(this.newjob.value) + "]";
    }
    this.localStore.saveData("jobs",saveString);
    this.route.navigate(['/abba']);
  }

  ngOnInit() {
  }

}