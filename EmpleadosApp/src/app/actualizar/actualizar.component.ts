import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosEmpleadosService } from '../datos-empleados.service';
import { Empleado } from '../Empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private servicio:EmpleadosService, private servicioDatos:DatosEmpleadosService) {}

  ngOnInit(): void {

    this.opcion = parseInt(this.route.snapshot.queryParams['opcion']);

    this.empleados = this.servicioDatos.empleados;

    this.index = this.route.snapshot.params['id'];
    let empleado:Empleado = this.servicioDatos.encontrarEmpleado(this.index);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {

    this.router.navigate([""]);
  }

  /*actualizarEmpleado() {

    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.servicio.mostrarMensaje("Nombre del empleado: " + empleado.nombre);
    this.servicioDatos.actualizarEmpleado(this.index, empleado);
    this.volverHome();
  }

  eliminarEmpleado() {

    this.servicioDatos.eliminarEmpleado(this.index);
    this.volverHome();
  }
  */
 
  accion() {

    if(this.opcion == 1) {

      let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.servicio.mostrarMensaje("Nombre del empleado: " + empleado.nombre);
      this.servicioDatos.actualizarEmpleado(this.index, empleado);
      this.volverHome();

    } else {

      this.servicioDatos.eliminarEmpleado(this.index);
      this.volverHome();
    }
  }

  titulo = 'Listado de Empleados';

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  empleados:Empleado[] = [];

  index:number;
  opcion:number;
}
