import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() button: { type: string, name: string, label: string, class: string, href: string};

  constructor() { }

  ngOnInit(): void {
  }


  // getName(event){
  //   this.button.name = event.target.value;
  // }
  // getType(event){
  //   this.button.type = event.target.value;
  // }
  // getLabel(event){
  //   this.button.label = event.target.value;
  // }
  // getClass(event){
  //   this.button.class = event.target.value;
  // }
}
