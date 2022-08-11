import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-training2';
  key: string = 'Name';
  myItem!: string;

  storeName() {
    localStorage.setItem(this.key, 'Angular');
    this.myItem = localStorage.getItem(this.key);
  }
  }
