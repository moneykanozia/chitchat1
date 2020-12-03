import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { AuthenticationService } from "../_services/authentication.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
//  u_email="money";
//  p_word=12345;
  n_incorrect:string;
  p_incorrect:string;
  np_incorrect:string;
  name:string;
//  email="jaklin@gmail.com";
//  pasd=123456;
  constructor(private router:Router,private activatedroute:ActivatedRoute, private authenticationService: AuthenticationService ){ }

  ngOnInit() {
 //     this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
//   let names=params.get('_name');
//      let emails=params.get('_email');
//      let paswd=params.get('_pasw');
//      this.name=names;
//      this.email=emails;
//      this.pasd=paswd;  
//    });
   
  }
  
  onlogin(email: string, pass: string){
    this.authenticationService.login(email, pass);
  }
}
