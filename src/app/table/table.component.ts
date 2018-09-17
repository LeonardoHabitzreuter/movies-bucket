import { Component, OnInit } from '@angular/core';
import { getMovies, removeMovie, updateMovie } from '../../api';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { pipe, assoc, assocPath, append, sort, descend, path } from 'ramda';

@Component({
  selector: 'movie-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MovieTableComponent implements OnInit {
  showRatingModal = false
  ratingMovie = {
    id: null,
    rating: 1
  }
  movies = []

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    getMovies().then(movies => this.updateMovieList(movies))
  }

  updateMovieList(movies) {
    this.movies = sort(
      descend(path(['rating', 'imdb'])),
      movies
    )
  }

  deleteMovie(id) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this movie?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        removeMovie(id).then(() => {
          this.updateMovieList(this.movies.filter(movie => movie.id !== id))
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
    const movie = pipe(
      assoc('seen', true),
      assocPath(['rating', 'personal'], this.ratingMovie.rating)
    )(this.movies.find(movie => movie.id === this.ratingMovie.id))

    updateMovie(movie)
      .then(() => {
        this.messageService.add({severity:'success', summary:'Success!', detail:'You rated the movie succesfully!'})
        this.showRatingModal = false
        this.updateMovieList(this.movies.map(m => m.id === movie.id ? movie : m))
      })
  }

  addMovie(movie) {
    this.updateMovieList(append(movie, this.movies))
  }
}
