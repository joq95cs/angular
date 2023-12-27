import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']

  //template: "<p>Aquí iría un empleado...</p>",

  //styles: ["p { background-color: red; }"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Joqsan";
  apellido = "Castellanos";
  edad = 25;
  empresa = "Diana de Gales";

  /*cambiaEmpresa(event:Event) {

    this.empresa = (<HTMLInputElement>event.target).value;
  }*/

  llamaEmpresa(value: String) {}

  deshabilitado = false;
  registrado = true;

  textoRegistro = "Ningún usuario registrado";

  switchRegistrado() {

    this.registrado = this.registrado == false ? true : false;
  }

  setRegistrado(event:Event) {

    //alert(event.target);

    if((<HTMLInputElement>event.target).value == "S") {

      this.textoRegistro = "Usuario registrado";
    } else {

      this.textoRegistro = "Ningún usuario registrado";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
