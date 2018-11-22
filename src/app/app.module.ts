import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ProfileService } from './profile.service';
import { GithubComponent } from './github/github.component';
import { RepoDetailsComponent } from './profile/repo-details.component';
import { UserComponent } from './user/user.component';
import { DateCountPipe } from './date-count.pipe';
import {RoutingModule} from './routing/routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoDetailsComponent,
    GithubComponent,
    UserComponent,
    DateCountPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
