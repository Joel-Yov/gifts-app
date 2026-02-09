import { Component, input } from '@angular/core';
import { GiftsListItems } from './gifts-list-items/gifts-list-items';

@Component({
  selector: 'gifts-gifts-list',
  imports: [GiftsListItems],
  templateUrl: './gifts-list.html',
})
export class GiftsList { 
  gifts = input.required<string[]>()
}
