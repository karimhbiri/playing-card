import { Monster } from './models/monster.model';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playing-card';
  monsters! : Monster[] ; 
  count: number = 0; 
  search = '' ; 

  selectedMonsterIndex=1 ; 
  constructor(){
    this.monsters=[]; 
   const monster1=new Monster() ; 
    monster1.name="Pick";
    monster1.hp= 40;
    monster1.figureCaption = "N°002 Pick";
    this.monsters.push(monster1); 
    const monster2=new Monster() ; 
    monster2.name="Car";
    monster2.hp= 60;
    monster2.figureCaption = "N°003 Pick";
    monster2.image="assets/img/water.jpg"
    monster2.type=MonsterType.WATER;
    this.monsters.push(monster2); 
   
  }
  increaseCount(){
    this.count++;
  }
  toggleMonster(){
    this.selectedMonsterIndex=(this.selectedMonsterIndex +1 )% this.monsters.length;
  }
}
