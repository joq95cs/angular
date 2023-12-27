import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./Empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataService {

    constructor(private httpClient:HttpClient, private loginService:LoginService) {
    }

    cargarEmpleados() {

        const token = this.loginService.getIDToken();
        return this.httpClient.get('https://angular-empleados-ea821-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarEmpleados(empleados:Empleado[]) {

        const token = this.loginService.getIDToken();
        this.httpClient.put('https://angular-empleados-ea821-default-rtdb.firebaseio.com/datos.json?auth=' + token, empleados).subscribe(
            response=>console.log('Se han guardado los empleados: ' + response),
            error=>console.log('Error: ' + error),
        );
    }

    actualizarEmpleado(index:number, empleado:Empleado) {

        const token = this.loginService.getIDToken();
        let url = 'https://angular-empleados-ea821-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.put(url, empleado).subscribe(
            response=>console.log('Se ha actualizado el empleado: ' + response),
            error=>console.log('Error: ' + error),
        );
    }

    eliminarEmpleado(index:number) {

        const token = this.loginService.getIDToken();
        let url = 'https://angular-empleados-ea821-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.delete(url).subscribe(
            response=>console.log('Se ha eliminado el empleado: ' + response),
            error=>console.log('Error: ' + error),
        );
    }
}