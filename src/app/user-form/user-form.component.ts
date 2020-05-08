import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Users} from '../users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  @Output() user = new EventEmitter<{Users}>();
  customUser: Users;
  constructor() { }

  ngOnInit(): void {
  }

  // crea uno user con i dati inseriti dall'utente nel form
  userProperties(nome, cognome, citta, username){
    this.customUser = new Users(nome, cognome, citta, username);
    this.user.emit({Users: this.customUser});
  }

}
