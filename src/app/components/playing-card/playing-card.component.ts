import { Component, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProproties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges {
 @Input() monster = new Monster() ;
 monsterTypeIcon: string = "assets/img/fire.png";
 backgrounColor: string="rgb(255,255,104)";



  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes") ; 
    if(changes['monster']){
      if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type ){
        console.log(this.monster.type) ; 
        this.monsterTypeIcon=MonsterTypeProproties[this.monster.type].imageUrl;
       this.backgrounColor=MonsterTypeProproties[this.monster.type].color;
      }
    }
  }
}
