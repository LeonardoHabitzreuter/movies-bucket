import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'movie-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [MessageService]
})
export class MovieModalComponent {
  constructor(private messageService: MessageService) {

  }
  
  movie = {
    name: 'The Shawshank Redemption',
    imdbUrl: 'https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=GSS35W72SG006QQ95TRS&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1',
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
