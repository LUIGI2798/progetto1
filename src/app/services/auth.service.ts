import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
import { IUser } from '../interfaces/i-user';
import { ILoading } from './../interfaces/i-loading';
import { Router } from '@angular/router';
import { IAccess } from '../interfaces/i-access';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean | undefined;
  constructor(private http: HttpClient, private router: Router) {}

  jwtHelper = new JwtHelperService();
  registerUrl: string = environment.registerUrl;
  loginUrl: string = environment.loadingUrl;
  authSubject$ = new BehaviorSubject<IAccess | null>(null);
  user$ = this.authSubject$.asObservable().pipe(
    tap((access) => this.isLoggedIn == !!access),
    map((access) => access?.user)
  );
  isLoggedIn$ = this.authSubject$;
  autoLogoutTimer: any;

  register(newUser: Partial<IUser>) {
    return this.http.post<IAccess>(this.registerUrl, newUser);
  }

  login(auth: ILoading) {
    return this.http.post<IAccess>(this.loadingnUrl, auth).pipe(
      tap((access) => {
        this.authSubject$.next(access);
        localStorage.setItem('accesData', JSON.stringify(access));
        const expDate = this.jwtHelper.getTokenExpirationDate(
          access.accesstoken
        );
        if (!expDate) return;
        this.autoLogout(expDate);
      })
    );
  }
  autoLogout(expDate: Date) {
    const exp = expDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, exp);
  }
  logout() {
    this.authSubject$.next(null);
    localStorage.removeItem('accesData');
    this.router.navigate(['/auth/loading']);
  }
}
