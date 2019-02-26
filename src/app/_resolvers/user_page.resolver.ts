import { Injectable } from '@angular/core';
import {User} from '../_models/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

 
@Injectable()

export class UserPageResolver implements Resolve<User>{
    id: number;
    constructor(private userService: UserService, private authService: AuthService,
    private router: Router, private alertify: AlertifyService){
         this.id = this.authService.decodedToken.nameid;
    }
        resolve(route: ActivatedRouteSnapshot): Observable<User>{
            
            return this.userService.getUser(this.id).pipe(
                catchError(error => {
                    this.alertify.error('Problem retieving your data');
                    this.router.navigate(['/about']);
                    return Observable.of(null);
                }));
     
        }
}