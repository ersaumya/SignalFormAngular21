import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required, email, submit } from '@angular/forms/signals';

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
  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'Email is Required' });
    email(fieldPath.email, { message: 'Enter a valid email' });
    required(fieldPath.password, { message: 'Password is Required' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging in with', credentials);
    });
  }
}
