import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICancion } from '../cancion.model';

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  constructor(private firestore: Firestore) {}

  obtenerCanciones(): Observable<ICancion[]> {
    const cancionesRef = collection(this.firestore, 'canciones');
    return collectionData(cancionesRef, { idField: 'id' }) as Observable<
      ICancion[]
    >;
  }
  obtenerCancionPorID(id: string) {
    const cancionRef = doc(this.firestore, `canciones/${id}`);
    return docData(cancionRef, { idField: 'id' }) as Observable<ICancion>;
  }

  agregarCancion(cancion: ICancion) {
    const cancionesRef = collection(this.firestore, 'canciones');
    return addDoc(cancionesRef, cancion);
  }
  actualizarCancion(cancion: ICancion) {
    console.log(cancion);
    const cancionDocRef = doc(this.firestore, `canciones/${cancion.id}`);
    return setDoc(cancionDocRef, cancion);
  }

  eliminarCancion(cancion: ICancion) {
    const cancionRef = doc(this.firestore, `canciones/${cancion.id}`);
    return deleteDoc(cancionRef);
  }
}
