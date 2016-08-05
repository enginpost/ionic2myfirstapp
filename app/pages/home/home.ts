import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {
  }
  showAlert(){
    let prompt = this.alertCtrl.create({
      title: 'Greetings!',
      message: 'Hi there!',
      buttons: ['Dismiss']
    });
    prompt.present();
  }
}
