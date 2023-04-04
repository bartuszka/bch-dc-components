import { NgModule } from '@angular/core';

import { AboutAppSideMenuContentComponent } from '../sidemenu-components/about-app-side-menu-content/about-app-side-menu-content.component';
import { DocumentationSideMenuListComponent } from '../sidemenu-components/documentation-component-side-menu-list/documentation-side-menu-list.component';
import { BchDcSideMenuModule, BchDcLinkButtonModule, BchDcHeaderModule } from 'bch-dc-components';
import { IsIncludedInPipe } from '../shared/pipes/is-included-in.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    BchDcLinkButtonModule,
  ],
  declarations: [
    AboutAppSideMenuContentComponent,
    DocumentationSideMenuListComponent,
    IsIncludedInPipe
  ],
  exports: [
    BchDcHeaderModule,
    BchDcLinkButtonModule,
    BchDcSideMenuModule,
    AboutAppSideMenuContentComponent,
    DocumentationSideMenuListComponent,
    IsIncludedInPipe,
    RouterModule
  ]
})
export class CoreModule { }
