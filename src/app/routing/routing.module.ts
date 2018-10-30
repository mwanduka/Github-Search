import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router"
import {GithubComponent} from "../github/github.component";
import {UserComponent} from "../user/user.component"

// Defining routes
const routes:Routes = [
  {path:"github",component:GithubComponent},
  {path:"user",component:UserComponent},
  {path:"",redirectTo:"/github",pathMatch:"full"},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
