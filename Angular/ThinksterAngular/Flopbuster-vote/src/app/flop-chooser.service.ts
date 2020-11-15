import { Injectable } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';

@Injectable({
    providedIn: 'root'
})

export class FlopChooserService{
    flopData;

    constructor () {
        this.flopData = FLOP_DATA;
    }

    getRandomIndex() {
        return Math.floor(Math.random() * Math.floor(this.flopData.length));
    }

    getTwoRandomFlops() {
        let firstIndex = this.getRandomIndex();

        let secondIndex = firstIndex;

        while (firstIndex == secondIndex)
            secondIndex = this.getRandomIndex();

        return { 
            first: this.flopData[firstIndex],
            second: this.flopData[secondIndex]
        };
    }

    isChoiceCorrect(choice, other) {
        return choice.stars <= other.stars;
    }
}