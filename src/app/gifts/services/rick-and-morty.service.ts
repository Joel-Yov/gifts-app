import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RickAndMortyResponse } from '../components/interfaces/rick-and-morty.interface';
import { environment } from '@environments/environment';
import { map } from 'rxjs';
import { RickyAndMortyMapper } from 'src/app/mapper/rick-morty.mapper';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {

  //STEP 01: INJECT THE SERVICE HTTP 
  http = inject(HttpClient);

  loadCharactersSerie()
  {
    return this.http.get<RickAndMortyResponse>(`${environment.rickAndMortyUrl}/api/character`).pipe(
      map(({results}) => results),
      map((items) => RickyAndMortyMapper.mapRickApiItemsToCharacterList(items)),
    )
  }
}
