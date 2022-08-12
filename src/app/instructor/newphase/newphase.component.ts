import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from '../../local.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newphase',
  templateUrl: './newphase.component.html',
  styleUrls: ['./newphase.component.css']
})
export class NewphaseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private localStore: LocalService, private route: Router) { }

  newphase = this.formBuilder.group({
    group:'',
    year:'',
    start: '',
    end: ''
  });

  onSubmit(): void {

    var phase = this.newphase.get("group").value + this.newphase.get("year").value;

    var currentPhases = this.localStore.getData(phase);
    if(currentPhases != null){
      var saveString = currentPhases.substring(0,currentPhases.length-1) + "," + JSON.stringify(this.newphase.value) + "]";
    }
    else{
      var saveString = "[" + JSON.stringify(this.newphase.value) + "]";
    }
    this.localStore.saveData(phase,saveString);
    this.route.navigate(['/instructor']);
  }

  ngOnInit() {
  }

}