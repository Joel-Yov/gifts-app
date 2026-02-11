import { GifService } from './../../services/gifs.service';
import { Component, inject, signal } from '@angular/core';
import { GiftsList } from "../../components/gifts-list/gifts-list";
import { Gif } from '../../components/interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GiftsList],
  templateUrl: './search.html',
})
export default class Search {
  
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query:string)
  {
    this.gifService.searchGifs(query).subscribe((response) => this.gifs.set(response)) //Here we use the "response", because the service has already processed the data
  }
}