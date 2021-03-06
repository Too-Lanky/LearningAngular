import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  public messages;

  constructor(
    private messageService: MessageService,
  ) { 
    
  }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

}