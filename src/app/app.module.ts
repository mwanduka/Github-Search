import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
