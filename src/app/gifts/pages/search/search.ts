import { GifService } from './../../services/gifs.service';
import { Component, inject } from '@angular/core';
import { GiftsList } from "../../components/gifts-list/gifts-list";

@Component({
  selector: 'app-search',
  imports: [GiftsList],
  templateUrl: './search.html',
})
export default class Search {
  
  gifService = inject(GifService);

  onSearch(query:string) 
  {
    this.gifService.loadSearchGifs(query);
  }
}
