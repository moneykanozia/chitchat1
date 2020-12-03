import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service'
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {Subject, zip,} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users:any;  
  startAt = new Subject();
  endAt = new Subject();
  uid:any;
  constructor(private auth:AuthenticationService,private router:Router,private afs:AngularFirestore,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
  //  this.auth.search_user().subscribe(users=>{
  
  //  this.users=users;
  //  });
  // this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
  //   let log_uid=params.get('log_uid');
  //   this.log_u_id=log_uid;
  //   });
  this.auth.getUserId().subscribe(id=>{
    this.uid=id;
  })
  }

  ionViewDidEnter(){
    zip(this.startAt, this.endAt)
    .pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value)=>{
        value[1] = value[0]==""? "":value[1];
         return this.afs.collection("users", ref => ref.orderBy('name').limit(4).
         startAt(value[0]).endAt(value[1])).snapshotChanges()
         .pipe(
           map(actions => 
            actions.map(a => {
             let data = a.payload.doc.data();
             let id = a.payload.doc.id;
             return {id,data};
            })
          ))
       })
    )
    .subscribe( (users)=>{
      console.log(users)
      this.users = users;
      console.log(this.users);
    }
    );
  }

  ionViewDidLeave(){

  }

  search_user(s_user:any){
    this.startAt.next(s_user);
    this.endAt.next(s_user+"\uf8ff");
  }

  chattingpage(another_uname,another_uid){
    this.auth.send_ids_on_chating(another_uname,another_uid,this.uid);
    this.router.navigate(['chating-page']);
  }
}
