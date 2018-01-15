import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import User from '../../models/user';


@Injectable()
export class AuthService {

  readonly API_URL = 'https://api.github.com';
  public ActiveUser: User = null;

  constructor(private http: HttpClient) {
  }

  getUser(username: string) {
    this.http.get<User>(`${this.API_URL}/users/${username}`).subscribe((user: User) => {
        console.log(user);
        this.ActiveUser = user;
        user = null;
      },
      (exception: HttpErrorResponse) => {
        this.ActiveUser = null;
        if (exception.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  }

}
