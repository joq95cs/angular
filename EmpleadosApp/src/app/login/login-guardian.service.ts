import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardianService implements CanActivate{

    constructor(private loginService:LoginService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.loginService.loggedin()) {

            return true;

        } else {

            this.router.navigate(['login']);
            return false;
        }
    }
}