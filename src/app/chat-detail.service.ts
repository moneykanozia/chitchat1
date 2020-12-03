import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDetailService {

   detail=[
     {"name":"Alisha","date":"12/10/2019","url":'../../assets/images/h1.jpg',"last_chat":"bye bye"},
     {"name":"Shamona","date":"16/10/2019","url":'../../assets/images/h2.jpg',"last_chat":"Good Morning"},
     {"name":"John","date":"23/10/2019","url":'../../assets/images/h3.jpg',"last_chat":"Hello"},
     {"name":"David","date":"28/10/2019","url":'../../assets/images/h4.jpg',"last_chat":"ok"},
     {"name":"Alex","date":"5/11/2019","url":'../../assets/images/h5.jpg',"last_chat":"Where r u going"},
     {"name":"Sihana","date":"11/11/2019","url":'../../assets/images/h6.jpg',"last_chat":"Good luck"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"Bye"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"Listen"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"Good night"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"What are you saying "},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"You are looking owsm"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"good evening"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"take care"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"what's going on"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"message deleted"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"bye bye"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"good morning"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"message deleted"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"bye bye"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"nothing is going on"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"hey,what's up"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"hii"},
     {"name":"Brony","date":"14/11/2019","url":'../../assets/images/h7.jpg',"last_chat":"tata tata"}    
    ];

    event=new EventEmitter();
  constructor() { }

  getdata(){
    return this.detail;
  }

 // getname(name){
 //   this.event.emit(name);
  //}
}
