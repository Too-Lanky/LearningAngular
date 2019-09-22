import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class MessageService {
  public messages;

  constructor(
  ) { 
      if(localStorage.getItem("messages")){
        this.messages = JSON.parse(localStorage.getItem("messages"));
    }else
        this.messages = [];
  }

  saveMessage(message){
    this.messages.push(message);
    localStorage.setItem("messages", JSON.stringify(this.messages));
  }

  getMessages(){
    return this.messages;
  }
}