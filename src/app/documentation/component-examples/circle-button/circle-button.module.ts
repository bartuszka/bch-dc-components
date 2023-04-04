import { NgModule } from '@angular/core';
import { CircleButtonRoutingModule } from './circle-button-routing.module';
import { CircleButtonComponent } from './circle-button.component';
import { BchDcCircleButtonModule } from 'bch-dc-components';

@NgModule({
  imports: [
    CircleButtonRoutingModule,
    BchDcCircleButtonModule,
  ],
  declarations: [
    CircleButtonComponent,
  ]
})
export class CircleButtonModule {}
