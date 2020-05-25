import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPicturePage } from './new-picture.page';

const routes: Routes = [
  {
    path: '',
    component: NewPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPlantPageRoutingModule {}
