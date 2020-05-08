import {Component, OnInit, Input} from '@angular/core';
import {Users} from '../users.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  constructor() { }

  @Input() data;
  // Dichiarazione dei campi header della tabella Users
  @Input() headers;

  ngOnInit(): void {
  }

}
