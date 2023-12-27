import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre = '';
  apellido = '';
  cargo:string = "";
  entradas: object[];

  constructor() {

    this.entradas = [

      {titulo: "Python cada día más presente..."},
      {titulo: "Java siempre genial..."},
      {titulo: "Kotlin agarrando fuerza..."},
      {titulo: "C++ para los videjuegos..."}
    ];
  }

  registrarUsuario() {

    this.registrado = true;
    this.mensaje = 'Usuario registrado con éxito';
  }
}
