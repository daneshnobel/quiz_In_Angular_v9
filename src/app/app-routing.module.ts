import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import{GameComponent} from './game/game.component';


const routes: Routes = [{path:'welcome',component:WelcomeComponent},
{path:'game',component:GameComponent},
{path:'',redirectTo:'welcome',  pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
