import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, 
    private alertify: AlertifyService){}
  canActivate():  boolean {
    if (this.authService.loggedIn()){
      return true;
    }
    this.alertify.error('Unauthorized: please login to see this page');
    this.router.navigate(['/home']);
    return false;
  }
}
