import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() button = new EventEmitter<{type: string, name: string, label: string, class: string, href: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  buttonProperties(type, name, label, classe, href){
    this.button.emit( {type, name, label, class: classe, href});
  }
}
