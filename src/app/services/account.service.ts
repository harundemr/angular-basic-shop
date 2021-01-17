import { Injectable } from '@angular/core';
import { User } from '../login/login';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "harun" && user.password == "123") {
      this.loggedIn = true;
      localStorage.setItem("isLoggedIn", user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLoggedIn");
  }
}
