import { NgModule } from '@angular/core';
import { BchDcSelectButtonComponent } from './bch-dc-select-button.component';
import { CommonModule } from '@angular/common';
import { BchDcSelectButtonDirective } from './bch-dc-select-button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BchDcSelectButtonComponent,
    BchDcSelectButtonDirective
  ],
  exports: [
    BchDcSelectButtonComponent
  ]
})
export class BchDcSelectButtonModule {}
