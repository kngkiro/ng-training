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
    end: ''
  });

  onSubmit(): void {
  }

  ngOnInit() {
  }

}