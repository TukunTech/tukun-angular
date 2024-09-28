import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: 'clinic' | 'elder' | null = null;

  login(role: 'clinic' | 'elder') {
    this.userRole = role;
  }

  logout() {
    this.userRole = null;
  }

  getUserRole() {
    return this.userRole;
  }
}
