# Ionic Angular QR Bar Code Reader

App created using the [Ionic 5 framework](https://ionicframework.com/docs) to use the [Angular component ngx-qrcode2: Quick Response bar code reader](https://www.npmjs.com/package/ngx-qrcode2). Another great tutorial from [Ionic Academy](https://ionicacademy.com/how-to-ion-picker-component/)

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Generates QR bar codes from input text (a web address in this case).

## Screenshots

![image](./img/.png)
![image](./img/.png)

## Technologies

* [Ionic v5.7.0](https://ionicframework.com/)

* [Angular v7.2.2](https://angular.io/)

* [Ionic/angular v4.1.0](https://www.npmjs.com/package/@ionic/angular)

* [Angular bar code reader component library ngx-qrcode2](https://www.npmjs.com/package/ngx-qrcode2)

* [Angular Reactive Extensions for JS, rxjs](https://angular.io/guide/rx-library) async function used to show a user message toast upon successful scan save operation (or error message if not).

* [Cordova Plugin: base64-to-gallery](https://ionicframework.com/docs/native/base64-to-gallery) to save base 64 data as a device png image

* [Ionic Plugin: native bar code scanner](https://ionicframework.com/docs/native/barcode-scanner) opens the camera view and scans a bar code automatically with data returned

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* function to download bar code data.

```typescript
 downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();
    console.log('data: ', imageData);

    let data = imageData.split(',')[1];

    this.base64ToGallery.base64ToGallery(data,
      { prefix: '_img', mediaScanner: true })
      .then(async res => {
        let toast = await this.toastCtrl.create({
          header: 'QR code saved to Photolibrary'
        });
        toast.present();
    }, err => console.log('err: ', err))
  };
```

## Features

* Uses phone camera to scan a bar code.

* saves bar code images to phone photo library.

## Status & To-do list

* Status: Working.

* To-do: add more commenting.

## Inspiration

Project inspired by [Simon Grimm´s Youtube video: How to Read and Create QR Codes with Ionic 4](https://www.youtube.com/watch?v=iDYJ8YfdUTU&t=269s)

[Techiediaries: Tutorial: Create a QR Code Generator with Angular 4+](https://www.techiediaries.com/generate-qrcodes-angular/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
