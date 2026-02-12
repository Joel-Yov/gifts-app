import { GifService } from './../../../services/gifs.service';
import { Component, inject } from '@angular/core';
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
      icono: 'fa-solid fa-magnifying-glass',
      ruta: '/dashboard/search'
    },
    {
      optionName: 'Friends',
      optionDescription: 'Tu lista de amigos',
      icono: 'fa-solid fa-user-group',
      ruta: '/dashboard/friends'
    }
  ];

  gifService = inject(GifService);
}