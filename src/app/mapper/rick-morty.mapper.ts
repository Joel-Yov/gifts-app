import { map } from 'rxjs';
import { CharacterRick } from "../gifts/components/interfaces/characterRick.interface";
import { RickResult } from "../gifts/components/interfaces/rick-and-morty.interface";


export class RickyAndMortyMapper {

    // MAPEAMOS EL OBJETO DE LA RESPONSE PARA RESCATAR SOLO LAS PROPIEDADES QUE QUEREMOS
    static mapApiRickItemToCharacters(item : RickResult) : CharacterRick
    {
        return {
            id: item.id,
            name: item.name,
            species: item.species,
            image: item.image
        }
    }

    static mapRickApiItemsToCharacterList(items:RickResult[]) : CharacterRick[]
    {
        return items.map(this.mapApiRickItemToCharacters);
    }
}