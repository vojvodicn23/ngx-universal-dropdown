import { NgModule } from '@angular/core';
import { NgxUniversalDropdownComponent } from './ngx-universal-dropdown.component';
import { NgxUniversalDropdownDirective } from './ngx-universal-dropdown.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxUniversalDropdownComponent,
    NgxUniversalDropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxUniversalDropdownComponent
  ]
})
export class NgxUniversalDropdownModule { }
