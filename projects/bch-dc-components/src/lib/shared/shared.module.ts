import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { BchDcSelectButtonDirective } from './directives/bch-dc-select-button.directive';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    BchDcSelectButtonDirective

  ],
  exports: [
    ClickOutsideDirective,
    BchDcSelectButtonDirective
  ]
})
export class SharedModule {}
