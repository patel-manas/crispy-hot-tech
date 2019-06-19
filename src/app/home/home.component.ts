import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navItems: {header: string, active: boolean}[] = [
    {header: 'Home', active: true},
    {header: 'Posts', active: false},
    {header: 'Catagory', active: false},
    {header: 'Profile', active: false},
    {header: 'Contact Me', active: false}
  ];
  constructor() { }

  ngOnInit() {

  }

  toggleMenuBarItem (itemndex) {
    console.log({itemndex});
    this.navItems.forEach(navItem => navItem.active = false);
    this.navItems[itemndex].active = true;
  }

}
