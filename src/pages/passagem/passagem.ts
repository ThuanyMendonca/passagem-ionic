import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormularioPage } from '../formulario/formulario';

@Component({
  selector: 'page-passagem',
  templateUrl: 'passagem.html'
})
export class PassagemPage {

  constructor(public navCtrl: NavController) {
  }
  goToFormulario(params){
    if (!params) params = {};
    this.navCtrl.push(FormularioPage);
  }
}
