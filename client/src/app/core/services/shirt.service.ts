

import {Shirt} from "../models/Shirt";
import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class ShirtService {

  constructor(private http: Http) {

  }

  getAll(): Observable<Shirt[]> {
    return this.http.get('/api/shirts')
      .map((response : Response) => <Shirt[]> response.json())
  }

/*

  createWin(win_name: string, win_desc: string): Observable<Win> {
    return this.http.post('/api/mywinboard', {
      win_name: win_name,
      win_desc: win_desc
    }).map(this.toJson)
      .catch(this.onError);
  }
  deleteWin(id)
  {
    return this.http.get("/api/mywinboard/"+id);
  }*/

  private toJson = res => res.json() || {};

  private onError(error: Response | any) {
    return Observable.throw(error);
  }
}
