import { Component, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { storeMovie } from '../../api';
import { firstOrNull } from '../../common'
import { set, lensProp } from 'ramda'

@Component({
  selector: 'movie-modal',
  templateUrl: './modal.component.html',
  providers: [MessageService]
})
export class MovieModalComponent {
  genres: SelectItem[];
  
  @Output() handleMovieStored = new EventEmitter<object>();

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
      imdb: 93
    }
  }

  handleSubmit(){
    const movie = set(lensProp('genre'), firstOrNull(this.movie.genre), this.movie)
    storeMovie(movie).then(movie => {
      this.handleMovieStored.emit(movie);
      this.messageService.add({severity:'success', summary:'Success!', detail:'The movie was stored'});
    })
  }
}
