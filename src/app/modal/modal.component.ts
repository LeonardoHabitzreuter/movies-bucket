import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';

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
    name: 'The Shawshank Redemption',
    imdbUrl: 'https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=GSS35W72SG006QQ95TRS&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1',
    seen: false,
    genre: [],
    rating: {
      imdb: 93,
      personal: 4
    }
  }

  handleSubmit(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'The movie was stored'});
    console.log(this.movie)
  }
}
