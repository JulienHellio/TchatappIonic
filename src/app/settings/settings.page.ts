import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    this.isLogin();
  }

  
  public logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  public isLogin(){
    if(sessionStorage.getItem('token') == null){
      console.log('Pas connecté');
      this.router.navigate(['/home']);
    }
  }

}
