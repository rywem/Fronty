import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RentalListComponent, MovieTileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
