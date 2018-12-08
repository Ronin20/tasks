import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms'
import { ConexionService } from './service/conexion.service';
import { ListaComponent } from './componentes/lista/lista.component';
import { ListaAddComponent } from './componentes/lista-add/lista-add.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  declarations: [ AppComponent, ListaComponent, ListaAddComponent ],
  providers: [ConexionService],
  bootstrap: [ AppComponent ]
})
export class AppModule {}