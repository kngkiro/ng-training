import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  jobofferform = this.formBuilder.group({
    timespan: '',
    name: '',
    department: '',
    description: '',
    skills: '',
    misc: '',
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Job Offer submitted!', this.jobofferform.value);
    this.jobofferform.reset();
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
