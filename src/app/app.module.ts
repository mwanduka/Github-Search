import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth/auth.service';
import { ApiService } from './api.service';
import { SearchBoxComponent } from './ search/search-box/search-box.component';
import { SearchComponent } from './ search/search/search.component';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgProgressModule } from '@ngx-progressbar/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    ProfileComponent,
    SearchBoxComponent,
    SearchComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    TabsModule.forRoot(),
    Ng2CompleterModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
