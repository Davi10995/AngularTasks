import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Users} from '../users.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{


  // @Output() user = new EventEmitter<{Users}>();
  customUser: Users;

  constructor(
    private dataService: DataService
  ) {}

  // crea uno user con i dati inseriti dall'utente nel form
  userProperties(nome, cognome, citta, username){
    this.customUser = new Users(nome, cognome, citta, username);
    this.dataService.users.emit(this.customUser);
  }

}
