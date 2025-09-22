import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_URLS } from '../constants/api-urls/api-urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'token';

  private _isLoggedIn = signal<boolean>(this.hasToken());

  constructor(private httpClient: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(API_URLS.login, { username, password }).pipe(
      tap((res: any) => {
        if (res && res.token) {
          localStorage.setItem(this.tokenKey, res.token);
          this._isLoggedIn.set(true);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    const hasToken = this.hasToken();
    this._isLoggedIn.set(hasToken);
    return hasToken;
  }

  get isLoggedInSignal() {
    return this._isLoggedIn.asReadonly();
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this._isLoggedIn.set(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
