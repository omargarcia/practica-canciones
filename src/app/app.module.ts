import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { CancionesComponent } from './components/canciones/canciones.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarcancionComponent } from './components/editarcancion/editarcancion.component';

@NgModule({
  declarations: [AppComponent, CancionComponent, CancionesComponent, EditarcancionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
