import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  jobofferform = this.formBuilder.group({
    start: '',
    end: '',
    name: '',
    department: '',
    description: '',
    skills: '',
    misc: '',
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Job Offer submitted!', this.jobofferform.get('name').value);

    console.warn(this.jobofferform.get('end').value);
    this.localStore.saveData("5",JSON.stringify(this.jobofferform.value));
  }

  constructor(private formBuilder: FormBuilder, private localStore: LocalService) {}

  ngOnInit() {}

}