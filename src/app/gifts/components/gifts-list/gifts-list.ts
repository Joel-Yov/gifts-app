import { Component, input } from '@angular/core';
import { GiftsListItems } from './gifts-list-items/gifts-list-items';
import { Gif } from '../interfaces/gif.interface';

@Component({
  selector: 'gifts-gifts-list',
  imports: [GiftsListItems],
  templateUrl: './gifts-list.html',
})
export class GiftsList { 
  gifs = input.required<Gif[]>()
}
