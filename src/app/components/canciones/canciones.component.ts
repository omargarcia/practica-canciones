import { Component, OnInit } from '@angular/core';
import { ICancion } from 'src/app/cancion.model';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
})
export class CancionesComponent implements OnInit {
  canciones: ICancion[] = [];

  constructor(private cancionService: CancionService) {}

  ngOnInit(): void {
    this.cancionService.obtenerCanciones().subscribe((res: ICancion[]) => {
      this.canciones = res;
    });
  }

  eliminarCancion(cancion: ICancion) {
    if (
      confirm(
        "¿Seguro que desea eliminar la cancion '" + cancion.titulo + "'?"
      ) == true
    ) {
      this.cancionService
        .eliminarCancion(cancion)
        .then(() => console.log('Se elimino correctamente'));
    }
  }
}
