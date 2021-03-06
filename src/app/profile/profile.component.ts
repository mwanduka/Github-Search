import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { ApiService } from './../api.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Details:any[];
  profile: any;
  user: any;
  repos: any;
  events: any;
  private userId: string;
  followers: any;
  following: any;
  gists: any;
  repoDemo: any;
  gistTemp: any;


  constructor(public auth: AuthService, private _http: ApiService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.userId = this.profile.nickname;
      this._http.getUser(this.userId).subscribe(
        data => {
          this.user = data;
          this.getDetails();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.userId = this.profile.nickname;
        this._http.getUser(this.userId).subscribe(
          data => {
            this.user = data;
            this.getDetails();
          },
          error => {
            console.log(error);
          }
        );
      });
    }
  }
  // Repos
  getRepo() {
    this._http.getRepo(this.userId).subscribe(
      data => {
        this.repoDemo = data;
        this.repos = this.repoDemo.slice(0, 10);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Gists
  getGist() {
    this._http.getGist(this.userId).subscribe(
      data => {
        this.gistTemp = data;
        this.gists = this.gistTemp.slice(0, 10);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Events
  getEvents() {
    this._http.getEvents(this.userId).subscribe(
      data => {
        this.events = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  // Followers
  getFollowers() {
    this._http.getFollowers(this.userId).subscribe(
      data => {
        this.followers = data;
        // console.log(this.followers);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Following
  getFollowing() {
    this._http.getFollowing(this.userId).subscribe(
      data => {
        this.following = data;
        // console.log(this.following);
      },
      error => {
        console.log(error);
      }
    );
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.repos = this.repoDemo.slice(startItem, endItem);
  }
  gistChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.gists = this.gistTemp.slice(startItem, endItem);
  }
}
