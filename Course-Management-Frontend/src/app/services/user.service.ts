import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private baseURL = 'https://coursemgtapp-ab00832e8359.herokuapp.com';
  private baseURL = 'http://localhost:5000';
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user: any) {
    return this.http.post(`${this.baseURL}/api/register`, user);
  }

  loginUser(user: any) {
    return this.http.post(`${this.baseURL}/api/login`, user);
  }

  logoutUser(){
    localStorage.removeItem("token");
    this.isLoggedIn$.next(false);
    this.router.navigate(['/home'])
  }

  isLoggedIn(){
    return !!localStorage.getItem("token")
  }

}
