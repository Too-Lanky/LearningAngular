import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {
  }

  ngOnInit() {
    this.messageForm = this.formBuilder.group(
      {
        name: '',
        body: ''
      }
    )
  }

  saveMessage(message){
    alert('Thanks for posting on my wall '+ message.name);
    console.log(message.name);
    this.messageService.saveMessage(message);
  }
}