import { Component, ViewChild } from '@angular/core';
import { MovieTableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MovieTableComponent)
  private tableComponent: MovieTableComponent;

  title = 'Movies bucket';

  handleMovieStored(movie) {
    this.tableComponent.addMovie(movie)
  }
}
