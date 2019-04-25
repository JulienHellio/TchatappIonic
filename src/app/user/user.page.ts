import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public users : any = [];

  constructor(public listService: ListService, public router: Router) { }

  ngOnInit() {
    this.load();
    this.isLogin();
  }

  public isLogin(){
    if(sessionStorage.getItem('token') == null){
      console.log('Pas connecté');
      this.router.navigate(['/home']);
    }
  }

  public load() {

    this.listService.getUsers()
      .subscribe(res => {
        console.log('Users récupés!');
        this.users = res.json();   
      }, (err) => {
        console.log('Erreur affichage', err);
      })
  }
}
