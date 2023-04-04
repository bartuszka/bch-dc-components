import { NgModule } from '@angular/core';
import { AboutLibraryComponent } from './about-library.component';
import { AboutLibraryRoutingModule } from './about-library-routing.module';

@NgModule({
  imports: [
    AboutLibraryRoutingModule,
  ],
  declarations: [
    AboutLibraryComponent
  ],
  exports: [
    AboutLibraryComponent
  ]
})
export class AboutLibraryModule {}
