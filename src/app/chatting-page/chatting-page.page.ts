import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {ChatDetailService} from '../chat-detail.service';
@Component({
  selector: 'app-chatting-page',
  templateUrl: './chatting-page.page.html',
  styleUrls: ['./chatting-page.page.scss'],
})
export class ChattingPagePage implements OnInit {
  u_name:any;
  u_url:any;
  content_text:any[];
  constructor(private chatservice:ChatDetailService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
      let names=params.get('name');
      let urls=params.get('url');
      this.u_name=names;
      this.u_url=urls;
      });
    //  this.chatservice.event.subscribe(nam=>this.u_name=nam);
  }

  clickbutton(text){
    this.content_text=text;
  }
}
