import { Component,HostListener  } from '@angular/core';

interface MenuItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: MenuItem[] = [
    {name:'Colors',link:'colors'},
    {name:'Typography', link: 'tipography'},
    {name: 'Spaces', link: 'spaces'},
    {name: 'Buttons', link: '/button'},
    {name:'Inputs', link:'input'},
    {name:'Grid', link: 'grid'},
  ];
  burgerActive = false;
  navActive = false;

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (!this.burgerActive || !this.navActive) {
      return;
    }

    const target = event.target as HTMLElement;
    if (!target.closest('.burger') && !target.closest('.nav-list')) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.burgerActive = !this.burgerActive;
    this.navActive = !this.navActive;
  }

}
