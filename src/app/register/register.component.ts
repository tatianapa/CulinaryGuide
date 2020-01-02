import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../_models/user';
import {  FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //@Input() valuesFromHome: any;
  //@Output() cancelRegister = new EventEmitter();

  user: User;
  registerForm: FormGroup;
  // bsConfig: Partial<NgbDatepickerConfig>;
  // bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, private alertify: AlertifyService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    // this.bsConfig = {
    //   containerClass: 'theme-dark-blue'
    // },
    this.createRegisterForm();
  }
  register() {
    if(this.registerForm.valid){
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(()=>{
        this.alertify.success('Registration successfull!');
      }, error => {
        this.alertify.error(error);
      }, ()=>{
        this.authService.login(this.user).subscribe(()=>{
          this.router.navigate(['/contact']);
        });
      });
    }
  }
  createRegisterForm(){
    this.registerForm = this.fb.group({
      gender: ['male'],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.maxLength(10)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }
  passwordMatchValidator(g: FormGroup){
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }
  // cancel(){
  //   this.cancelRegister.emit(false);

  // }

}
