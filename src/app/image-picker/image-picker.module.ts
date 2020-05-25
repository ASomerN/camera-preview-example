import { ImagePickerComponent } from './image-picker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CameraPreviewModule } from './camera-preview/camera-preview.module';



@NgModule({
  declarations: [
    ImagePickerComponent
  ],
  imports: [CommonModule, IonicModule, CameraPreviewModule],
  exports: [ ImagePickerComponent]
})
export class ImagePickerModule {}
