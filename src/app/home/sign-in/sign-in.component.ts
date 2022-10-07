import { UserData } from '../../user-data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = '';
  password = null;
  getUserValidation!: UserData;
  isAuthenticated: boolean = false;

  constructor(private routerLink:Router){}
  getUserData: UserData[] = JSON.parse(localStorage.getItem('userData') ||'[]');
  errorMessage = '';

  ngOnInit(): void {
  }

  login() {
    for (let i = 0; i < this.getUserData.length; i++) {
      if (this.email == this.getUserData[i].email && this.password == this.getUserData[i].password) {
        this.getUserValidation = this.getUserData[i];
        this.isAuthenticated = true;
        localStorage.setItem('userInfo',JSON.stringify(this.getUserValidation))

      }
    }

    if (this.isAuthenticated) {
      this.routerLink.navigate(['/profile'],{});
    }
    else {

      setTimeout(() => {
        this.errorMessage = 'Email or Password Incorrect..Sign-Up if you are new user';

      }, 1000);
      setTimeout(() => {
        this.errorMessage = '';
      }, 3200);
    }
    console.log(this.getUserValidation);
  }



}


