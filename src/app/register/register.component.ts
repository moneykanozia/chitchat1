import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {  
  constructor(private router:Router,private auth:AuthenticationService) { }

  ngOnInit() {}
  
  register(email,pasw){
    this.auth.register(email,pasw);
  }
}
