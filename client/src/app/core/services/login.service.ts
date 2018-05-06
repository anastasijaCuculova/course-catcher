import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Cookie} from 'ng2-cookies';
import {Headers} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private _router: Router,
              private _http: Http) {
  }

  obtainAccessToken(loginData) {
    let params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'fooClientIdPassword');
    let headers: Headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa("fooClientIdPassword:secret")
    });
    let options = new RequestOptions({headers: headers});

    this._http.post('http://localhost:8080/spring-security-oauth-server/oauth/token', params.toString(), options)
      .map(res => res.json())
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials'));
  }

  checkCredentials() {
    if (!Cookie.check('access_token')) {
      this._router.navigate(['/login']);
    }
  }

  /*  getResource(resourceUrl): Observable<Foo> {
      let headers = new Headers({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Bearer ' + Cookie.get('access_token')
      });
      let options = new RequestOptions({headers: headers});
      return this._http.get(resourceUrl, options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }*/

  saveToken(token) {
    let expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    this._router.navigate(['/']);
  }

  logout() {
    Cookie.delete('access_token');
    this._router.navigate(['/login']);
  }

}
