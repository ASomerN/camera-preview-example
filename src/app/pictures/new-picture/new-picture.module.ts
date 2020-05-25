import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImagePickerModule } from '../../image-picker/image-picker.module';

import { IonicModule } from '@ionic/angular';

import { NewPlantPageRoutingModule } from './new-picture-routing.module';

import { NewPicturePage } from './new-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPlantPageRoutingModule,
    ImagePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NewPicturePage]
})
export class NewPicturePageModule {}
