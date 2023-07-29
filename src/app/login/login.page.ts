import { Component } from '@angular/core';
import { ApploginService } from './applogin.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  public email: string = '';
  public password: string = '';

  constructor(private apploginService: ApploginService, private navCtrl: NavController, private toastCtrl: ToastController) {}

  login() {
    if (!this.email || !this.password) {
      this.presentToast('Por favor, ingresa el correo y la contraseña.');
      return;
    }

    this.apploginService.loginUser(this.email, this.password).subscribe(
      (response: any) => {
        if (response.success === 'true') {
          this.navCtrl.navigateRoot('/pagina-de-exito');
        } else {
          this.presentToast('Credenciales inválidas. Verifica el correo y la contraseña.');
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.presentToast('Error al iniciar sesión. Por favor, intenta nuevamente más tarde.');
      }
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }
}
