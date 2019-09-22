import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageService } from './message-form/message.service';
import { MessageComponent } from './message-form/message.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, 
  RouterModule.forRoot(
    [
        {path: '', redirectTo: 'home', pathMatch: 'full' },
        {path: 'message', component: MessageFormComponent},
        {path: 'home', component: MessageComponent}
    ]
  ),
   ],
  declarations: [ AppComponent, NavBarComponent, MessageFormComponent, MessageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ MessageService, CookieService ],
})

export class AppModule { }
