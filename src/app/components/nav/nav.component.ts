import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  utente!: IUser | null;
  constructor(private authSrv: AuthService) {}
  ngOnInit() {
    this.authSrv.user$;
  }

  logout() {
    this.authSrv.logout();
  }
}
