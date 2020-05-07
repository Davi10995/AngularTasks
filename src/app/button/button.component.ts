import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() button: { type: string, name: string, label: string, class: string};

  constructor() { }

  ngOnInit(): void {
  }

}
