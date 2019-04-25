import { Component, ViewChild } from '@angular/core';
import { RegisterService } from './register.service';
import { NavController } from 'ionic-angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage{
  @ViewChild('Nav') nav: NavController
  
  public username: string;
  public password: string;

  constructor(public registerService: RegisterService, public router: Router) {

  }

  public register() {
    console.log("Register clicked for " + this.username);
    this.registerService.doRegister(this.username, this.password)
      .subscribe(res => {
        console.log('Création réussi');
        this.router.navigate(['/home']);
      }, (err) => {
        console.log('Error register', err);
      })
    
  }

}
