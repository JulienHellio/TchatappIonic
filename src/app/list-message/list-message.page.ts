import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesService } from './messages.service';
import { Content } from 'ionic-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.page.html',
  styleUrls: ['./list-message.page.scss'],
})
export class ListMessagePage implements OnInit {
  @ViewChild('content') private content: any;

  public message : string;
  public messages : any = [];
  public refresher;

  constructor(public messagesService: MessagesService, public router: Router) { }
  
  ngOnInit() {
    this.scrollToBottomOnInit();
    this.load();
    this.isLogin();
  }

  public isLogin(){
    if(sessionStorage.getItem('token') == null){
      console.log('Pas connecté');
      this.router.navigate(['/home']);
    }
  }

  scrollToBottomOnInit() {
    this.content.scrollToBottom(2);
  }

  public load() {
    
    this.messagesService.getMessages()
      .subscribe(res => {
        console.log('Messages récupés!');
        this.messages = res.json();   
      }, (err) => {
        console.log('Erreur affichage', err);
      })
  }

  public send() {

    
    console.log("Register clicked for " + this.message);
    this.messagesService.sendMsg(this.message)
      .subscribe(res => {
        console.log('Message envoyé!');
        this.message = "";
        this.load();
        setTimeout(()=>{this.content.scrollToBottom();},200);
      }, (err) => {
        console.log('Send Error', err);
      })
    
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.load();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
