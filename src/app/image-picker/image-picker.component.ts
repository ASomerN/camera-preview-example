import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  @Input() selectedImage: string;
  editing = false;
  cameraOn = false;
  @Input() forceNoImage: boolean;

  @ViewChild('cameraPreview', {static: true}) element: ElementRef;
  @ViewChild('take_pic_class', {static: true}) takePicBtnElement: ElementRef;

 
 // constructor(private backgroundMode: BackgroundMode, private platform: Platform) {}
 constructor(
   ) {}

  ngOnInit() {
    console.log('forceNoImage', this.forceNoImage);
    console.log('selectedImage', this.selectedImage);
  }

  editToggle(){
    if(this.editing === true){
      this.editing = false;

    } else {
      this.editing = true;
    }
  }

  ontakePictureCamera(event: string){
    this.selectedImage = event;
    this.imagePick.emit(this.selectedImage);
    this.editToggle();
  }


}
