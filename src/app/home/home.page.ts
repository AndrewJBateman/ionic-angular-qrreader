import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	qrData = 'https://ionicacademy.com';
	scannedCode = null;
	elementType: 'url' | 'canvas' | 'img' = 'canvas';

	constructor(
		private barcodeScanner: BarcodeScanner,
		private base64ToGallery: Base64ToGallery,
		private toastCtrl: ToastController
	) {}

	scanCode() {
		this.barcodeScanner.scan().then((barcodeData) => {
			this.scannedCode = barcodeData.text;
		});
	}

	downloadQR() {
		const canvas = document.querySelector('canvas') as HTMLCanvasElement;
		const imageData = canvas.toDataURL('image/jpeg').toString();
		console.log('data: ', imageData);

		let data = imageData.split(',')[1];

		this.base64ToGallery
			.base64ToGallery(data, { prefix: '_img', mediaScanner: true })
			.then(
				async (res) => {
					let toast = await this.toastCtrl.create({
						header: 'QR code saved to Photolibrary',
					});
					toast.present();
				},
				(err) => console.log('err: ', err)
			);
	}
}
