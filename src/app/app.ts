import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface Login {
  email: string;
  password: string;
  rememberMe: boolean;
}
@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  loginModel = signal<Login>({
    email: '',
    password: '',
    rememberMe: false,
  });
  loginForm = form(this.loginModel);
}
