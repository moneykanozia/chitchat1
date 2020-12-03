import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {User,U_profile} from '../_classes/User';
import {Router} from '@angular/router';
import {BehaviorSubject,Subject} from 'rxjs';
import { localData } from '../shared/localData/localData';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  currentUser: any;
   userDoc: AngularFirestoreDocument<User>;
   userCol: AngularFirestoreCollection;
   user:Observable<any[]>;
  //user: Observable<User>;
  u_id:string;
  uid = new BehaviorSubject('');
 // uuid = new BehaviorSubject('');
  // uuuid = new BehaviorSubject('money');
  // mmmid = new Subject();
  email = new BehaviorSubject('');
  another_uid = new BehaviorSubject('');
  another_uname = new BehaviorSubject('');
  constructor(private router:Router,private afAuth: AngularFireAuth, private afDb: AngularFireDatabase, private afs:AngularFirestore) {
   }

   setReceiverName(name: string){
    localStorage.setItem(localData.RECEIVER_USER.NAME, name);
    this.another_uname.next(name);
   }

    getReceiverName(){
      return this.another_uname.asObservable();
    }
   
   setUserId(uId: string){
    localStorage.setItem(localData.CURRENT_USER.ID, uId);
    this.uid.next(uId);
   }

    getUserId(){
      return this.uid.asObservable();
    }

   setReceiverId(receiverId: string){
     localStorage.setItem(localData.RECEIVER_USER.ID, receiverId);
     this.another_uid.next(receiverId);
   }
   getReceiverId(){
    return this.another_uid.asObservable();
   }
  register(email: string, pass: string){
    console.log(email,pass);
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then(res=>{
    alert("Registration Successful!");
    this.u_id=res.user.uid;
    // this.id.next(res.user.uid);
    this.setUserId(res.user.uid)
     setInterval(()=>{
      this.email.next(email);
    }, 3000)
    
    this.router.navigate(['user-profile']);
    }, err=>{
      alert(err);
      console.log (err);
    }); 
  }

  login(email: string, pass: string){

    this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(res=>{
      // this.id.next(res.user.uid);
      console.log(res);
      this.setUserId(res.user.uid);
      this.router.navigate(['users']);
    }, err=>{
      console.log(err);
      alert("Error Occured While Login");
    })
  }
  
  // u_data(){
    
  // }

//  search_user(s_user:string){
//   this.userCol=this.afs.collection('users');
//   this.user=this.userCol.snapshotChanges().pipe(
//   map(actions => actions.map(a => {
//     const data = a.payload.doc.data();
//     const id = a.payload.doc.id;
//     return { id,...data };
//   }))
//   );
//   return this.user;
// }

  send_ids_on_chating(another_uname,another_uid,uid){
    
    this.setReceiverName(another_uname)
    // this.another_uid.next(another_uid);
    this.setReceiverId(another_uid);
    // this.id.next(uid);
    this.setUserId(uid)
  }
}
