import { Monster } from './models/monster.model';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "../components/playing-card/playing-card.component";
import { SearchBarComponent } from "../components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playing-card';
  monster1! : Monster ; 
  count: number = 0; 
  search = '' ; 
  constructor(){
    this.monster1=new Monster() ; 
    this.monster1.name="Pick";
    this.monster1.hp= 40;
    this.monster1.figureCaption = "N°002 Pick";
    // this.monster1.attackName = "Geo Impact";
    // this.monster1.attackStrength = 60;
    // this.monster1.attackDescription = "this is a long description of a monster attack . Probably something to do with elecricity";
  }
  increaseCount(){
    this.count++;
  }
}
