import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private loginService:LoginService) {}//Se inyecta en el componente principal el servicio creado

  ngOnInit(): void { //Se ejecuta inmediatamente después del constructor

    firebase.initializeApp({
      
      apiKey: "AIzaSyDGq923hwfkCrhYD5IRr2PBrthsvDzqOAE",
      authDomain: "angular-empleados-ea821.firebaseapp.com",
    });
  }

  sesionIniciada() {

    return this.loginService.getIDToken();
  }

  logout() {

    return this.loginService.logout();
  }
}