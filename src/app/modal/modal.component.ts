import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { getMovies, storeMovie, removeMovie } from '../../api';
import { firstOrNull } from '../../common'
import { set, lensProp } from 'ramda'

@Component({
  selector: 'movie-modal',
  templateUrl: './modal.component.html',
  providers: [MessageService]
})
export class MovieModalComponent {
  genres: SelectItem[];

  constructor(private messageService: MessageService) {
    this.genres = [
      {label: 'Action', value: 'Action'},
      {label: 'Adventure', value: 'Adventure'},
      {label: 'Animation', value: 'Animation'},
      {label: 'Comedy', value: 'Comedy'},
      {label: 'Drama', value: 'Drama'},
      {label: 'Fantasy', value: 'Fantasy'},
      {label: 'History', value: 'History'},
      {label: 'Horror', value: 'Horror'}
    ];
  }
  
  movie = {
    name: '',
    imdbUrl: '',
    seen: false,
    genre: [],
    rating: {
      imdb: 93,
      personal: 4
    }
  }

  handleSubmit(){
    storeMovie(set(lensProp('genre'), firstOrNull(this.movie.genre), this.movie)).then(() => {
      this.messageService.add({severity:'success', summary:'Success!', detail:'The movie was stored'});
    })
  }
}
