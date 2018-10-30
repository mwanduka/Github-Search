import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: Users;
  repo: Repo;
  newRepo: any;
  newUser: any;
  private userName: string;

  private accessToken = '5e495be23bd59967bbef12f525c335ea0cdf2d6f';


  constructor(private http: HttpClient) {

    this.user = new Users ();
    this.repo = new Repo();
    console.log('Service Works!');
    this.userName = 'mwanduka';

  }
  getUserInfo() {

    interface ApiResponse {
      avatar_url: string;
      public_repos: string;
      name: string;
      joined_on: Date;
      html_url: string;

    }

    const promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName +
      '?access_token=' + environment.apiUrl)

      .toPromise().then(response => {
        this.user.Repo_url = response.public_repos;
        this.user.fname = response.name;
        this.user.joined_on = response.joined_on;
        this.user.repos_url = response.html_url;
        console.log(this.user);

      },
      error => {

        reject(error);
      });
    } ));
    return promise;

  }

  getRepoInfo(username) {

    interface ApiResponse {

      name: string;
      repo_url: string;

    }

    const promise = new Promise(( (resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + environment.apiUrl)
      .toPromise()
      .then(response_repo => {
        this.newRepo = response_repo;
        // console.log(this.newRepo);

        resolve();
  },
  error => {
    reject(error);
  }
);
}));
return promise;
  }


 updateProfile(userName: string) {
   this.userName = userName;
 }
//   getInf(){
//   return this.http.get('https://api.github.com/users/' + this.userName + '?this.clienttId='
//  + this.clienttId + '&clientt_secret=' + this.clienttSecret)
//  }
}
