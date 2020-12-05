import {Subscription} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {U_profile} from '../_classes/User';
import { AuthenticationService } from '../_services/authentication.service'
import {AngularFireStorage} from '@angular/fire/storage';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
 uid:string;
 email:string;
 subs = new Subscription();
 userDoc:AngularFirestoreDocument<U_profile>; 
 constructor(private afstorage:AngularFireStorage,private activatedroute:ActivatedRoute,private router:Router,private afs:AngularFirestore,private auth:AuthenticationService) { }

  ngOnInit() {
    // this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
    //   let u_id=params.get('uid');
    //   this.u_id=u_id;
    //   let u_email=params.get('email');
    //   this._email=u_email;
    // });
    console.log("user profile loaded");    
    this.auth.uid.subscribe(id=>{
          console.log(id);
          this.uid=id;
        });
         this.subs.add(this.auth.email.subscribe(email=>{
          console.log(email);
          this.email=email;
        }));

  }
  ionViewDidLeave(){
    this.subs.unsubscribe();
  }

  profile_submit(name,dob,p_n,photo,status){
      console.log(name,dob,p_n,status)
      this.userDoc = this.afs.doc<U_profile>('users/'+this.uid);
      const updateUser= {
        name: name,
        email:this.email,
        dob: dob,
        p_n:p_n,
        photo:photo,
        status:status,
      }
      this.userDoc.set(updateUser);
      alert("profile detailed Successful!");
      this.router.navigate(['login']);
  }

  uploadimage(photo){
    var storageRef = this.afstorage.upload('/chatimages', {});

  }

}
