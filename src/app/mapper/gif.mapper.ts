import { Gif } from "../gifts/components/interfaces/gif.interface";
import { GiphyItem } from "../gifts/components/interfaces/giphy.interface";

export class GifMapper {
    //Te acuerdas que no necesitamos todo el objeto que nos da la API, checa el GiphyItem, son muchos valores
    //A nosotros solo nos interesa 3 propiedades que son las de la interface Gif (url, title y id)
    static mapGiphyItemToGif(item: GiphyItem) : Gif 
    {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }

    static mapGiphyItemsToGifArray( items: GiphyItem[]): Gif[] 
    {
        return items.map(this.mapGiphyItemToGif)
    }
}