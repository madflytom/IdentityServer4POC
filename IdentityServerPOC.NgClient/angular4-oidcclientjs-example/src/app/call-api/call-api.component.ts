import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

import { AuthService } from '../services/auth.service'
import { User } from 'oidc-client';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {
  response: string;
  userVar: any;
  constructor(private http: Http, private authService: AuthService) {
    console.log("Local Storage set to " + localStorage.getItem('routeBack'));
   }
  
  ngOnInit() {
  // store route back to page after authorization happens

    console.log("in ngOnInit call-api");
    let header = new Headers({ 'Authorization': this.authService.getAuthorizationHeaderValue() });
    let options = new RequestOptions({ headers: header });

    this.http.get("https://localhost:44348/api/exampleAPI", options)
      .subscribe(response => this.response = response.text());

  }

}
