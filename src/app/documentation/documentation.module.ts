import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { DocumentationRoutingModule } from './documentation-routing.module';

@NgModule({
  imports: [
    DocumentationRoutingModule,
  ],
  declarations: [
    DocumentationComponent,
  ],
  exports: [
    DocumentationComponent,
  ]
})
export class DocumentationModule {}
