// Angular
import { Component, OnInit, Input } from '@angular/core';

// Application
import { Menu } from '../domain/menu';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  @Input() menuItems: Menu[];
  
  constructor() { }

  ngOnInit() { }

}
