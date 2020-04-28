import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import{Router} from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }
  userName:string = null;
  @Output() getUserName: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
  }

  Enter(): void{
    debugger;
    sessionStorage["name"] = this.userName;
    this.getUserName.emit(this.userName);
    this.router.navigate(['/game'])
  }

}
