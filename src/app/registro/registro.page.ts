import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  rut:string = '';
  username: string = '';
  password: string = '';
 

  constructor(private alertController: AlertController, private navCtrl: NavController) {}
  
  ngOnInit() {
  }
  async registrar() {
    if (this.username && this.password && this.nombre && this.apellido && this.rut) {
      const user = {
        username: this.username,
        password: this.password,
        nombre: this.nombre,
        apellido: this.apellido,
        rut: this.rut,
      };
      
     
      localStorage.setItem('usuario', JSON.stringify(user));

     
      const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'El usuario se ha registrado correctamente.',
        buttons: ['Aceptar'],
      });
      console.log('Registro exitoso:', user);
      await alert.present();

     
      this.navCtrl.navigateRoot('/home');
    } else {
      
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingresa todos los campos requeridos.',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }
}