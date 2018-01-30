import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.completeAuthentication();
    console.log("Auth-callback getting hit");
    localStorage.setItem('routeBack','call-api');
    this.router.navigateByUrl(localStorage.getItem('routeBack'));
  }

}
