import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentUser;
  userDetails;
  userRepos;
  userFollowers;
  userFollowing;
  repoDemo;
  userGists;
  gistTemp;

  constructor(private route: ActivatedRoute, private _http: ApiService) { }

  ngOnInit() {
    // Get parameter from the URL
    this.route.params.subscribe(routeParams => {
      this.currentUser = routeParams.user;
      this.getUser();
      this.getRepo();
      this.getGist();
    });
  }

  // User's Details
  getUser() {
    this._http.getUser(this.currentUser).subscribe(
      data => {
        this.userDetails = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  // Repos
  getRepo() {
    this._http.getRepo(this.currentUser).subscribe(
      data => {
        this.repoDemo = data;
        this.userRepos = this.repoDemo.slice(0, 5);
      },
      error => {
        console.log(error);
      }
    );
  }
  // Followers
  getFollowers() {
    this._http.getFollowers(this.currentUser).subscribe(
      data => {
        this.userFollowers = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  // Following
  getFollowing() {
    this._http.getFollowing(this.currentUser).subscribe(
      data => {
        this.userFollowing = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  // Gists
  getGist() {
    this._http.getGist(this.currentUser).subscribe(
      data => {
        this.gistTemp = data;
        this.userGists = this.gistTemp.slice(0, 5);
      },
      error => {
        console.log(error);
      }
    );
  }
  // Pagination
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.userRepos = this.repoDemo.slice(startItem, endItem);
  }
  gistChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.userGists = this.gistTemp.slice(startItem, endItem);
}

}
