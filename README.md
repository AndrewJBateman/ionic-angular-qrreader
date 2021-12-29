# :zap: Ionic Angular QR Bar Code Reader

* App created using the [Ionic framework](https://ionicframework.com/docs) to use the [Angular component ngx-qrcode2: Quick Response bar code reader](https://www.npmjs.com/package/ngx-qrcode2).
* Another great tutorial from [Simon Grimm](https://www.youtube.com/channel/UCZZPgUIorPao48a1tBYSDgg)
* **code updated to the latest QR bar code scanner version**.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-qrreader?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-qrreader?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-qrreader?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-qrreader?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular QR Bar Code Reader](#zap-ionic-angular-qr-bar-code-reader)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Generates QR bar codes from input text (a web address in this case) as the text is typed.
* Note: [ngx-qrcode2](https://www.npmjs.com/package/ngx-qrcode2) has been deprecated. [@techiediaries/ngx-qrcode](https://www.npmjs.com/package/@techiediaries/ngx-qrcode) should be used instead.

## :camera: Screenshots

![image](./img/bcr.png)

## :signal_strength: Technologies

* [Ionic v6](https://ionicframework.com/)
* [Angular v13](https://angular.io/)
* [Ionic/angular v6](https://www.npmjs.com/package/@ionic/angular)
* [Angular bar code reader component library ngx-qrcode2 v9](https://www.npmjs.com/package/ngx-qrcode2)
* [Angular Reactive Extensions for JS, rxjs](https://angular.io/guide/rx-library) async function used to show a user message toast upon successful scan save operation (or error message if not).

* [Cordova Plugin: base64-to-gallery](https://ionicframework.com/docs/native/base64-to-gallery) to save base 64 data as a device png image
* [Ionic Plugin: native bar code scanner](https://ionicframework.com/docs/native/barcode-scanner) opens the camera view and scans a bar code automatically with data returned

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

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

## :cool: Features

* Uses phone camera to scan a bar code.
* saves bar code images to phone photo library.

## :clipboard: Status & To-do list

* Status: Compiles in browser but needs to be tested on a mobile simulator
* To-do: Test in Android Studio

## :clap: Inspiration

* Project inspired by [Simon Grimm´s Youtube video: How to Read and Create QR Codes with Ionic 4](https://www.youtube.com/watch?v=iDYJ8YfdUTU&t=269s)
* [Github repo: @techiediaries/ngx-qrcode](https://github.com/techiediaries/ngx-qrcode#how-to-use-ngx-qrcode2)
* [Techiediaries: Tutorial: Create a QR Code Generator with Angular 4+](https://www.techiediaries.com/generate-qrcodes-angular/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
