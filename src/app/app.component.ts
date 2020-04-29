import { Component,Output,OnInit,EventEmitter,Input } from '@angular/core';
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
  @Input() showHeader = false;
  @Output() activate: EventEmitter<any>

  OnActivate(event:any):void {

    if(event instanceof GameComponent){
    let gameComp:GameComponent = event;
    event.emitScore.subscribe( (data)=>{
      console.log(data);
      this.score = parseInt(data) ;
    });

      event.displayHeader.subscribe( (displayFlag)=>{
      debugger;
      console.log(displayFlag);
      setTimeout(() => {
        this.showHeader = displayFlag;

      })


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

