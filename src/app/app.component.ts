import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentsServiceTask26April';
  OnAdd(reset:HTMLTextAreaElement){
    reset.value =""
  }
}
