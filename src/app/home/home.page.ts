import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userList: Array<any> = [];

  constructor(private http: HttpClient) {


    this.loadData(false, null);
  }



  private loadData(addBeforeContent: boolean, even) {

    let url = "https://randomuser.me/api";
    let requestParams = new HttpParams()
      .set('results', '20')
      .set('gender', 'female')
      .set('nat', 'fr,es,ch');
    let req = this.http.get(url, { params: requestParams });
    req.subscribe((data: any) => {
      console.log(data);

      if (addBeforeContent) {
        this.userList = data.results.concat(this.userList);
      } else {
        this.userList = this.userList.concat(data.results);
      }
      if (even) {
        even.target.complete();
      }
    });
  }
  //Methode qui appel la methode load data pour rajouter
  public loadMoreData(even) {
    this.loadData(false, even);
  }
}
