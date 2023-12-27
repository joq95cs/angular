import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Empleado } from "./Empleado.model";
import { EmpleadosService } from "./empleados.service";

@Injectable()
export class DatosEmpleadosService {

    constructor(private servicioMensaje: EmpleadosService, private dataService:DataService) {}

    agregarEmpleado(empleado:Empleado) {

        this.servicioMensaje.mostrarMensaje("EMPLEADO AGREGADO " + "\nNombre: " + empleado.nombre + "\nCargo: " + empleado.cargo);
        this.empleados.push(empleado);

        this.dataService.guardarEmpleados(this.empleados);
    }

    encontrarEmpleado(index:number) {

        let empleado:Empleado = this.empleados[index];
        return empleado;
    }

    actualizarEmpleado(index:number, empleado:Empleado) {

        let empleadoActualizado = this.empleados[index];
        empleadoActualizado.nombre = empleado.nombre;
        empleadoActualizado.apellido = empleado.apellido;
        empleadoActualizado.cargo = empleado.cargo;
        empleadoActualizado.salario = empleado.salario;

        this.dataService.actualizarEmpleado(index, empleado);
    }

    eliminarEmpleado(index:number) {

        this.empleados.splice(index, 1);
        this.dataService.eliminarEmpleado(index);

        if(this.empleados != null) this.dataService.guardarEmpleados(this.empleados);
    }

    obtenerEmpleados() {

        return this.dataService.cargarEmpleados();
    }

    setEmpleados(e:Empleado[]) {

        this.empleados = e;
    }

    empleados:Empleado[] = [];

    /*empleados:Empleado[] = [

        new Empleado("Joqsan", "Castellanos", "Presidente", 60000),
        new Empleado("So Anna", "Castellanos", "Gerente", 15000),
        new Empleado("Lindita", "Castellanos", "Administrativo", 500),
        new Empleado("Jader", "Castellanos", "Vicepresidenta", 45000),
    ];*/
}