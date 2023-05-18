import { NgModule } from '@angular/core';
import { TriangleSelectRoutingModule } from './triangle-select-routing.module';
import { TriangleSelectComponent } from './triangle-select.component';
import {
  BchDcTriangleSelectModule
} from '../../../../../projects/bch-dc-components/src/lib/bch-dc-trignale-select/bch-dc-triangle-select.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    TriangleSelectRoutingModule,
    BchDcTriangleSelectModule,
    SharedModule,
  ],
  declarations: [
    TriangleSelectComponent,
  ],
  exports: [
    TriangleSelectComponent,
  ]
})
export class TriangleSelectModule {}
