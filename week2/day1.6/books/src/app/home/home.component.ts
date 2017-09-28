import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  user: User = new User();
  errorMessages: string[] = [];
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  login(user: User): void {
    this.auth.login(user)
      .then(() => this.router.navigate(['books']))
      .catch(response => this.handleErrors(response.json()));
  }

  register(event: Event, form: NgForm): void {
    console.log('registering ', this.user);
    event.preventDefault();

    this.auth.register(this.user)
      .then(() => this.router.navigate(['books']))
      .catch(response => {
        this.handleErrors(response.json());
      });
  }

  handleErrors(errors: string[] | Error): void {
    this.errorMessages = Array.isArray(errors) ? errors : [errors.message];
  }
}
