import { Component } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
import { FlopChooserService } from './flop-chooser.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flopbuster-vote';
  flops;
  hasChosen = false;
  isCorrect = false;
  constructor (public flopChooser: FlopChooserService){

  }

  ngOnInit() {
    this.selectNewFlops();
  }
  onFirstSelected(){
    if ( !this.hasChosen ) {
      this.isCorrect = this.flopChooser.isChoiceCorrect(this.flops.first, this.flops.second);
      console.log(this.isCorrect);
      this.hasChosen = true;
    }
  }

  onSecondSelected(){
    if ( !this.hasChosen ) {
      this.isCorrect = this.flopChooser.isChoiceCorrect(this.flops.second, this.flops.first) ;
      console.log(this.isCorrect);
      this.hasChosen = true;
    }
  }

  selectNewFlops() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

  onPlayAgainClicked() {
    this.hasChosen = false;
    this.selectNewFlops();
  }
}
