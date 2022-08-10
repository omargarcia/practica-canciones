import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICancion } from 'src/app/cancion.model';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {
  cancion: ICancion = {
    titulo: '',
    grupo: '',
    anio: 0,
    genero: '',
  };
  constructor(private cancionService: CancionService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.cancionService.agregarCancion(form.value).then(() => form.reset());
    }
  }
}
