import { GiphyResponse } from './../components/interfaces/giphy.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Gif } from '../components/interfaces/gif.interface';
import { GifMapper } from 'src/app/mapper/gif.mapper';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class GifService {
    //NO TE OLVIDES DE PROVEER EL HTTPCLIENTE EN EL app.config.ts
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal<boolean>(true);

    constructor(){
        this.loadTrendingGifs();
    }

    // UN OBSERVABLE DICE: UN OBJETO PUEDE ESTAR EMITIENDO VALORES, POR ESO SE USA PARA PESTAR PENDIENTES DE LO QUE LA PETICION HTTP RESUELVA
    loadTrendingGifs() 
    {
        this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.apiKey,
                limit: 20
            }
            //LA PETICION HTTP NO SE VA A DISPARAR HASTA QUE NO USEMOS .subscribe
        }).subscribe((response) => {
            //NECESITAMOS UN MAPPER 
            const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);

            //TAMBIEN VAMOS A LLENAR EL ARRAY DE trendingGifts gracias al mapeado que ya se hizo
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
        })
    }

    //THIS IS THE BEST WAY, BECAUSE THE SERVICE JUST GET THE DATA
    //THE COMPONENT DECIDE TO DO WITH THAT (in this case: onSearch() search.ts)
    searchGifs(query: string)
    {
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.apiKey,
                limit: 20,
                q: query
            }
        }).pipe(
            map(({data}) => (data)),
            //Una vez recorrido toda la data de la respuesta de la API get, el sistema ya sabra que es un item, ANTES NO
            map((items) => GifMapper.mapGiphyItemsToGifArray(items))
        )
    }
}