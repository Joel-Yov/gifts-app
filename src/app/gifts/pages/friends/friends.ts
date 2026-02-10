import { Component, inject } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { FriendsList } from "../../components/friends-list/friends-list";

@Component({
  selector: 'app-friends',
  imports: [FriendsList],
  templateUrl: './friends.html',
})
export default class Friends { 
  public friendsService = inject(FriendsService)
}
