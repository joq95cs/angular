import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEmpleadosService } from '../datos-empleados.service';
import { Empleado } from '../Empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  constructor(private router: Router, private servicio:EmpleadosService, private servicioDatos:DatosEmpleadosService) {}

  ngOnInit(): void {}
}