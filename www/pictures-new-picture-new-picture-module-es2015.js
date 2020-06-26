(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pictures-new-picture-new-picture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-picker/camera-preview/camera-preview.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-picker/camera-preview/camera-preview.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"underlay\">\r\n    <div id=\"cameraPreview\" class=\"cameraPreview\" #cameraPreview>  \r\n    </div>\r\n    <div class=\"icons\">\r\n      <ion-icon name=\"camera-outline\"\r\n      role=\"button\" \r\n      (click)='takePicture()' \r\n      class=\"take_pic_class\" \r\n    ></ion-icon>\r\n    <ion-icon name=\"camera-reverse-outline\"\r\n      role=\"button\" \r\n      (click)='flip()' \r\n      class=\"reverseCamera\" \r\n    ></ion-icon>\r\n    </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-picker/image-picker.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-picker/image-picker.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"editing === true\" class=\"bg-transparent\">\r\n  <app-camera-preview\r\n    (takePictureCamera)=\"ontakePictureCamera($event)\"\r\n  ></app-camera-preview>\r\n</div>\r\n<div *ngIf=\"editing === false\">\r\n  <ion-img\r\n    role=\"button\"\r\n    class=\"image location-image\"\r\n    (click)=\"editToggle()\"\r\n    [src]=\"selectedImage\"\r\n    *ngIf=\"!!selectedImage === true && forceNoImage === false\"\r\n  ></ion-img>\r\n  <ion-button\r\n    class=\"camera\"\r\n    color=\"dark\"\r\n    (click)=\"editToggle()\"\r\n    *ngIf=\"!!selectedImage === false || forceNoImage === true\"\r\n  ><ion-icon name=\"camera\"></ion-icon></ion-button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pictures/new-picture/new-picture.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pictures/new-picture/new-picture.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-image-picker \r\n  [forceNoImage]=\"forceNoImage\"\r\n  (imagePick)=\"onImagePicked($event)\"\r\n  ></app-image-picker>\r\n");

/***/ }),

/***/ "./src/app/image-picker/camera-preview/camera-preview.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/image-picker/camera-preview/camera-preview.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".underlay {\n  position: absolute;\n  background-color: transparent !important;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 299998;\n}\n\n/*\n.overlay {\n    position: absolute;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    z-index:299999;\n}\n*/\n\n.icons {\n  left: 0px;\n  right: 0px;\n  position: absolute;\n  /*it can be fixed too*/\n  text-align: center;\n  margin: auto;\n  z-index: 300001;\n  bottom: 10%;\n}\n\n.take_pic_class {\n  background-size: 60px 60px;\n  color: var(--ion-color-medium);\n  width: 55px;\n  height: 55px;\n  float: left;\n  margin-left: 30%;\n  display: inline-flex;\n}\n\n.reverseCamera {\n  background-size: 60px 60px;\n  color: var(--ion-color-medium);\n  width: 55px;\n  height: 55px;\n  float: right;\n  margin-right: 30%;\n  display: inline-flex;\n}\n\n.cameraPreview {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  z-index: 300000;\n}\n\nion-content, ion-page, .nav-decor {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtcGlja2VyL2NhbWVyYS1wcmV2aWV3L0Q6XFxDb2RpbmdcXE5vZGVcXENhbWVyYVByZXZpZXdFeGFtcGxlL3NyY1xcYXBwXFxpbWFnZS1waWNrZXJcXGNhbWVyYS1wcmV2aWV3XFxjYW1lcmEtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1hZ2UtcGlja2VyL2NhbWVyYS1wcmV2aWV3L2NhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFFQSx3Q0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7Ozs7Ozs7OztDQUFBOztBQVVBO0VBQ0ksU0FBQTtFQUFZLFVBQUE7RUFDWixrQkFBQTtFQUFvQixzQkFBQTtFQUNwQixrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURDQTtFQUNJLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2UtcGlja2VyL2NhbWVyYS1wcmV2aWV3L2NhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi51bmRlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDoyOTk5OTg7XHJcbiAgfVxyXG4vKlxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDoyOTk5OTk7XHJcbn1cclxuKi9cclxuLmljb25zIHtcclxuICAgIGxlZnQ6IDBweDsgIHJpZ2h0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qaXQgY2FuIGJlIGZpeGVkIHRvbyovXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHotaW5kZXg6MzAwMDAxO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbi50YWtlX3BpY19jbGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ucmV2ZXJzZUNhbWVyYSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuICBcclxuXHJcbi5jYW1lcmFQcmV2aWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6MzAwMDAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCwgaW9uLXBhZ2UsIC5uYXYtZGVjb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSIsIi51bmRlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyOTk5OTg7XG59XG5cbi8qXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDoyOTk5OTk7XG59XG4qL1xuLmljb25zIHtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qaXQgY2FuIGJlIGZpeGVkIHRvbyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICB6LWluZGV4OiAzMDAwMDE7XG4gIGJvdHRvbTogMTAlO1xufVxuXG4udGFrZV9waWNfY2xhc3Mge1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5yZXZlcnNlQ2FtZXJhIHtcbiAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5jYW1lcmFQcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMzAwMDAwO1xufVxuXG5pb24tY29udGVudCwgaW9uLXBhZ2UsIC5uYXYtZGVjb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/image-picker/camera-preview/camera-preview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/image-picker/camera-preview/camera-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: CameraPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPreviewComponent", function() { return CameraPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



const { CameraPreview } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let CameraPreviewComponent = class CameraPreviewComponent {
    constructor() {
        this.takePictureCamera = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
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
    takePicture() {
        const pictureOpts = {
            correctOrientation: true,
            width: 150,
            quality: 50
        };
        CameraPreview.capture(pictureOpts).then((base64PictureData) => {
            this.takePictureCamera.emit('data:image/jpg;base64,' + base64PictureData.value);
            CameraPreview.stop();
        }, (err) => {
            console.log(err);
            CameraPreview.stop();
        });
    }
    flip() {
        CameraPreview.flip();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CameraPreviewComponent.prototype, "takePictureCamera", void 0);
CameraPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./camera-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-picker/camera-preview/camera-preview.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./camera-preview.component.scss */ "./src/app/image-picker/camera-preview/camera-preview.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CameraPreviewComponent);



/***/ }),

/***/ "./src/app/image-picker/camera-preview/camera-preview.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/image-picker/camera-preview/camera-preview.module.ts ***!
  \**********************************************************************/
/*! exports provided: CameraPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPreviewModule", function() { return CameraPreviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _camera_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-preview.component */ "./src/app/image-picker/camera-preview/camera-preview.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CameraPreviewModule = class CameraPreviewModule {
};
CameraPreviewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _camera_preview_component__WEBPACK_IMPORTED_MODULE_1__["CameraPreviewComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [_camera_preview_component__WEBPACK_IMPORTED_MODULE_1__["CameraPreviewComponent"]]
    })
], CameraPreviewModule);



/***/ }),

/***/ "./src/app/image-picker/image-picker.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-picker/image-picker.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 150px;\n  height: 150px;\n  border: 1px solid var(--ion-color-dark);\n  border-radius: 75px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.location-image {\n  margin: auto;\n  margin-top: 40%;\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 75px;\n}\n\n.camera {\n  margin-left: 45%;\n  margin-top: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtcGlja2VyL0Q6XFxDb2RpbmdcXE5vZGVcXENhbWVyYVByZXZpZXdFeGFtcGxlL3NyY1xcYXBwXFxpbWFnZS1waWNrZXJcXGltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1waWNrZXIvaW1hZ2UtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tlciB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICBcclxuLmxvY2F0aW9uLWltYWdlIHtcclxuICBtYXJnaW46YXV0bztcclxuICBtYXJnaW4tdG9wOjQwJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA3NXB4XHJcbn1cclxuXHJcbi5jYW1lcmEge1xyXG4gIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgbWFyZ2luLXRvcDogNDUlO1xyXG59IiwiLnBpY2tlciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9jYXRpb24taW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcbn1cblxuLmNhbWVyYSB7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIG1hcmdpbi10b3A6IDQ1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/image-picker/image-picker.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-picker/image-picker.component.ts ***!
  \********************************************************/
/*! exports provided: ImagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerComponent", function() { return ImagePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ImagePickerComponent = class ImagePickerComponent {
    // constructor(private backgroundMode: BackgroundMode, private platform: Platform) {}
    constructor() {
        this.imagePick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editing = false;
        this.cameraOn = false;
    }
    ngOnInit() {
        console.log('forceNoImage', this.forceNoImage);
        console.log('selectedImage', this.selectedImage);
    }
    editToggle() {
        if (this.editing === true) {
            this.editing = false;
        }
        else {
            this.editing = true;
        }
    }
    ontakePictureCamera(event) {
        this.selectedImage = event;
        this.imagePick.emit(this.selectedImage);
        this.editToggle();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ImagePickerComponent.prototype, "imagePick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ImagePickerComponent.prototype, "selectedImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ImagePickerComponent.prototype, "forceNoImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cameraPreview', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ImagePickerComponent.prototype, "element", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('take_pic_class', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ImagePickerComponent.prototype, "takePicBtnElement", void 0);
ImagePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./image-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-picker/image-picker.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./image-picker.component.scss */ "./src/app/image-picker/image-picker.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ImagePickerComponent);



/***/ }),

/***/ "./src/app/image-picker/image-picker.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/image-picker/image-picker.module.ts ***!
  \*****************************************************/
/*! exports provided: ImagePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerModule", function() { return ImagePickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _image_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-picker.component */ "./src/app/image-picker/image-picker.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _camera_preview_camera_preview_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera-preview/camera-preview.module */ "./src/app/image-picker/camera-preview/camera-preview.module.ts");






let ImagePickerModule = class ImagePickerModule {
};
ImagePickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _image_picker_component__WEBPACK_IMPORTED_MODULE_1__["ImagePickerComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _camera_preview_camera_preview_module__WEBPACK_IMPORTED_MODULE_5__["CameraPreviewModule"]],
        exports: [_image_picker_component__WEBPACK_IMPORTED_MODULE_1__["ImagePickerComponent"]]
    })
], ImagePickerModule);



/***/ }),

/***/ "./src/app/pictures/new-picture/new-picture-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pictures/new-picture/new-picture-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: NewPlantPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPlantPageRoutingModule", function() { return NewPlantPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-picture.page */ "./src/app/pictures/new-picture/new-picture.page.ts");




const routes = [
    {
        path: '',
        component: _new_picture_page__WEBPACK_IMPORTED_MODULE_3__["NewPicturePage"]
    }
];
let NewPlantPageRoutingModule = class NewPlantPageRoutingModule {
};
NewPlantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewPlantPageRoutingModule);



/***/ }),

/***/ "./src/app/pictures/new-picture/new-picture.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pictures/new-picture/new-picture.module.ts ***!
  \************************************************************/
/*! exports provided: NewPicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPicturePageModule", function() { return NewPicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _image_picker_image_picker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image-picker/image-picker.module */ "./src/app/image-picker/image-picker.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_picture_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-picture-routing.module */ "./src/app/pictures/new-picture/new-picture-routing.module.ts");
/* harmony import */ var _new_picture_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-picture.page */ "./src/app/pictures/new-picture/new-picture.page.ts");








let NewPicturePageModule = class NewPicturePageModule {
};
NewPicturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _new_picture_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewPlantPageRoutingModule"],
            _image_picker_image_picker_module__WEBPACK_IMPORTED_MODULE_4__["ImagePickerModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_new_picture_page__WEBPACK_IMPORTED_MODULE_7__["NewPicturePage"]]
    })
], NewPicturePageModule);



/***/ }),

/***/ "./src/app/pictures/new-picture/new-picture.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pictures/new-picture/new-picture.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".submitButton {\n  width: 100%;\n  height: 40px;\n}\n\nion-header {\n  background-color: #004225 !important;\n}\n\nion-content, ion-item, ion-list, ion-row {\n  --background: #73ba9b !important;\n  background-color: #73ba9b !important;\n}\n\nion-title {\n  color: white;\n}\n\n.iconwarning {\n  display: inline-block;\n  font-size: 30px;\n  color: #cc0b0b;\n  vertical-align: middle;\n  padding-left: 10px;\n}\n\n.iconthumb {\n  display: inline-block;\n  padding-left: 10px;\n  font-size: 30px;\n  vertical-align: middle;\n}\n\n.text {\n  padding-top: 3px;\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZXMvbmV3LXBpY3R1cmUvRDpcXENvZGluZ1xcTm9kZVxcQ2FtZXJhUHJldmlld0V4YW1wbGUvc3JjXFxhcHBcXHBpY3R1cmVzXFxuZXctcGljdHVyZVxcbmV3LXBpY3R1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9waWN0dXJlcy9uZXctcGljdHVyZS9uZXctcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BpY3R1cmVzL25ldy1waWN0dXJlL25ldy1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXRCdXR0b24ge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo0MHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQyMjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQsIGlvbi1pdGVtLCBpb24tbGlzdCwgaW9uLXJvdyAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzNiYTliICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNiYTliICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pY29ud2FybmluZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDIwNCwgMTEsIDExKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG5cclxuLmljb250aHVtYiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuICAgXHJcbi50ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iLCIuc3VibWl0QnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQyMjUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQsIGlvbi1pdGVtLCBpb24tbGlzdCwgaW9uLXJvdyB7XG4gIC0tYmFja2dyb3VuZDogIzczYmE5YiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNiYTliICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmljb253YXJuaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjY2MwYjBiO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pY29udGh1bWIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pictures/new-picture/new-picture.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pictures/new-picture/new-picture.page.ts ***!
  \**********************************************************/
/*! exports provided: NewPicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPicturePage", function() { return NewPicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NewPicturePage = class NewPicturePage {
    constructor() {
        // Force image displaymon image Picker
        this.forceNoImage = true;
    }
    ngOnInit() {
    }
    onImagePicked(event) {
        this.forceNoImage = false;
        this.image = event;
    }
};
NewPicturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-picture',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-picture.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pictures/new-picture/new-picture.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-picture.page.scss */ "./src/app/pictures/new-picture/new-picture.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NewPicturePage);



/***/ })

}]);
//# sourceMappingURL=pictures-new-picture-new-picture-module-es2015.js.map