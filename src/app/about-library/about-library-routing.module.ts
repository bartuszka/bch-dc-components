import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLibraryComponent } from './about-library.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about-library'
  },
  {
    path: '',
    component: AboutLibraryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutLibraryRoutingModule { }
