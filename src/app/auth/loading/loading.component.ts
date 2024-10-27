import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ILoading } from '../../interfaces/i-loading';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  form: ILoading = {
    email: '',
    password: '',
  };

  login() {
    this.authSvc.login(this.form).subscribe({
      next: (resp) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert(error.error);
      },
    });
  }
  submit(form: NgForm) {
    form.reset();
  }
}
