import { Component } from '@angular/core';
import { OptionsSidebar } from '../../interfaces/options-sidebar.interface';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'gifts-sidebar-menu-options',
  templateUrl: './side-menu-options.html',
  imports: [RouterLink, RouterLinkActive],
})
export class SidebarMenuOptions {
  
  optionsSidebarList: OptionsSidebar[] = [
    {
      optionName: 'Trending',
      optionDescription: 'Gifts Populares',
      icono: 'fa-solid fa-chart-line',
      ruta: '/dashboard/trending'
    },
    {
      optionName: 'Buscador',
      optionDescription: 'Buscador gifts',
      icono: 'fa-solid fa-magnifying-glas',
      ruta: '/dashboard/search'
    },
  ];
}