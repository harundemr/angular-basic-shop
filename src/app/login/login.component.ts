import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertifyService:AlertifyService
  ) { }
  model: User = new User();
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl(this.model.userName, [Validators.required]),
      password: new FormControl(this.model.password, [Validators.required]),
    });
  }

  login(){
    if (this.loginForm!.valid) {
      this.model = Object.assign({}, this.loginForm!.value)
    }

    if(this.accountService.login(this.model)){
      this.alertifyService.success("Giriş başarılı :)");
    }else{
      this.alertifyService.warning("Kullanıcı adı veya parola hatalı!");
    }
  }
}
