import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../Empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleadoLista:Empleado;
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [""];

  agregarCaracteristica(nuevaCaracteristica: string) {

    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
