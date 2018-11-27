import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  // User's Info
  // Name
  getUser(name: string) {
    return this.http.get(`${this.url}/${name}`);
  }

  // Repo
  getRepo(name: string) {
    return this.http.get(`${this.url}/${name}/repos`);
  }

  // Gists
  getGist(name: string) {
    return this.http.get(`${this.url}/${name}/gists`);
  }

  // Followers
  getFollowers(name: string) {
    return this.http.get(`${this.url}/${name}/followers`);
  }

  // Following
  getFollowing(name: string) {
    return this.http.get(`${this.url}/${name}/following`);
  }

  // Events
  getEvents(name: string) {
    return this.http.get(`${this.url}/${name}/events`);
  }

  // Number of repos and gists
  searchUser(name: string) {
    return this.http.get(
      `https://api.github.com/search/users?q=${name}&per_page=10`
    );
  }
}
