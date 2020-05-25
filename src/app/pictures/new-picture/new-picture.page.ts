import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-new-picture',
  templateUrl: './new-picture.page.html',
  styleUrls: ['./new-picture.page.scss'],
})
export class NewPicturePage implements OnInit {

  image: string;

  // Force image displaymon image Picker
  forceNoImage = true;

  constructor() {}

  ngOnInit() {
  }

  onImagePicked(event: string) {
    this.forceNoImage = false;
    this.image = event;
  }
}
