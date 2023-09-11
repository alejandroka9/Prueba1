
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  codigoEscaneado: string = '';

  constructor(private navCtrl: NavController) {}
  ngOnInit() {
  }

  async escans() {
    const result = await BarcodeScanner.scan();
    if (result) {
      
      this.navCtrl.navigateForward(`/mostrar/${JSON.stringify(result)}`);
    } else {
      this.codigoEscaneado = 'No se escaneó ningún código QR.';
    }
  }
  }
