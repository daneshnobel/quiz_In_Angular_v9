import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionsService } from '../questions.service';
import {Question} from '../question';
// import * as jQuery from 'jquery';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  questions:Question[] = null;
  questionIndex:number = 0
  currQuestion:Question = null;
  totalQuestions: number;
  score:number = 0;
  isQuestionAnswered:boolean = false;
  message:string = null;
  userName:string = null;
  showOverlay = false;
   @Output() emitScore: EventEmitter<string> = new EventEmitter<string>();
   @Output() displayHeader: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private questionService : QuestionsService) {
  }

  ngOnInit(): void {

    // jQuery('.toolbar .user').removeClass('d-hidden');
    // jQuery('.toolbar .score').removeClass('d-hidden');
    this.displayHeader.emit(true);
    this.questions = QuestionsService.getQuestions();
    this.currQuestion = null;
    this.totalQuestions = this.questions.length;
    console.log(this.questions);
    this.ShowQuestion(this.questionIndex);
  }

  ShowQuestion(questionIndex:number):void{
    this.currQuestion = this.questions[questionIndex];
  }

  chooseOption(target): void{
    debugger;
    console.log(target.innerText);
    let chosenOption = target.innerText;
    let tempEle:HTMLElement = target;
    if(!this.isQuestionAnswered){
      if(this.currQuestion.correctanswer === chosenOption){
        console.log('true');
        tempEle.classList.add('correct');
        this.score = this.score+10;
        this.emitScore.emit(this.score.toString());
       }
       else{
         console.log('false');
         tempEle.classList.add('incorrect');
       }
       this.isQuestionAnswered = true;
    }


  }
  nextQuestion(target):void{
    debugger;
    // if(this.totalQuestions !== this.questionIndex+1){
    //   if(this.isQuestionAnswered === true){
    //     this.isQuestionAnswered = false;
    //     debugger;
    //     let optionsArray = target.parentElement.parentElement.getElementsByClassName('option');
    //     //remove the css from the options span
    //     //target.
    //     for(let option of optionsArray){
    //       option.classList.remove('correct');
    //       option.classList.remove('incorrect');
    //     }

    //     this.questionIndex = this.questionIndex+1;
    //     this.ShowQuestion(this.questionIndex);

    //     }
    //     else{
    //       console.log('Please answer the current question.')
    //     }
    // }
    // else{
      this.message = "You have finished the Quiz !"
      this.showOverlay = true;
      let temp = this.score;
      //this.score =  0;
//        function* delayedScoreDisplay(temp){
//           var i:number =0
//           for(i=0;i<=temp;i++){
//           //this.score = i;
//           //await this.sleep(1000);
          
//           yield i;
//         }

//       }
//       let dd = delayedScoreDisplay(temp);
//       function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 5000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: 'resolved'
// }

// const syncWait = ms => {
//     const end = Date.now() + ms
//     while (Date.now() < end) continue
// }
      // for(const item of dd){
      //   console.log(item);
      //  asyncCall();
      //   this.score = item;
        
      // }
      // while(delayedScoreDisplay(temp).next()!= undefined){
      //   this.score = delayedScoreDisplay(temp).next().value;
      // }
      

  }

  overlayOff(): void{
    debugger;
   this.showOverlay = false;
  }

  
  sleep(ms):any{
          return new Promise((resolve)=> setTimeout(resolve,ms));
   }

}
