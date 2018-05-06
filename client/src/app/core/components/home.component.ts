import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: LoginService) {
  }

  ngOnInit(): void {
    this.service.checkCredentials();
  }

  logout() {
    this.service.logout();
  }
}
