import { NgModule } from '@angular/core';
import { BchDcSelectButtonsComponent } from './bch-dc-select-buttons.component';
import { CommonModule } from '@angular/common';
import { BchDcSelectButtonsDirective } from './bch-dc-select-buttons.directive';
import { BchDcSelectButtonsPipe } from './bch-dc-select-buttons.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BchDcSelectButtonsComponent,
    BchDcSelectButtonsDirective,
    BchDcSelectButtonsPipe
  ],
  exports: [
    BchDcSelectButtonsComponent
  ]
})
export class BchDcSelectButtonsModule {}
