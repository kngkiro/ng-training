import { Component } from '@angular/core';
import { LocalService } from './local.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private localStore: LocalService) {

  }

  title = 'ng-training';
  test = this.localStore.getData("Test")

  
}
