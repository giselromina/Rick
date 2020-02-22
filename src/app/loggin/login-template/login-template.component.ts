import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent {

 errorMessage: string;

  constructor(private _authService: AuthServiceService,
              private _router: Router) { }

cancel(): void {
  this._router.navigate(['login']);
  // instalar el toast management
}
login(loginForm: NgForm): void {
if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.valid;
      const passWord = loginForm.form.value.valid;
      this._authService.login(userName, passWord);
}
}


}
