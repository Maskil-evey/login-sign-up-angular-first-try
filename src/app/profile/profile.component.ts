import { UserData } from './../user-data';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInComponent } from '../home/sign-in/sign-in.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  getUserInfo: UserData = JSON.parse(localStorage.getItem('userInfo') || '[]')
  name!: string | undefined;
  email!: any;
  password!: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.name = this.getUserInfo.name
    this.email = this.getUserInfo.email
    this.password = this.getUserInfo.password
  }


}
