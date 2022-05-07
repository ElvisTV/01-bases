import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() nuevo: Personaje =  {
    nombre: '',
    poder: 0,
  }

  constructor(private dbzService: DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return;} // para que solamente se retire sin hacer algo}
    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);
    

    this.nuevo = {
      nombre: '',
      poder: 0,
    }   
  }
}
