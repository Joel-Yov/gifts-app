import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { CharacterRick } from '../../components/interfaces/characterRick.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-ricky-and-morty',
  imports: [],
  templateUrl: './ricky-and-morty.html',
})
export default class RickyAndMorty {
  rickService = inject(RickAndMortyService);

  charactersRick = toSignal(this.rickService.loadCharactersSerie(), {initialValue: []})
}
