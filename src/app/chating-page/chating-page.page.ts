import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {ChatroomService} from './chat_services/chatroom.service';
import { AuthenticationService } from '../_services/authentication.service'
//import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-chating-page',
  templateUrl: './chating-page.page.html',
  styleUrls: ['./chating-page.page.scss'],
})
export class ChatingPagePage implements OnInit {

  another_uname:string;
  messages:any[]=[];
  _messages:any[]=[];
  uid:any;
  another_uid:any;
  merged_id:string;
  temp:any[]=[];
  constructor(private auth:AuthenticationService,private activatedRoute:ActivatedRoute,private chtrmService:ChatroomService) { }

  ngOnInit() {

  //   this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  //   let another_uname=params.get('another_uname');
  //   this.another_u_name=another_uname;  
  //   let another_uid=params.get('another_uid');
  //   this.another_u_id=another_uid;
  //   let log_uid=params.get('log_uid');
  //   this.log_u_id=log_uid;  
  // });
    this.auth.getReceiverName().subscribe(another_uname=>{
      this.another_uname=another_uname;
    });
    this.auth.getReceiverId().subscribe(another_uid=>{
      this.another_uid=another_uid;
    });
    this.auth.getUserId().subscribe(uid=>{
      this.uid=uid;
    });
    // setTimeout(()=>{
    //   // this.merge_ids(this.uid,this.another_uid);
    //   // this.getAllMessages();
    // }, 10000);
    this.merge_ids(this.uid,this.another_uid);
    this.getAllMessages();
  }

  merge_ids(uid:string,another_uid:string){
    if(uid<another_uid){
      this.merged_id=uid+"__"+another_uid;
    }else{
      this.merged_id=another_uid+"__"+uid;
    }
    console.log(this.merged_id);
  }
  getAllMessages(){
    this._messages=this.chtrmService.getAllMessages(this.merged_id);
    this.messages=this._messages;
    //console.log(this.messages);
    // for(let j of this.message){
    //   console.log(j);
    //   // this.messages.push(_messages[i]);
    //   // console.log(this.messages);
    // }
  }
  sendchat(messageText:any){
    this.temp=this.messages;
    this.messages=[];
   for(var k in this.temp){
    this.messages.push(this.temp[k]);
   }
   //this.messages=this._messages; 
 //  this.messages.push(messageText);
   //console.log(this.messages);
   const message = {
    attachmentUrl:"",
    CreatedAt: new Date(),
    messageText: messageText,
    receiverId: this.another_uid,
    senderId: this.uid,
    status: false
   };
   this.messages.push(message);
   this.chtrmService.savemessage(this.merged_id, message);
  }
}
