import { Component } from '@angular/core';
import {Users} from '../app/users.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primo Task';
  title2 = 'Secondo Task';
  // For button
  bottone = {type: 'input', name: 'nome', label: '', class: 'btn', href: ''};
  // For Users
  users: Users[] = [];

  // Ottiene i dati del bottone inseriti dall'utente nel form
  getButton(event: {type: string, name: string, label: string, class: string, href: string}) {
    this.bottone = {type: event.type, name: event.name, label: event.label, class: event.class, href: event.href};
  }

  // Ottiene e aggiunge lo user inserito dall'utente nel form.
  getUser(event: { Users }){
    this.users.push(event.Users);
  }
}

