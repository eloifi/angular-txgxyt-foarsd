import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent {
  @Output()
  mouseenter2 = new EventEmitter();
  @Output()
  mouseleave2 = new EventEmitter();

  @Input()
  items;

  @ViewChild('childMenu')
  public childMenu;

}

