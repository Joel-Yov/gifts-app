import { Component, input } from '@angular/core';

@Component({
  selector: 'gifts-gifts-list-items',
  imports: [],
  templateUrl: './gifts-list-items.html',
})
export class GiftsListItems {

  imageUrl = input.required<string>();

}