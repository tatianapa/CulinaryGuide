import { Component, OnInit } from '@angular/core';
import {TagListComponent} from '../tag-list/tag-list.component';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  model: any = {};
  tiles = [
    {text: '',
      cols: 1, color: 'transparent'},
    {text: 'Welcome to my Jerusalem Culinary guide - explore the best cafes and restaurants in Jerusalem',
      cols: 10,  color: 'linen'},
    {text: '',
      cols: 1,  color: 'transparent'}



  ];

  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('logged in succesfully');
    }, error =>{
      this.alertify.error("Username or password is incorrect! Try again");
    },
    () => {
      this.router.navigate(['/user']);
    }  );
  }

  loggedIn(){
    return this.authService.loggedIn();
  }


}
