import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primoTask';
  // For button
  bottone = {type: 'input', name: 'nome', label: 'btn', class: 'pulsante'};


  getButton(event: {type: string, name: string, label: string, class: string}) {
    this.bottone = {type: event.type, name: event.name, label: event.label, class: event.class};
  }
}

