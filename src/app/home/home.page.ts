import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  username: string = '';
  password: string = ''; 
  constructor( private alertController: AlertController,
    private navCtrl: NavController) {}

  async iniciarSesion() {
    
    if (!this.username || !this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa nombre de usuario y contraseña.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }

   
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      if (
        usuario.username === this.username&&
        usuario.password === this.password
      ) {
        
        this.navCtrl.navigateRoot('/scan');
      } else {
        
        const errorAlert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales inválidas. Por favor, verifica tus datos.',
          buttons: ['Aceptar'],
        });
        await errorAlert.present();
      }
    } else {
      
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'No se encontró un usuario registrado. Regístrate primero.',
        buttons: ['Aceptar'],
      });
      await errorAlert.present();
    }
  }
}