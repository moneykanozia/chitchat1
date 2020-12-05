import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {ChatroomService} from './chat_services/chatroom.service';
import { AuthenticationService } from '../_services/authentication.service'
import { Observable } from 'rxjs';
//import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-chating-page',
  templateUrl: './chating-page.page.html',
  styleUrls: ['./chating-page.page.scss'],
})
export class ChatingPagePage implements OnInit {

  another_uname:string;
  messages:Observable<any>;
  _messages:any[]=[];
  uid:any;
  another_uid:any;
  merged_id:string;
  temp:any[]=[];
  constructor(private auth:AuthenticationService,private activatedRoute:ActivatedRoute,private chtrmService:ChatroomService) { }

  ngOnInit() {
    this.auth.getReceiverName().subscribe(another_uname=>{
      this.another_uname=another_uname;
    });
    this.auth.getReceiverId().subscribe(another_uid=>{
      this.another_uid=another_uid;
    });
    this.auth.getUserId().subscribe(uid=>{
      this.uid=uid;
    });
    this.merge_ids(this.uid,this.another_uid);
    this.messages = this.chtrmService.getAllMessages(this.merged_id);
  }

  merge_ids(uid:string,another_uid:string){
    if(uid<another_uid){
      this.merged_id=uid+"__"+another_uid;
    }else{
      this.merged_id=another_uid+"__"+uid;
    }
    console.log(this.merged_id);
  }

  sendchat(messageText:any){
   const message = {
    attachmentUrl:"",
    CreatedAt: new Date(),
    messageText: messageText,
    receiverId: this.another_uid,
    senderId: this.uid,
    status: false
   };
   this.chtrmService.savemessage(this.merged_id, message);
  }
}
