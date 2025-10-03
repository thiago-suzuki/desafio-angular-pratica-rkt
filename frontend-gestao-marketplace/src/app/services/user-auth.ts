import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  getUserToken() {
    return localStorage.getItem('marketplace-token') || '';
  }

  setUserToken(token: string) {
    localStorage.setItem('marketplace-token', token);
  }
}
