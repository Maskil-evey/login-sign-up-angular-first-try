import { UserData } from './../user-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  userModel: UserData = {};
  userDataArray: UserData[] = [];
  role = 'register';

  ngOnInit(): void {
    this.userDataArray = JSON.parse(localStorage.getItem('userData') || '[]');
  }

  onSubmit() {
    let userData: UserData = {
      name: this.userModel.name,
      email: this.userModel.email,
      password: this.userModel.password,
      agreeTerms: this.userModel.agreeTerms
    }
    this.userDataArray.push(userData);
    localStorage.setItem('userData', JSON.stringify(this.userDataArray));
    this.role = 'success';
  }
}
