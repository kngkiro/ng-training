import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from '../../local.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private localStore: LocalService, private route: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.pipe(map(params=>params.start)).subscribe(start=>this.application.controls.start.setValue(start));
     activatedRoute.queryParams.pipe(map(params=>params.end));

  }



  application = this.formBuilder.group({
    group:'',
    year:'',
    start: '',
    end: '',
    name: '',
    mail:'',
    motivation:''

  });

  onSubmit(): void {
    this.localStore.removeData("applications");
    var currentApplications = this.localStore.getData("applications");
    if(currentApplications != null){
      var saveString = currentApplications.substring(0,currentApplications.length-1) + "," + JSON.stringify(this.application.value) + "]";
    }
    else{
      var saveString = "[" + JSON.stringify(this.application.value) + "]";
    }
    this.localStore.saveData("applications",saveString);
    this.route.navigate(['/apprentice']);

  }

  ngOnInit() {
  }

}