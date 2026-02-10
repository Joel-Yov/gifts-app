import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import type { GiphyResponse } from '../components/interfaces/giphy.interface'; //USA type para decirle al compilador que solo es una interfaz
import { Gif } from '../components/interfaces/gif.interface';
import { GifMapper } from 'src/app/mapper/gif.mapper';

@Injectable({ providedIn: 'root'})
export class GifService {
    //NO TE OLVIDES DE PROVEER EL HTTPCLIENTE EN EL app.config.ts
    private http = inject(HttpClient);

    trendingGifts = signal<Gif[]>([])

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
            this.trendingGifts.set(gifs)
            console.log(gifs);
        })
    }
}