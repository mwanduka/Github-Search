import { NgModule } from '@angular/core';
import {AppComponent} from './../app.component'
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {GithubComponent} from "../github/github.component";
import {RepoDetailsComponent} from "../profile/repo-details.component";
import {UserComponent} from "../user/user.component"

// Defining routes
const routes:Routes = [
  {path:'', component: GithubComponent},
 {path: 'user/repo?', component: RepoDetailsComponent},
 {path: 'user/profile?', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }