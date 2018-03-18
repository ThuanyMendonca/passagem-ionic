import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PassageirosPage } from '../pages/passageiros/passageiros';
import { PassagemPage } from '../pages/passagem/passagem';
import { HorariosPage } from '../pages/horarios/horarios';
import { SobrePage } from '../pages/sobre/sobre';
import { FormularioPage } from '../pages/formulario/formulario';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PassageirosPage,
    PassagemPage,
    HorariosPage,
    SobrePage,
    FormularioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PassageirosPage,
    PassagemPage,
    HorariosPage,
    SobrePage,
    FormularioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}