import { Component, OnInit,Input } from '@angular/core';
import { Repo } from '../repo';
import { ProfileService } from '../profile.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { getResponseURL } from '@angular/http/src/http_utils';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
  providers: [ProfileService]

})
export class RepoDetailsComponent implements OnInit {
  @Input() repos:Repo;

  constructor(private checkService: ProfileService) {}
  findprofile() {

   this.profileService.updateProfile(this.userName);

   this.profileService.getUserInfo();
   this.user = this.profileService.user;
  console.log(this.user);

   this.profileService.getRepoInfo(this.userName);
   this.userRepos = this.profileService.newRepo;
 }

  ngOnInit() {

    this.profileService.getRepoInfo(this.userName);
    this.repos = this.profileService.repo;
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
    // console.log(this.profileService.repo.name);
  }

}
