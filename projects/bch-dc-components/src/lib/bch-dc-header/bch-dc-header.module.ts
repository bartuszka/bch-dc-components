import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BchDcHeaderComponent } from './bch-dc-header.component';
import { BchDcLinkButtonModule } from '../bch-link-button/bch-dc-link-button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BchDcLinkButtonModule,
    BchDcLinkButtonModule,
  ],
  declarations: [
    BchDcHeaderComponent
  ],
  exports: [
    BchDcHeaderComponent,
    BchDcLinkButtonModule,
  ]
})
export class BchDcHeaderModule {}
