import { Component, OnInit } from '@angular/core';
import { Menu } from '../domain/menu';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  menuItems: Menu[] = [];

  constructor() { }

  ngOnInit() {
    // mock - será ajustado na Task #11
    this.menuItems.push(new Menu('home', 'Home', 'home.controller').isActive());
    this.menuItems.push(new Menu('tab1', 'Tab 1', 'tab.1.controller'));
    this.menuItems.push(new Menu('tab2', 'Tab 2', 'tab.2.controller'));
    this.menuItems.push(new Menu('tab3', 'Tab 3', 'tab.3.controller'));
    this.menuItems.push(new Menu('tab4', 'Tab 4', 'tab.4.controller'));
    this.menuItems.push(new Menu('tab5', 'Tab 5', 'tab.5.controller'));
    this.menuItems.push(new Menu('tab6', 'Tab 6', 'tab.6.controller'));
  }

}
