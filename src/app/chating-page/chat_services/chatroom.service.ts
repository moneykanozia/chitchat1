import { Message } from '../../_classes/User';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { localData } from 'src/app/shared/localData/localData';
@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
  // chatrmdoc:AngularFirestoreDocument;
  messages:any[]=[];
  constructor(private afs:AngularFirestore) { }
  ngOnInit(){
  }
  savemessage(chat_id:string, message: Message){
   this.afs.collection("chats").doc(chat_id).collection("messages").add(message).then(res =>{
     console.log(res);
     const docRef = this.afs.collection("chat_meta").doc(localStorage.getItem(localData.CURRENT_USER.ID)).collection("messages").doc(chat_id);
     return docRef.update({
      last_message: message,
      last_message_time:  new Date(),
      last_message_sender_id: localStorage.getItem(localData.CURRENT_USER.ID), 
      seen_by_other_user: false,
      other_user_id: localStorage.getItem(localData.RECEIVER_USER.ID),
      other_user_name: localStorage.getItem(localData.RECEIVER_USER.NAME),
      other_user_thumbimage:"",
      chat_page_active: 1,
      unread_count: 0
    });
   },
   err=>{
     console.log(err);
   });
  }
  
  
  getAllMessages(chat_id){
    return this.afs.collection("chats").doc(chat_id).collection("messages", ref=> ref.orderBy('CreatedAt')).valueChanges()
    // .subscribe(res=>{
    //   console.log(res)
    //   for(var i in res){
    //     this.messages.push(res[i]);
    //   }      
    // });
  }
}
