import { Component } from '@angular/core';
import { getMovies, removeMovie, updateMovie } from '../../api';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'movie-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MovieTableComponent {
  showRatingModal = false
  ratingMovie = {
    id: null,
    rating: 1
  }
  movies = []

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {
    getMovies().then(movies => this.movies = movies)
  }

  deleteMovie(id) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this movie?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        removeMovie(id).then(() => {
          this.messageService.add({severity:'success', summary:'Success!', detail:'The movie was deleted!'});
        })
      }
    })
  }

  openRatingModal(movieId) {
    this.ratingMovie.id = movieId
    this.showRatingModal = true
  }

  rateMovie() {
    const movie = this.movies.find(movie => movie.id === this.ratingMovie.id)

    updateMovie({ ...movie, seen: true, rating: { ...movie.rating, personal: this.ratingMovie.rating } }).then(() => {
      this.messageService.add({severity:'success', summary:'Success!', detail:'You rated the movie succesfully!'})
      this.showRatingModal = false
    })
  }
}
