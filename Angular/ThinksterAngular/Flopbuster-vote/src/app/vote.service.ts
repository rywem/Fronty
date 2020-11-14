import { FLOP_DATA } from './FLOP_DATA';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class VoteService {
    flops = FLOP_DATA;
    maxValue = FLOP_DATA.length;

    firstOption = 0;
    secondOption = 1;
    winner;
    answerMessage;
    reset = false;
    firstRandom(){
        this.firstOption = Math.floor(Math.random() * this.maxValue);      
    }
      
    secondRandom(){
        while (true){
            this.secondOption = Math.floor(Math.random() * this.maxValue);
            if (this.secondOption != this.firstOption) {
                break;
            }
        }
    }
    Startover(){
        this.firstRandom();
        this.secondRandom();
        this.answerMessage = "";
        this.reset = false;
    }
  
    getWinningAnswer() {
        if (this.flops[this.firstOption].stars < this.flops[this.secondOption].stars )
            return "first";
        else 
            return "second";
    }
  
    answer(selected)  {
        if (selected == this.getWinningAnswer())
        {
            this.winner = true;
            this.answerMessage = "Correct!";
        }
        else 
        {
            this.winner = false;
            this.answerMessage = "Incorrect!";
        }
        this.reset = true;
    }
}