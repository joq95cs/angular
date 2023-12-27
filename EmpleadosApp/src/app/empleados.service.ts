import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  mostrarMensaje(mensaje:string) {

    alert(mensaje);
  }
}