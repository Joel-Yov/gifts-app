import { Component, input } from '@angular/core';

@Component({
  selector: 'app-friend-list-items',
  imports: [],
  templateUrl: './friend-list-items.html',
})
export class FriendListItems {
  listaAmigos = input.required<string>()
}
