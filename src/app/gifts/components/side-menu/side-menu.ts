import { Component } from '@angular/core';
import { SideMenuHeader } from './side-menu-header/side-menu-header';
import { SidebarMenuOptions } from './side-menu-options/side-menu-options';


@Component({
  selector: 'gifts-side-menu',
  imports: [SideMenuHeader, SidebarMenuOptions],
  templateUrl: './side-menu.html',
})
export class SideMenu {}