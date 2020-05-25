import { CameraPreviewComponent } from './camera-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        CameraPreviewComponent
    ],
    imports: [CommonModule, IonicModule],
    exports: [CameraPreviewComponent]
})

export class CameraPreviewModule {}
