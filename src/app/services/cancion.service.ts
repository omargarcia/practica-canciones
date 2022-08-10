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

  agregarCancion(cancion: ICancion) {
    const cancionesRef = collection(this.firestore, 'canciones');
    return addDoc(cancionesRef, cancion);
  }
  editarCancion(cancion: ICancion) {
    const cancionDocRef = doc(this.firestore, `books/${cancion.id}`);
    return setDoc(cancionDocRef, cancion);
  }

  eliminarCancion(cancion: ICancion) {
    const cancionRef = doc(this.firestore, `canciones/${cancion.id}`);
    return deleteDoc(cancionRef);
  }
}
