import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public countryList: Array<any> = [
    { name: "Australie", code: "AU" },
    { name: "Brésil", code: "BR" },
    { name: "Canada", code: "CA" },
    { name: "Chine", code: "CH" },
    { name: "Allemagne", code: "DE" },
    { name: "Danemark", code: "DK" },
    { name: "Espagne", code: "ES" },
    { name: "Finlande", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Grande-Bretagne", code: "GB" },
    { name: "Irlande", code: "IE" },
    { name: "Iran", code: "IR" },
    { name: "Norvège", code: "NO" },
    { name: "Pays-Bas", code: "NL" },
    { name: "Nouvelle-Zélande", code: "NZ" },
    { name: "Turquie", code: "TR" },
    { name: "Etat-Unis", code: "US" }
  ]
  public userList: Array<any> = [];
  public countryChoice: Array<string> = ['FR'];
  public genderChoice: string = "female";
  constructor(private http: HttpClient) {


    this.loadData(false, null);
  }



  private loadData(addBeforeContent: boolean, even) {

    let url = "https://randomuser.me/api";
    let requestParams = new HttpParams()
      .set('results', '20')
      .set('gender', this.genderChoice)
      //.join(",") joint le contenu du tableau en une chaine de caractére en ajoutant une virgule entre change
      .set('nat', this.countryChoice.join(","));
    console.log(requestParams);
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
  public refreshData(even) {
    this.loadData(true, even);
  }
}
