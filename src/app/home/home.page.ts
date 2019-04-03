import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userList: Array<any> = [];

  constructor(private http: HttpClient) {

    let url = "http://randomuser.me/api?results=20";

    let req = this.http.get(url);

    req.subscribe(
      (data: any) => {
        console.log(data);
        this.userList = data.results;
      }
    )
  }

}
