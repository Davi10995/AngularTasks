import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primoTask';
  // For button
  type: string ;
  name: string;
  class: string;
  label: string;


  getName(event){
    this.name = event.target.value;
  }
  getType(event){
    this.type = event.target.value;
  }
  getLabel(event){
    this.label = event.target.value;
  }
  getClass(event){
    this.class = event.target.value;
  }
}

