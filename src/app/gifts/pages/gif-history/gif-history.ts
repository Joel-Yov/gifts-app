import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop'
import { GifService } from '../../services/gifs.service';
import { GiftsList } from "../../components/gifts-list/gifts-list";

@Component({
  selector: 'app-gif-history',
  imports: [GiftsList],
  templateUrl: './gif-history.html',
})
export default class GifHistory { 
  gifService = inject(GifService)

  //Con esto escuchamos los parametros (osea la query, el gifBuscado pi) porque este va a cambiar a lo largo del tiempo cuando el usuario busque otros gifs
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      //Usamos params['query'] cuando son dinamicas y no sabemos si va a existir o no, porque puede ser que no se busque nada, osea no habría query
      //Por eso no usamos params.query
      map((params) => params['query']))
  )
  
  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
