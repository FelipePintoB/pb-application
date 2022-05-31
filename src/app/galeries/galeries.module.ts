import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriesRoutingModule } from './galeries-routing.module';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { GaleryComponent } from './galery/galery.component';
import { BingImagesComponent } from './bing-images/bing-images.component';
import { PetsImagesComponent } from './pets-images/pets-images.component';


@NgModule({
  declarations: [
    GaleryComponent,
    BingImagesComponent,
    PetsImagesComponent
  ],
  imports: [
    CommonModule,
    GaleriesRoutingModule,
    AngularMaterialModule
  ]
})
export class GaleriesModule { }
