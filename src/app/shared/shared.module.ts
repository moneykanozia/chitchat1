import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorComponent } from "./show-error/show-error.component";
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowErrorComponent
  ],
  imports: [
    CommonModule,IonicModule, ReactiveFormsModule
  ],
  exports:[ShowErrorComponent, ReactiveFormsModule]
})
export class SharedModule { }
