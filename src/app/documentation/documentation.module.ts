import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BchDcCircleButtonModule } from 'bch-dc-components';

@NgModule({
  imports: [
    DocumentationRoutingModule,
    BchDcCircleButtonModule,
    SharedModule,
  ],
  declarations: [
    DocumentationComponent,
  ],
  exports: [
    DocumentationComponent,
  ]
})
export class DocumentationModule {}
