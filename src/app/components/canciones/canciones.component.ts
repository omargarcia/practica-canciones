import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICancion } from 'src/app/cancion.model';
import { CancionService } from 'src/app/services/cancion.service';
import { EditarcancionComponent } from '../editarcancion/editarcancion.component';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
})
export class CancionesComponent implements OnInit {
  canciones: ICancion[] = [];

  constructor(
    private cancionService: CancionService,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.cancionService.obtenerCanciones().subscribe((res: ICancion[]) => {
      this.canciones = res;
    });
  }
  editarCancion(cancion: ICancion) {
    const modalRef = this.modal.open(EditarcancionComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });

    modalRef.componentInstance.id = cancion.id;
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
