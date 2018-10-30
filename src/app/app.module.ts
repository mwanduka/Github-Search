import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileService } from './profile.service';
import { GithubComponent } from './github/github.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UserComponent } from './user/user.component';
import { DateCountPipe } from './date-count.pipe';
import {RoutingModule} from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    RepoDetailsComponent,
    UserComponent,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
