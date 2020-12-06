import {Subscription} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {U_profile} from '../_classes/User';
import { AuthenticationService } from '../_services/authentication.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldValidateServiceService } from '../shared/services/field-validate-service.service';

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
 profileForm: FormGroup
 dpUrl:string;
 constructor(
  private afStorage:AngularFireStorage,
  private activatedroute:ActivatedRoute,
  private router:Router,
  private afs:AngularFirestore,
  private auth:AuthenticationService,
  private formBuilder: FormBuilder,
  private validationService: FieldValidateServiceService
  ) { }
  ngOnInit() {
    this.auth.uid.subscribe(id=>{
      console.log(id);
      this.uid=id;
    });
    this.subs.add(this.auth.email.subscribe(email=>{
      console.log(email);
      this.email=email;
    }));
    this.initializeForm()
  }
  initializeForm(){
    this.profileForm = this.formBuilder.group({
      "userName": ['', Validators.required],
      "DOB": ['', Validators.required],
      "phone": ['', Validators.required],
      "profilePic": ['', Validators.required],
      "status": ['', Validators.required]
    });
  }

  ionViewDidLeave(){
    this.subs.unsubscribe();
  }
  uploadDP(event){
    var file = event.target.files.item(0);
    let uniqueKey =  'pic'+Math.floor(Math.random()*100000);
    this.afStorage.upload('/chatimages'+uniqueKey, file).then(res=>{
      res.ref.getDownloadURL().then(res=>{
        console.log()
      })
    })
  }

  profile_submit(){
    if(this.profileForm.invalid){
      this.validationService.validateAllFormFields(this.profileForm);
      Object.keys(this.profileForm.controls).forEach(field => {
        const control = this.profileForm.get(field);
        if (control instanceof FormControl) {
          if (control.invalid) {
            control.markAsDirty({ onlySelf: true });
            console.log(control.dirty)
          }
        }
      });
      return;
    }
    this.userDoc = this.afs.doc<U_profile>('users/'+this.uid);
    const updateUser= {
      name: this.profileForm.value.userName,
      email:this.email,
      dob: this.profileForm.value.userName,
      p_n: this.profileForm.value.phone,
      photo: this.profileForm.value.profilePic,
      status: this.profileForm.value.status
    }
    this.userDoc.set(updateUser);
    alert("profile detailed Successful!");
    this.router.navigate(['login']);
  }

}
