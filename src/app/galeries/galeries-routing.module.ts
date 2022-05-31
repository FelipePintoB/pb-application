import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GaleryComponent } from './galery/galery.component';
import { BingImagesComponent } from './bing-images/bing-images.component';
import { PetsImagesComponent } from './pets-images/pets-images.component';

const routes: Routes = [
  {
    path: "",
    component: GaleryComponent,
  },
  {
    path: "bing-images",
    component: BingImagesComponent,
  },
  {
    path: "pet-images",
    component: PetsImagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriesRoutingModule { }
