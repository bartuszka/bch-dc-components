import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    DocumentationRoutingModule,
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
