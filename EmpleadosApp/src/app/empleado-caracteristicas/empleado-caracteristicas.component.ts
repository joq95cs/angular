import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-empleado-caracteristicas',
  templateUrl: './empleado-caracteristicas.component.html',
  styleUrls: ['./empleado-caracteristicas.component.css']
})

export class EmpleadoCaracteristicasComponent implements OnInit {

  @Output() caracteristicas = new EventEmitter<string>();

  //constructor(private servicio:EmpleadosService) {}

  ngOnInit(): void {}

  agregarCaracteristica(v: string) {

    //this.servicio.mostrarMensaje("Característica agregada: " + v);
    this.caracteristicas.emit(v);
  }
}