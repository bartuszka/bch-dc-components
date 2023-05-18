import { NgModule } from '@angular/core';
import { BchDcTriangleSelectComponent } from './bch-dc-triangle-select.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BchDcTriangleSelectComponent,
  ],
  exports: [
    BchDcTriangleSelectComponent
  ]
})
export class BchDcTriangleSelectModule {}
