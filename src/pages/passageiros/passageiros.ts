import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-passageiros',
  templateUrl: 'passageiros.html'
})
export class PassageirosPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
