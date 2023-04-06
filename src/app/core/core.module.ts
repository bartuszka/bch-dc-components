import { NgModule } from '@angular/core';

import { AboutAppSideMenuContentComponent } from '../sidemenu-components/about-app-side-menu-content/about-app-side-menu-content.component';
import { DocumentationSideMenuListComponent } from '../sidemenu-components/documentation-component-side-menu-list/documentation-side-menu-list.component';
import { IsIncludedInPipe } from '../shared/pipes/is-included-in.pipe';
import { RouterModule } from '@angular/router';
import { BchDcLinkButtonModule } from 'projects/bch-dc-components/src/lib/bch-link-button/bch-dc-link-button.module';
import { BchDcHeaderModule } from 'projects/bch-dc-components/src/lib/bch-dc-header/bch-dc-header.module';
import { BchDcSideMenuModule } from 'projects/bch-dc-components/src/lib/bch-dc-side-menu/bch-dc-side-menu.module';

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
