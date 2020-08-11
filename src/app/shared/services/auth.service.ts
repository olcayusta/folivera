import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('USER')));
    this.user = this.userSubject.asObservable();
    const logged = JSON.parse(localStorage.getItem('USER'));
    this.isLoggedIn = logged;
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  getAccount() {
    const logged = JSON.parse(localStorage.getItem('USER'));
    this.isLoggedIn = logged;
    return logged;
  }

  register(email: string, password: string, displayName: string, avatarUrl: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, {
      email, password, displayName, avatarUrl
    });
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users/login`, {
      email, password
    })
      .pipe(tap(x => {
        const user = {
          id: 1,
          email: 'olcayusta02@gmail.com',
          displayName: 'Olcay Usta',
          avatarUrl: 'https://a.rsg.sc/s/GTAVCAnniversary/n/GTAVC62.png'
        };
        localStorage.setItem('USER', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
        // this.router.navigateByUrl('/');
      }));
  }

  login2(email: string, password: string) {

  }

  logout() {
    localStorage.clear();
    this.userSubject.next(null);
    window.location.reload();
    // this.router.navigateByUrl('/login');
  }
}
