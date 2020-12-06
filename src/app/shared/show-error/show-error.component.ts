import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessages } from '../validations/errorMessages';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
})
export class ShowErrorComponent implements OnInit {
  @Input() control: FormControl;
  @Input() fieldName?: string;
  constructor() { }

  ngOnInit() {}
  get error(){
    if(!this.isUndefined(this.control)){
      for(const propertyName in this.control.errors){
        if(this.control.errors.hasOwnProperty(propertyName) && this.control.dirty)
        {
          if(this.fieldName){
            return this.fieldName+ErrorMessages[propertyName];
          }
          return ErrorMessages[propertyName];
        }
      }
    }
    return null;
  }
  isUndefined(value){
    return value === void 0;
  }  
}
