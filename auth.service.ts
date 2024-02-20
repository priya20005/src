import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  signUp(username: string, password: string): void {
    console.log('user ${username} signed up successfully.');
  }
  logIn(username: string, password: string): void {
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      console.log('user ${username} logged in successfully');
    } else {
      console.error('invalid username or password.');
    }
  }
  logOut(): void {
    this.isAuthenticated = false;
    console.log('user logged out successfully');
  }
  isloggedIn(): boolean {
    return this.isAuthenticated;
  }
}
