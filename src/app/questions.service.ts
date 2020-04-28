import { Injectable } from '@angular/core';
import {Question} from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

 static getQuestions():Question[]{
    return  [
      {
        "q":"Which is the largest country in the world by population?",
        "option1":"India",
        "option2":"USA",
        "option3":"China",
        "option4":"Russia",
        "correctanswer":"China"

      },
      {
        "q":"When did the second world war end?",
        "option1":"1945",
        "option2":"1939",
        "option3":"1944",
        "option4":"1942",
        "correctanswer":"1945"
      },
      {
        "q":"Which was the first country to issue paper currency?",
        "option1":"USA",
        "option2":"France",
        "option3":"Italy",
        "option4":"China",
        "correctanswer":"China"
      },
      {
        "q":"Which city hosted the 1996 Summer Olympics?",
        "option1":"Atlanta",
        "option2":"Sydney",
        "option3":"Athens",
        "option4":"Beijing",
        "correctanswer":"Atlanta"
      },
      {
        "q":"Who invented telephone?",
        "option1":"Albert Einstein Marie Curie",
        "option2":"Alexander Graham Bell",
        "option3":"Isaac Newton",
        "option4":"Marie Curie",
        "correctanswer":"Alexander Graham Bell"
      }

    ]



  }
}
