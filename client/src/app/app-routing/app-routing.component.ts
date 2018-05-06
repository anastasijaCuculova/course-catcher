import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})
export class AppRoutingComponent implements OnInit {


  loggedUser: String;

  constructor(private router: Router) {


  }

  ngOnInit() {
  //  this.getLoggedUser();
  }

 /* public getLoggedUser() {
    this.userService.user
      .subscribe(res => {
          console.log(res);
          this.loggedUser = res;
        }
      )


  }

  logout() {
    this.userService.logout()
      .subscribe(
        data => {
          this.router.navigate(["/login"]);
          window.location.reload();
        },
        error => {
        });
  }*/


}
