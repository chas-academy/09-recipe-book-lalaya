import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log ('Data service conneted...');
   }

   getPost() {
     return this.http.get('https://api.edamam.com/search')
      .map(res => res.json ());

   }
}


