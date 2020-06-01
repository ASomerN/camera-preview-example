import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Plugins
} from '@capacitor/core';
const { CameraPreview } = Plugins;

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.component.html',
  styleUrls: ['./camera-preview.component.scss'],
})
export class CameraPreviewComponent implements OnInit {
  @Output() takePictureCamera = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    CameraPreview.start({ 
      parent: "cameraPreview", 
      position: "rear", 
      camera: "rear"
    });
    /*
    const video = document.getElementById('video');
    video.style.width = "90%";
    video.style.marginLeft = "5%";
    */
  }
  
  takePicture(){
      const pictureOpts = {
        correctOrientation: true,
        width: 150,
        quality: 50
      };
      CameraPreview.capture(pictureOpts).then((base64PictureData) => {
          this.takePictureCamera.emit('data:image/jpg;base64,'+base64PictureData.value);
          CameraPreview.stop();
      }, (err) => {
          console.log(err);
          CameraPreview.stop();
      });
  }

  flip(){
    CameraPreview.flip();
  }  
}
