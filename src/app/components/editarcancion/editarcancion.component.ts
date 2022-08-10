import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICancion } from 'src/app/cancion.model';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-editarcancion',
  templateUrl: './editarcancion.component.html',
  styleUrls: ['./editarcancion.component.css'],
})
export class EditarcancionComponent implements OnInit {
  @Input() id: string = '';
  cancion: ICancion = {
    titulo: '',
    grupo: '',
    anio: 0,
    genero: '',
  };

  constructor(
    private cancionService: CancionService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.id)
      this.cancionService.obtenerCancionPorID(this.id).subscribe((res) => {
        this.cancion = res;
      });
  }
  actualizar() {
    this.cancionService.actualizarCancion(this.cancion).then(() => {
      this.activeModal.close();
      console.log('Correcto');
    });
  }
}
