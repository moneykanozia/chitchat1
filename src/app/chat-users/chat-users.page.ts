import { Component, OnInit,ViewChild} from '@angular/core';
import {ChatDetailService} from '../chat-detail.service';
import {Router} from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { AuthenticationService} from '../_services/authentication.service';
@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.page.html',
  styleUrls: ['./chat-users.page.scss'],
})
export class ChatUsersPage implements OnInit {  
  data:any[];

  constructor(private chatservice:ChatDetailService,private router:Router,private auth: AuthenticationService) { }
  
  ngOnInit() {
   this.data=this.chatservice.getdata();
  }
  
  onclick(name,url){
   // this.auth.message();
    this.router.navigate(["chatting",name,url]);

  }
}
