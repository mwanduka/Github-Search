import { Component, OnInit, Input } from '@angular/core';
import {  ProfileService } from './../profile.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { getResponseURL } from '@angular/http/src/http_utils';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ProfileService]
})
export class UserComponent implements OnInit {
  user: User;
  repos: Repo;
  userRepos: any;
  userName: string;

  constructor(private profileService: ProfileService) {
  }
 findProfile() {

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
