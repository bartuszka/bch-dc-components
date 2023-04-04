import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BchDcSideMenuComponent } from './bch-dc-side-menu.component';
import { BchDcSideMenuDirective } from './bch-dc-side-menu.directive';
import { BchDcCircleButtonModule } from '../bch-dc-circle-button/bch-dc-circle-button.module';

@NgModule({
  imports: [
    CommonModule,
    BchDcCircleButtonModule,
  ],
  declarations: [
    BchDcSideMenuComponent,
    BchDcSideMenuDirective,
  ],
  exports: [
    BchDcSideMenuComponent,
  ]
})
export class BchDcSideMenuModule {}
