import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute) {
      this.user = this.route.snapshot.data['user'];
     }

  ngOnInit() {
    
  }

}
