import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: [  ]
})
export class MovieTileComponent  {
  @Input() movie;

}