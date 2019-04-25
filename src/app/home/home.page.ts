import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  public username: string;
  public password: string;

  constructor(public loginService: LoginService, public router: Router) {

  }


  public login() {
    console.log("login clicked for " + this.username);
    this.loginService.doLogin(this.username, this.password)
      .subscribe(res => {
        sessionStorage.setItem('token', res.json().token);
        console.log('connexion réussie');
        this.router.navigate(['/list-message']);
      }, (err) => {
        console.log('Error login', err);
      })
  }
}
