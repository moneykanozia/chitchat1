import { Message } from '../../_classes/User';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
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
