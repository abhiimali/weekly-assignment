import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1-q2-navbar',
  templateUrl: './q1-q2-navbar.component.html',
  styleUrls: ['./q1-q2-navbar.component.css']
})
export class Q1Q2NavbarComponent implements OnInit {

  selectedMenu: string = 'home';

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
  }

  getBackgroundColor(): string {
    switch (this.selectedMenu) {
      case 'home': return 'lightblue';
      case 'services': return 'lightgreen';
      case 'contact': return 'lightcoral';
      default: return 'transparent';
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
