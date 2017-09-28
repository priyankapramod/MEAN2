import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthService {
  base = '/api/auth';

  constructor(
    private http: Http,
    private cookieService: CookieService,
  ) {}

  login(user: User): Promise<User> {
    return this.http.post(`${ this.base }/login`, user)
      .map(response => response.json())
      .toPromise();
  }

  register(user: User): Promise<User> {
    return this.http.post(`${ this.base }/register`, user)
      .map(response => response.json())
      .toPromise();
  }

  logout(): Promise<User> {
    return this.http.delete(`${ this.base }/logout`)
      .map(response => response.json())
      .toPromise();
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return Boolean(session && expired && userID && expired > Date.now());
  }
}
