import { Injectable } from '@angular/core';
import {IUser} from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
        currentUser: IUser | null;
        redirectUrl: string;
  constructor() { }
  isLoggedIn() {
    return !!this.currentUser;
  }

  login(userName: string, passWord: string): void {

// here we would have the code from the back end when we log in

      this.currentUser = {
        id: 2,
        userNAme: userName,
        passWord,
        isAdmin: false

      };
  }

  logout(): void {
    this.currentUser = null;
  }
}
