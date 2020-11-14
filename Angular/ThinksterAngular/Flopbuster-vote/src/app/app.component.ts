import { Component } from '@angular/core';
import { VoteService } from './vote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flopbuster-vote';


  constructor (public voteService: VoteService){

  }
}
