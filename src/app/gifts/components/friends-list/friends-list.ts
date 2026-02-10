import { Component, input } from '@angular/core';
import { FriendListItems } from './friend-list-items/friend-list-items';

@Component({
  selector: 'app-friends-list',
  imports: [FriendListItems],
  templateUrl: './friends-list.html',
})
export class FriendsList { 
  //PASO 1: RECIBIR EL INPUT DEL PADRE
  listAmigos = input.required<string[]>();
  tituloFriendsPage = input<string>('Lista de amigos');
}
