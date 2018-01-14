import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import User from '../../models/user';

@Injectable()
export class AuthService {

  readonly API_URL = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/users/${username}`);
  }

}
