import {Component} from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginData = {username: "", password: ""};

  constructor(private service: LoginService) {
  }

  login() {
    this.service.obtainAccessToken(this.loginData);
  }
}
