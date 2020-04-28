import { Component,Output,OnInit,EventEmitter } from '@angular/core';
import { GameComponent } from './game/game.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz';
  score:number = 0;
  userName:string = "UserName";
  @Output() activate: EventEmitter<any>

  OnActivate(event:any):void {

    if(event instanceof GameComponent){
    let gameComp:GameComponent = event;
    event.emitScore.subscribe( (data)=>{
      console.log(data);
      this.score = parseInt(data) ;
    });

  }
  if(event instanceof WelcomeComponent){
    let welComp:WelcomeComponent = event;
    event.getUserName.subscribe( (data)=>{
      console.log(data);
      this.userName = data ;
    });
  }
  }
}

