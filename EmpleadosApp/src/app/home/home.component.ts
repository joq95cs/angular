import { Component, NgModule, OnInit } from '@angular/core';
import { DatosEmpleadosService } from '../datos-empleados.service';
import { Empleado } from '../Empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicio:EmpleadosService, private servicioDatos:DatosEmpleadosService) {

    //this.empleados = this.servicioDatos.empleados;
  }

  ngOnInit(): void {
    
    //this.empleados = this.servicioDatos.empleados;
    this.servicioDatos.obtenerEmpleados().subscribe(empleadosRecibidos=>{

      console.log(empleadosRecibidos);

      this.empleados = Object.values(empleadosRecibidos);

      this.servicioDatos.setEmpleados(this.empleados);
    });
  }

  agregarEmpleado() {

    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.servicio.mostrarMensaje("Nombre del empleado: " + empleado.nombre);
    this.servicioDatos.agregarEmpleado(empleado);
  }

  titulo = 'Listado de Empleados';
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  empleados:Empleado[] = [];
}