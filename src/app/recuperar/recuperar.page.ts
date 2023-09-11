import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private alertController: AlertController,private route: ActivatedRoute) {}

  ngOnInit() {
    
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.username = user.username;
      this.password = user.password;
    }
  }

  async mostrar() {
    if (this.username && this.password) {
      const alert = await this.alertController.create({
        header: 'Credenciales',
        message: `Usuario: ${this.username} Contraseña: ${this.password}`,
        buttons: ['Aceptar'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa un nombre de usuario  válido.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
}