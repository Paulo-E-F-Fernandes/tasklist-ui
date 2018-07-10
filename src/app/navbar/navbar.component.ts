// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { Menu } from '../domain/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pageName : string = 'Page-Name';
  pageLogo : string = '/assets/img/logo.png';
  menuItemsReturned : Menu[] = [];

  constructor() { }

  ngOnInit() { 
    // mock - será ajustado na Task #11
    this.menuItemsReturned.push(new Menu('home', 'Home', 'home.controller').isActive());
    this.menuItemsReturned.push(new Menu('tab1', 'Tab 1', 'tab.1.controller'));
    this.menuItemsReturned.push(new Menu('tab2', 'Tab 2', 'tab.2.controller'));
    this.menuItemsReturned.push(new Menu('tab3', 'Tab 3', 'tab.3.controller'));
    this.menuItemsReturned.push(new Menu('tab4', 'Tab 4', 'tab.4.controller'));
    this.menuItemsReturned.push(new Menu('tab5', 'Tab 5', 'tab.5.controller'));
    this.menuItemsReturned.push(new Menu('tab6', 'Tab 6', 'tab.6.controller'));
  }

}
