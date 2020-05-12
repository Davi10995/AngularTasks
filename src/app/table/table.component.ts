import {Component, OnInit, Input} from '@angular/core';

import {DataService} from '../data.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = [];
  // Dichiarazione dei campi header della tabella Users
  @Input() headers;

  constructor(
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.dataService.users.subscribe((users) => {
      this.data.push(users);
    });
  }

}
